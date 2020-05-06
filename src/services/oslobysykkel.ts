import config from "../config.json";

const makeGETRequest = (file: string) => {
  return fetch(`${config.gbfsHost}/${config.gbfsService}/${file}`, {
    method: "GET",
    headers: {
      "Client-Identifier": config.clientId,
      Accept: "application/json"
    }
  }).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  });
};

const fetchStations = () => {
  return makeGETRequest("station_information.json").then(
    json => json as StationInformationList
  );
};

const fetchAvailability = () => {
  return makeGETRequest("station_status.json").then(
    json => json as StationStatusList
  );
};

export { fetchStations, fetchAvailability };
