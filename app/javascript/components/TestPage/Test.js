import React from "react";
import { Container, Typography } from "@material-ui/core";
import Logo from "../MediaComponents/Logo";
function Test() {
  return (
    <div>
      <Container>
        <Typography variant="h1">Error 404 page not found!</Typography>
        <a href="/">
          <img src="/MH.png" alt="HumbleMumble" style={{ marginLeft: 70 }} />
        </a>
      </Container>
    </div>
  );
}

export default Test;
