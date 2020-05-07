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
      <h1>Alle bysykkelstativ</h1>

      {stations === undefined || stationStatuses === undefined ? (
        <p>Laster...</p>
      ) : (
        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {stations.data.stations.sort(byStationName).map((station) => (
            <a href={`/station/${station.station_id}`}>
              <li
                key={station.station_id}
                style={{
                  backgroundColor: "#153c5f",
                  margin: "0 0 10px 0",
                  borderRadius: "10px",
                  padding: "10px",

                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <p
                  style={{
                    display: "inline",
                    margin: 0,
                    padding: 0,
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  {station.name}
                </p>

                <p style={{ display: "inline", margin: 0, padding: 0 }}>
                  {station.capacity} plasser (
                  {
                    stationStatuses?.data.stations.find(
                      (stationStatus) =>
                        station.station_id === stationStatus.station_id
                    )?.num_bikes_available
                  }{" "}
                  ledige)
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
