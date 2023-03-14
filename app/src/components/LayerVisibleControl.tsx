import React from "react";

interface Props {
  layersVisible: boolean[];
  onVisibleChanged: (layerIndex: number, visible: boolean) => void;
}

export const LayerVisibleControl: React.FC<Props> = ({
  layersVisible,
  onVisibleChanged,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        padding: "16px",
        background: "rgba(0,0,0,0.8)",
      }}
    >
      <div>图层管理</div>
      {layersVisible.map((v, i) => (
        <div key={i} style={{ display: "flex", gap: 8, fontSize: "0.8em" }}>
          <div>图层{i + 1}</div>
          <input
            type="checkbox"
            checked={v}
            onChange={(e) => onVisibleChanged(i, e.target.checked)}
          ></input>
        </div>
      ))}
    </div>
  );
};
