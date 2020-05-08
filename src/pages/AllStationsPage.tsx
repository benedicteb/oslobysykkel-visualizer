import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { fetchAvailability, fetchStations } from "../services/oslobysykkel";
import StationList from "../components/stationList/StationList";

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
        <StationList stations={stations} stationStatuses={stationStatuses} />
      )}
    </Layout>
  );
};

export default AllStationsPage;
