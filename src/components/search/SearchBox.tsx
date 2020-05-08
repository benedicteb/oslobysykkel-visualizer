import React from "react";

const SearchBox: React.FC<{
  setSearchResults: (results: StationInformation[] | undefined) => void;
  stations?: StationInformationList;
}> = ({ setSearchResults, stations }) => (
  <>
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
  </>
);

export default SearchBox;
