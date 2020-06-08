import React, { useState } from "react";
import FriendsOpinion from "./FriendsOpinion";
function Friends() {
  return (
    <div>
      <h1 style={{ fontSize: 30, padding: 0, marginLeft: 50, marginTop: 50 }}>
        Friends Opinion
      </h1>
      <div class="top" id="description">
        <div class="statistics">
          <FriendsOpinion />
          <FriendsOpinion />
          <FriendsOpinion />
        </div>
      </div>
    </div>
  );
}

export default Friends;
