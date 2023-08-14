import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ tiles }) => {
  if (!tiles) {
    return;
  }
  return (
    <div>
      {tiles.map((tile, i) => {
        const { name, ...description } = tile;
        return (
          <Tile key={i} name={name} description={description} />
        )
      })}
    </div>
  );
};
