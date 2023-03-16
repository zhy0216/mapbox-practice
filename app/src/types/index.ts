import { GeoJSON } from "geojson";

export type GeoHouse = {
  id: number;
  title: string;
  data: GeoJSON;
  color: string;
  haloColor?: string;

  visible: boolean;
};
