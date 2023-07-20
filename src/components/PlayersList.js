// src/PlayersList.js
import React from "react";
import Player from "./Player";
import players from "./Players";

const PlayersList = () => {
  return (
    <div style={{display:'grid', gridTemplateColumns:"1fr 1fr 1fr 1fr", backgroundImage: 'conic-gradient(from 90deg at 50% 125%, #1f005c, #003298, #005ac6, #007fdc, #00a2d3, #00c4ae, #00e474, #00ff00, #1f005c, #003298, #005ac6, #007fdc, #00a2d3, #00c4ae, #00e474, #00ff00)'}}>
      {players.map((players, index) => (
        <Player key={index} {...players} />
      ))}
    </div>
  );
};

export default PlayersList;