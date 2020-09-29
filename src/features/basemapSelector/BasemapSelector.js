import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./BasemapSelector.module.css";
import { setBaseMap } from "../map/mapSlice";

export function BasemapSelector() {
  const selectedBaseMap = useSelector((state) => state.map.baseMap);
  const dispatch = useDispatch();

  const BASEMAPS = [
    { name: "positron", style: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" },
    { name: "voyager", style: "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json" },
    {
      name: "dark-matter",
      style: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
    },
  ];

  return (
    <div className={styles.BasemapSelector}>
      <h3>Layer selector</h3>
      {BASEMAPS.map((basemap) => (
        <>
          <input
            id={"radio-" + basemap.name}
            type="radio"
            name="basemap"
            value={basemap.style}
            defaultChecked={selectedBaseMap.style === basemap.style}
            onClick={() => dispatch(setBaseMap({ mapType: "mapbox", style: basemap.style }))}
          />
          <label for={"radio-" + basemap.name}>{basemap.name}</label>
        </>
      ))}
    </div>
  );
}
