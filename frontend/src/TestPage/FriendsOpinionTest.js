import React, { useState } from "react";
import Statistics from "./StatisticsTest";
function FriendsOpinion() {
  return (
    <div class="top" id="friendsOpnion">
      <h1>Friend Name</h1>
      <img
        src="https://steemitimages.com/DQmQbki6acfNKT9cX3MWBxsxSTHEEk16PVeqyvGyCXSVu6i/friend.jpg"
        alt="Friend DP"
        style={{ width: 250 }}
      />
      <div class="top" id="friendStats">
        <h2>Times watched:</h2>
        <h2>Rating: </h2>
        <h2>Last Watched:</h2>
        <p style={{ fontSize: 10 }}>
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et incidunt
          iure eveniet neque consectetur perspiciatis asperiores, voluptatum
          ipsam. Doloribus amet exercitationem commodi magni hic consequuntur
          vitae adipisci ut modi dolorum."
        </p>
      </div>
      {/* <Statistics /> */}
    </div>
  );
}

export default FriendsOpinion;
