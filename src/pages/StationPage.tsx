import React, { useEffect, useState } from "react";

import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import { fetchAvailability, fetchStations } from "../services/oslobysykkel";

const StationPage = () => {
  const [stationStatus, setStationStatus] = useState<StationStatus | undefined>(
    undefined
  );

  const [stationInformation, setStationInformation] = useState<
    StationInformation | undefined
  >(undefined);

  useEffect(() => {
    fetchAvailability().then((statusList) => {
      setStationStatus(
        statusList.data.stations.find(
          (station) => station.station_id === stationId
        )
      );
    });

    fetchStations().then((stationList) => {
      setStationInformation(
        stationList.data.stations.find(
          (station) => station.station_id === stationId
        )
      );
    });
  }, []);

  const { stationId } = useParams();

  return (
    <Layout>
      {stationStatus === undefined || stationInformation === undefined ? (
        <p>Laster informasjon...</p>
      ) : (
        <h1>{stationInformation?.name}</h1>
      )}
    </Layout>
  );
};

export default StationPage;
