import React, { useState } from "react";

function Review(props) {
  return (
    <div class="top">
      <img src={props.imgUrl} alt="DescriptionImage" id="reviewerImage" />
      <h1 id="review">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
        reprehenderit.
      </h1>
      <h2 id="score">Score</h2>
    </div>
  );
}

export default Review;
