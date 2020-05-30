import React, { useState } from "react";
import NavBar from "./NavBar/NavBar";
import DescriptionImage from "./DescriptionImage";
import Review from "./Review";
import Description from "./Description";
import Statistics from "./Statistics";
import Friends from "./Friends";

function Movie() {
  return (
    <div>
      <NavBar name="SmallLogo" />
      <div id="movie">
        <DescriptionImage
          imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Kingdomofthecrystalskull.jpg/220px-Kingdomofthecrystalskull.jpg"
          name="Indiana Jones and the Kingdom of the Crystal Skull"
        ></DescriptionImage>
        <h1 id="title">Indiana Jones</h1>
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
    </div>
  );
}

export default Movie;
