import React, { Component } from "react";
import CardStatistics from "../CardStatistics";
import ProgressBar from "../ProgressBar";

function ShowCard(props) {
  return (
    <div class="card" style={{ width: "80rem" }}>
      <div class="card-body">
        <img src={props.imgUrl} alt="ShowImage" id="ThumbnailImage" />
        <h5 class="card-title">The Flash</h5>
        <h6 class="card-subtitle mb-2 text-muted">
          <ProgressBar />
        </h6>
        <p class="card-text">Last Watched on 1/1/2020</p>
        <div>
          <a href="#" class="card-link" style={{ float: "left" }}>
            Continue where you left off
          </a>
          <a
            href="#"
            class="card-link"
            style={{ float: "left", marginRight: "5px" }}
          >
            Read Reviews
          </a>
          <CardStatistics style={{ float: "left" }}></CardStatistics>
        </div>
      </div>
    </div>
  );
}

export default ShowCard;
