interface StationInformation {
  station_id: string;
  name: string;
  address: string;
  lat: number;
  lon: number;
  capacity: number;
}

interface StationStatus {
  is_installed: boolean;
  is_renting: boolean;
  num_bikes_available: number;
  num_docks_available: number;
  last_reported: number;
  is_returning: boolean;
  station_id: string;
}

interface StationInformationList {
  last_updated: number;
  data: { stations: StationInformation[] };
}

interface StationStatusList {
  last_updated: number;
  data: { stations: StationStatus[] };
}
