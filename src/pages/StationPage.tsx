import React, { useEffect, useState } from "react";

import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import { fetchAvailability, fetchStations } from "../services/oslobysykkel";
import useInterval from "../hooks/useInterval";

const secondsSinceLastReported = (stationStatus: StationStatus) => {
  const now = new Date();
  const lastReported = new Date(stationStatus.last_reported * 1000);
  const millisSinceUpdated = now.getTime() - lastReported.getTime();

  return Math.round(millisSinceUpdated / 1000.0);
};

const StationPage = () => {
  const [stationStatus, setStationStatus] = useState<StationStatus | undefined>(
    undefined
  );

  const [stationInformation, setStationInformation] = useState<
    StationInformation | undefined
  >(undefined);

  const [secondsSinceUpdated, setSecondsSinceUpdated] = useState<
    number | undefined
  >(undefined);

  useEffect(() => {
    fetchAvailability().then((statusList) => {
      const stationStatus = statusList.data.stations.find(
        (station) => station.station_id === stationId
      );

      if (!stationStatus) {
        return;
      }

      setSecondsSinceUpdated(secondsSinceLastReported(stationStatus));
      setStationStatus(stationStatus);
    });

    fetchStations().then((stationList) => {
      setStationInformation(
        stationList.data.stations.find(
          (station) => station.station_id === stationId
        )
      );
    });
  }, []);

  useInterval(() => {
    if (stationStatus === undefined) {
      return;
    }

    setSecondsSinceUpdated(secondsSinceLastReported(stationStatus));
  }, 500);

  const { stationId } = useParams();

  return (
    <Layout>
      {stationStatus === undefined || stationInformation === undefined ? (
        <p>Laster informasjon...</p>
      ) : (
        <>
          <h1 style={{ fontSize: "48px" }}>{stationInformation?.name}</h1>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "72px",
                  display: "inline",
                  margin: 0,
                  padding: 0,
                }}
              >
                {stationStatus?.num_bikes_available}
              </h2>{" "}
              <h3
                style={{
                  fontSize: "28px",
                  display: "inline",
                  margin: 0,
                  padding: 0,
                }}
              >
                {stationStatus?.num_bikes_available > 1
                  ? "ledige sykler"
                  : "ledig sykkel"}{" "}
                av totalt{" "}
                {stationStatus?.num_bikes_available +
                  stationStatus?.num_docks_available}{" "}
                plasser
              </h3>
            </div>

            {secondsSinceUpdated || -1 > 0 ? (
              <p>Oppdatert {secondsSinceUpdated} sekunder siden</p>
            ) : (
              <p>Akkurat nå</p>
            )}
          </div>
        </>
      )}
    </Layout>
  );
};

export default StationPage;
