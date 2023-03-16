import { GeoJSON } from "geojson";

export type GeoHouse = {
  title: string;
  data: GeoJSON;
  color: string;
  haloColor?: string;

  visible: boolean;
};
