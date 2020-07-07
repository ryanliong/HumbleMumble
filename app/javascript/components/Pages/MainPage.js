import React from "react";
import NavBar2 from "../NavBar/NavBar2";
import Logo from "../MediaComponents/Logo";
import SearchBar from "../MediaComponents/SearchBar";
import Container from "@material-ui/core/Container";
import { Box } from "@material-ui/core";

function MainPage() {
  return (
    <div>
      <NavBar2 page="home"></NavBar2>
      <div
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/109669/pexels-photo-109669.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`,
          minHeight: "100%",
          minWidth: "100%",
          position: "absolute",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Container maxWidth="lg">
          <Box
            style={{
              backgroundColor: "rgba(255,255,255,0.75)",
              width: "100%",
              height: 800,
              marginTop: 100,
              minWidth: 800,
              borderRadius: 5,
            }}
          >
            <Logo name="FrontPageLogo" link="/" />
            <SearchBar style="flex" type="MainPage" />
          </Box>
        </Container>
      </div>
    </div>
  );
}

export default MainPage;
