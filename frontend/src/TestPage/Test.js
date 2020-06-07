// Use for testing to replace old pages incase of breaking othe pages

import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import DescriptionImageTest from "./DescriptionImageTest";
import ReviewTest from "./ReviewTest";
import DescriptionTest from "./DescriptionTest";
import StatisticsTest from "./StatisticsTest";
import FriendsTest from "./FriendsTest";

function Movie() {
  return (
    <div>
      <NavBar name="SmallLogo" />
      <div id="movie">
        <DescriptionImageTest
          imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Kingdomofthecrystalskull.jpg/220px-Kingdomofthecrystalskull.jpg"
          name="Indiana Jones and the Kingdom of the Crystal Skull"
        ></DescriptionImageTest>
        <h1 id="title">Indiana Jones</h1>
        <ReviewTest
          imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Kingdomofthecrystalskull.jpg/220px-Kingdomofthecrystalskull.jpg"
          name="Indiana Jones and the Kingdom of the Crystal Skull"
        />
        <ReviewTest
          imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Kingdomofthecrystalskull.jpg/220px-Kingdomofthecrystalskull.jpg"
          name="Indiana Jones and the Kingdom of the Crystal Skull"
        />
        <ReviewTest
          imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Kingdomofthecrystalskull.jpg/220px-Kingdomofthecrystalskull.jpg"
          name="Indiana Jones and the Kingdom of the Crystal Skull"
        />
        <DescriptionTest />
        <StatisticsTest />
        <FriendsTest />
      </div>
    </div>
  );
}

export default Movie;
