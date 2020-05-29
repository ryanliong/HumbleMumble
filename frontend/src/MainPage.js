import React, { Component } from "react";
import NavBar from "./NavBar/NavBar";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div>
      <NavBar name="SmallLogo" />
      <Logo name="FrontPageLogo" link="index.html" />
      <SearchBar />
    </div>
  );
}

export default MainPage;
