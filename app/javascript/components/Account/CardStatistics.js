import React, { useState } from "react";

function CardStatistics() {
  return (
    <div>
      <div
        class="top"
        id="description"
        display="inline-block"
        style={{
          float: "right",
          margin: "0px",
          width: "800px",
        }}
      >
        <div class="statistics">
          <h3>Times watched:</h3>
          <h3>Rating: </h3>
          <h3>Last Watched:</h3>
        </div>
      </div>
    </div>
  );
}

export default CardStatistics;
