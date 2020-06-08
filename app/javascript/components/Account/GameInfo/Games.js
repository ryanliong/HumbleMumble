import React, { Component } from "react";
import GameCard from "./GameCard";

function Games() {
  return (
    <div id="AccountInfo">
      <h1 id="title" style={{ marginTop: "2em" }}>
        Games
      </h1>
      <div class="card" style={{ width: "82rem", marginTop: "1em" }}>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <GameCard imgUrl="https://store-images.s-microsoft.com/image/apps.23351.64828036868441790.79978c50-d657-45e2-9dd7-f132b22f3122.3ce2b04c-f38a-4e9d-aab9-b1a2812c0e33"></GameCard>
          </li>
          <li class="list-group-item">
            <GameCard imgUrl="https://store-images.s-microsoft.com/image/apps.23351.64828036868441790.79978c50-d657-45e2-9dd7-f132b22f3122.3ce2b04c-f38a-4e9d-aab9-b1a2812c0e33"></GameCard>
          </li>
          <li class="list-group-item">
            <GameCard imgUrl="https://store-images.s-microsoft.com/image/apps.23351.64828036868441790.79978c50-d657-45e2-9dd7-f132b22f3122.3ce2b04c-f38a-4e9d-aab9-b1a2812c0e33"></GameCard>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Games;
