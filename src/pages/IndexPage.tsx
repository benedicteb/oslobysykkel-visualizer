import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { fetchStations } from "../services/oslobysykkel";
import SearchBox from "../components/search/SearchBox";
import SearchResults from "../components/search/SearchResults";

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
          <SearchBox setSearchResults={setSearchResults} stations={stations} />
        </div>

        <div>
          <a style={{ margin: "10px" }} href={"/all-stations"}>
            Se alle stasjoner
          </a>

          <a style={{ margin: "10px" }} href={"/station-map"}>
            Kart med stasjoner
          </a>
        </div>

        {searchResults !== undefined ? (
          <SearchResults searchResults={searchResults} />
        ) : null}
      </div>
    </Layout>
  );
};

export default IndexPage;
