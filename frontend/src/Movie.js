import React, { useState } from "react";
import NavBar from "./NavBar/NavBar";
import DescriptionImage from "./DescriptionImage";

function Movie() {
  return (
    <div>
      <NavBar name="SmallLogo" />
      <DescriptionImage
        imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Kingdomofthecrystalskull.jpg/220px-Kingdomofthecrystalskull.jpg"
        name="Indiana Jones and the Kingdom of the Crystal Skull"
      ></DescriptionImage>
    </div>
  );
}

export default Movie;
