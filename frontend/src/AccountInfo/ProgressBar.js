import React, { Component } from "react";

function ProgressBar() {
  return (
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        aria-valuenow="70"
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ width: "70%" }}
      >
        <span class="sr-only">70% Complete</span>
      </div>
    </div>
  );
}

export default ProgressBar;
