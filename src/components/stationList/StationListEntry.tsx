import React from "react";

const StationListEntry: React.FC<{
  information: StationInformation;
  status: StationStatus;
}> = ({ information, status }) => (
  <a href={`/station/${information.station_id}`}>
    <li
      className={"column-on-small"}
      key={information.station_id}
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
        {information.name}
      </p>

      <p className={"align-end-on-small"} style={{ display: "inline" }}>
        {status.num_bikes_available} ledige sykler ({status.num_docks_available}{" "}
        ledige låser)
      </p>
    </li>
  </a>
);

export default StationListEntry;
