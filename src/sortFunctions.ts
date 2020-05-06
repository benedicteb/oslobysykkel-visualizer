const byStationName = (a: StationInformation, b: StationInformation) => {
  if (a.name > b.name) {
    return 1;
  } else if (b.name > a.name) {
    return -1;
  }

  return 0;
};

export { byStationName };
