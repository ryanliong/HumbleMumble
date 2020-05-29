import React, { useState } from "react";
import NavBar from "./NavBar/NavBar";
import DescriptionImage from "./DescriptionImage";
import Review from "./Review";
import Description from "./Description";
import Statistics from "./Statistics";
import Friends from "./Friends";

function Game() {
  return (
    <div id="movie">
      <NavBar name="SmallLogo" />
      <DescriptionImage
        imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Kingdomofthecrystalskull.jpg/220px-Kingdomofthecrystalskull.jpg"
        name="Indiana Jones and the Kingdom of the Crystal Skull"
      ></DescriptionImage>
      <h1 id="title">Indiana Jones(Game)</h1>
      <Review
        imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Kingdomofthecrystalskull.jpg/220px-Kingdomofthecrystalskull.jpg"
        name="Indiana Jones and the Kingdom of the Crystal Skull"
      />
      <Review
        imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Kingdomofthecrystalskull.jpg/220px-Kingdomofthecrystalskull.jpg"
        name="Indiana Jones and the Kingdom of the Crystal Skull"
      />
      <Review
        imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Kingdomofthecrystalskull.jpg/220px-Kingdomofthecrystalskull.jpg"
        name="Indiana Jones and the Kingdom of the Crystal Skull"
      />
      <Description />
      <Statistics />
      <Friends />
    </div>
  );
}

export default Game;
