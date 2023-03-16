import React, { useRef } from "react";
import { GeoJSON } from "geojson";

interface Props {
  layersVisible: boolean[];
  onVisibleChanged: (layerIndex: number, visible: boolean) => void;

  onLayerAdded: (data: GeoJSON) => void;
}

export const LayerManagerControl: React.FC<Props> = ({
  layersVisible,
  onVisibleChanged,
  onLayerAdded,
}) => {
  const fileRef = useRef<HTMLInputElement>(null);
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

      <input
        ref={fileRef}
        style={{
          marginTop: 16,
        }}
        type="file"
        onChange={(event) => {
          return new Promise((resolve, reject) => {
            if (!event.target?.files?.[0]) return;
            const fileReader = new FileReader();
            fileReader.onload = (onLoadEvent) =>
              onLoadEvent?.target?.result
                ? resolve(JSON.parse(onLoadEvent.target.result.toString()))
                : reject();
            fileReader.onerror = (error) => reject(error);
            fileReader.readAsText(event.target.files[0]);
          })
            .then((data) => data && onLayerAdded(data as GeoJSON))
            .finally(() => {
              fileRef!.current!.value = "";
            });
        }}
      />
    </div>
  );
};
