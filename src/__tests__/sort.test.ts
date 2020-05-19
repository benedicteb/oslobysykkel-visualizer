import { byStationName } from "../sortFunctions";

test("sort a premade station list alphabetically and verify result", () => {
  const stationList: StationInformation[] = [
    {
      station_id: "123",
      name: "b",
      address: "adress",
      lat: 1.23,
      lon: 1.23,
      capacity: 20,
    },
    {
      station_id: "123",
      name: "c",
      address: "adress",
      lat: 1.23,
      lon: 1.23,
      capacity: 20,
    },
    {
      station_id: "123",
      name: "c",
      address: "adress",
      lat: 1.23,
      lon: 1.23,
      capacity: 20,
    },
    {
      station_id: "123",
      name: "a",
      address: "adress",
      lat: 1.23,
      lon: 1.23,
      capacity: 20,
    },
  ];

  const sortedList = stationList.sort(byStationName);

  expect(sortedList).toEqual([
    {
      station_id: "123",
      name: "a",
      address: "adress",
      lat: 1.23,
      lon: 1.23,
      capacity: 20,
    },
    {
      station_id: "123",
      name: "b",
      address: "adress",
      lat: 1.23,
      lon: 1.23,
      capacity: 20,
    },
    {
      station_id: "123",
      name: "c",
      address: "adress",
      lat: 1.23,
      lon: 1.23,
      capacity: 20,
    },
    {
      station_id: "123",
      name: "c",
      address: "adress",
      lat: 1.23,
      lon: 1.23,
      capacity: 20,
    },
  ]);
});
