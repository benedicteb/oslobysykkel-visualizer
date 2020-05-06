import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";

const IndexPage = () => {
  const [searchTerms, setSearchTerms] = useState("");

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "200px 0"
        }}
      >
        <h1 style={{ margin: 0 }}>Søk etter bysykkelstativ</h1>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <input
            style={{
              width: "500px",
              borderRadius: "40px",
              border: "0",
              padding: "10px",
              fontSize: "22px"
            }}
            type={"text"}
            value={searchTerms}
            onChange={event => {
              setSearchTerms(event.target.value);
            }}
          />

          <button
            style={{ fontSize: "22px", margin: "0 10px", borderRadius: "5px" }}
          >
            Søk
          </button>
        </div>

        <a style={{ margin: "10px 0" }} href={"/all-stations"}>
          Se alle stasjoner
        </a>
      </div>
    </Layout>
  );
};

export default IndexPage;
