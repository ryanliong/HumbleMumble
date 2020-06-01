import React, { useState } from "react";

function AccountStatistics() {
  return (
    <div>
      <h1 style={{ fontSize: 30, padding: 0, marginLeft: 50, marginTop: 50 }}>
        Personal Statistics
      </h1>
      <div class="top" id="description" style={{ width: "70%" }}>
        <div class="statistics">
          <h2>Total Movies Watched:</h2>
          <h2>Total Shows Watched: </h2>
          <h2>Total Games Completed:</h2>
        </div>
      </div>
    </div>
  );
}

export default AccountStatistics;
