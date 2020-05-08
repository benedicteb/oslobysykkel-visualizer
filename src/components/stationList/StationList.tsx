import React from "react";
import { byStationName } from "../../sortFunctions";
import StationListEntry from "./StationListEntry";

const StationList: React.FC<{
  stations: StationInformationList;
  stationStatuses: StationStatusList;
}> = ({ stations, stationStatuses }) => (
  <ul style={{ listStyle: "none" }}>
    {stations?.data.stations.sort(byStationName).map((station) => {
      const stationStatus = stationStatuses.data.stations.find(
        (stationStatus) => station.station_id === stationStatus.station_id
      );

      if (!stationStatus) {
        return;
      }

      return <StationListEntry information={station} status={stationStatus} />;
    })}
  </ul>
);

export default StationList;
