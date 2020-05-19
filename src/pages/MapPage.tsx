import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { fetchAvailability, fetchStations } from "../services/oslobysykkel";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import config from "../config.json";
import { useHistory } from "react-router-dom";

const MapPage = () => {
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

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: config.googleApiKey,
  });

  const history = useHistory();

  return (
    <Layout>
      <h1>Kart</h1>

      {!isLoaded || stationStatuses === undefined || stations === undefined ? (
        <p>Laster...</p>
      ) : (
        <GoogleMap
          zoom={15}
          center={{ lat: 59.911491, lng: 10.757933 }}
          mapContainerStyle={{ width: "1000px", height: "1000px" }}
        >
          {stations?.data.stations.map((station) => (
            <Marker
              key={station.station_id}
              label={`${
                stationStatuses?.data.stations.find(
                  (stationStatus) =>
                    stationStatus.station_id === station.station_id
                )?.num_bikes_available
              }`}
              position={{ lat: station.lat, lng: station.lon }}
              onClick={() => {
                history.push(`/station/${station.station_id}`);
              }}
            />
          ))}
        </GoogleMap>
      )}
    </Layout>
  );
};

export default MapPage;
