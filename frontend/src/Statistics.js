import React, { useState } from "react";

function Statistics() {
  return (
    <div>
      <h1 style={{ fontSize: 30, padding: 0, marginLeft: 50, marginTop: 50 }}>
        Personal Statistics
      </h1>
      <div class="top" id="description">
        <div class="statistics">
          <h2>Times watched:</h2>
          <h2>Rating: </h2>
          <h2>Last Watched:</h2>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
