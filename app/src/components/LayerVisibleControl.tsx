import React from "react";
import { GeoHouse } from "@/types";

interface Props {
  geoHouses: GeoHouse[];
  onVisibleChanged: (layerIndex: number, visible: boolean) => void;
}

export const LayerVisibleControl: React.FC<Props> = ({
  geoHouses,
  onVisibleChanged,
}) => {
  return (
    <div
      style={{
        color: "white",
        position: "absolute",
        padding: "16px",
        background: "rgba(0,0,0,0.8)",
      }}
    >
      <div>图层管理</div>
      {geoHouses.map((gh, i) => (
        <div key={i} style={{ display: "flex", gap: 8, fontSize: "0.8em" }}>
          <div>{gh.title}</div>
          <input
            type="checkbox"
            checked={gh.visible}
            onChange={(e) => onVisibleChanged(i, e.target.checked)}
          ></input>
        </div>
      ))}
    </div>
  );
};
