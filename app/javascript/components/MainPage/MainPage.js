import React from "react";
import NavBar from "../NavBar/NavBar";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Container from "@material-ui/core/Container";

function MainPage() {
  return (
    <div background>
      <Container maxWidth="xl">
        <NavBar name="SmallLogo" />
        <Logo name="FrontPageLogo" link="/" />
        <SearchBar style="flex" />
      </Container>
    </div>
  );
}

export default MainPage;
