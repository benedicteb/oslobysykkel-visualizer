import React from "react";

const SearchResults: React.FC<{ searchResults: StationInformation[] }> = ({
  searchResults,
}) => (
  <div style={{ alignSelf: "flex-start" }}>
    <h2>Resultater fra søket</h2>

    {searchResults.length > 0 ? (
      <ul style={{ listStyle: "none" }}>
        {searchResults?.map((station) => (
          <a key={station.station_id} href={`/station/${station.station_id}`}>
            <li>{station.name}</li>
          </a>
        ))}
      </ul>
    ) : (
      <p>Fant dessverre ingen stasjoner som passet søket.</p>
    )}
  </div>
);

export default SearchResults;
