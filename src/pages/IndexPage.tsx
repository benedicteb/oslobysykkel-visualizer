import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { fetchStations } from "../services/oslobysykkel";

const IndexPage = () => {
  const [searchResults, setSearchResults] = useState<
    StationInformation[] | undefined
  >(undefined);

  const [stations, setStations] = useState<StationInformationList | undefined>(
    undefined
  );

  useEffect(() => {
    fetchStations().then((stationList) => {
      setStations(stationList);
    });
  }, []);

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "200px 0",
        }}
      >
        <h1>Søk etter bysykkelstativ</h1>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            maxWidth: "600px",
          }}
        >
          <input
            style={{
              width: "100%",
              borderRadius: "40px 0 0 40px",
              border: "0",
              padding: "10px 20px",
              fontSize: "22px",
              outline: "none",
            }}
            type={"text"}
            placeholder={"Arendalsgata"}
            onChange={(event) => {
              const searchTerms = event.target.value;

              if (!searchTerms) {
                setSearchResults(undefined);

                return;
              }

              const searchResults = stations?.data.stations.filter((station) =>
                station.name.toLowerCase().includes(searchTerms.toLowerCase())
              );

              setSearchResults(searchResults);
            }}
          />

          <button
            style={{
              fontSize: "22px",
              borderRadius: "0 40px 40px 0",
              padding: "10px 20px 10px 10px",
              backgroundColor: "#25901ead",
              color: "white",
              border: "0",
            }}
          >
            Søk
          </button>
        </div>

        <a style={{ margin: "10px 0" }} href={"/all-stations"}>
          Se alle stasjoner
        </a>

        {searchResults !== undefined ? (
          <div style={{ alignSelf: "flex-start" }}>
            <h2>Resultater fra søket</h2>

            {searchResults.length > 0 ? (
              <ul style={{ listStyle: "none" }}>
                {searchResults?.map((station) => (
                  <a
                    key={station.station_id}
                    href={`/station/${station.station_id}`}
                  >
                    <li>{station.name}</li>
                  </a>
                ))}
              </ul>
            ) : (
              <p>Fant dessverre ingen stasjoner som passet søket.</p>
            )}
          </div>
        ) : null}
      </div>
    </Layout>
  );
};

export default IndexPage;
