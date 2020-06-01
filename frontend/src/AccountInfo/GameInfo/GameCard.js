import React, { Component } from "react";
import CardStatistics from "../CardStatistics";
import CheckBox from "../CheckBox";

function GameCard(props) {
  return (
    <div class="card" style={{ width: "80rem" }}>
      <div class="card-body">
        <img src={props.imgUrl} alt="GameImage" id="ThumbnailImage" />
        <h5 class="card-title">The Flash</h5>
        <CheckBox />
        <p class="card-text">Last Watched on 1/1/2020</p>
        <div>
          <a href="#" class="card-link" style={{ float: "left" }}>
            Continue where you left off
          </a>
          <a href="#" class="card-link" style={{ float: "left" }}>
            Read Reviews
          </a>
          <CardStatistics style={{ float: "left" }}></CardStatistics>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
