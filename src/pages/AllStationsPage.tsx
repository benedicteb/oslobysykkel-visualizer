import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { fetchAvailability, fetchStations } from "../services/oslobysykkel";
import { byStationName } from "../sortFunctions";

const AllStationsPage = () => {
  const [stations, setStations] = useState<StationInformationList | undefined>(
    undefined
  );
  const [stationStatuses, setStationStatuses] = useState<
    StationStatusList | undefined
  >(undefined);

  useEffect(() => {
    fetchStations().then((stationList) => {
      setStations(stationList);
    });

    fetchAvailability().then((statusList) => {
      setStationStatuses(statusList);
    });
  }, []);

  return (
    <Layout>
      <h1 style={{ margin: "20px 0" }}>Alle bysykkelstativ</h1>

      {stations === undefined || stationStatuses === undefined ? (
        <p>Laster...</p>
      ) : (
        <ul style={{ listStyle: "none" }}>
          {stations.data.stations.sort(byStationName).map((station) => (
            <a href={`/station/${station.station_id}`}>
              <li
                className={"column-on-small"}
                key={station.station_id}
                style={{
                  backgroundColor: "#153c5f",
                  margin: "0 0 10px 0",
                  borderRadius: "10px",
                  padding: "10px",
                }}
              >
                <p
                  className={"align-start-on-small"}
                  style={{
                    display: "inline",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  {station.name}
                </p>

                <p
                  className={"align-end-on-small"}
                  style={{ display: "inline" }}
                >
                  {
                    stationStatuses?.data.stations.find(
                      (stationStatus) =>
                        station.station_id === stationStatus.station_id
                    )?.num_bikes_available
                  }{" "}
                  ledige sykler (
                  {
                    stationStatuses?.data.stations.find(
                      (stationStatus) =>
                        station.station_id === stationStatus.station_id
                    )?.num_docks_available
                  }{" "}
                  ledige låser)
                </p>
              </li>
            </a>
          ))}
        </ul>
      )}
    </Layout>
  );
};

export default AllStationsPage;
