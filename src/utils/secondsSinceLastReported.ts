const secondsSinceLastReported = (stationStatus: StationStatus) => {
  const now = new Date();
  const lastReported = new Date(stationStatus.last_reported * 1000);
  const millisSinceUpdated = now.getTime() - lastReported.getTime();

  return Math.round(millisSinceUpdated / 1000.0);
};

export default secondsSinceLastReported;
