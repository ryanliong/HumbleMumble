import React from "react";
import NavBar from "./NavBar/NavBar";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

function MainPage() {
  return (
    <div>
      <NavBar name="SmallLogo" />
      <Logo name="FrontPageLogo" link="/" />
      <SearchBar />
    </div>
  );
}

export default MainPage;
