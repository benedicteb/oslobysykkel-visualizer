import { byStationName } from "../../src/sortFunctions";

describe("sort a premade station list alphabetically", () => {
  it("should be sorted alphabetically", () => {
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
});
