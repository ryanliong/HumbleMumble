import React from "react";
import { Container, Box } from "@material-ui/core";

function Logo(props) {
  return (
    <Container maxWidth="xs">
      <Box>
        <a href={props.link}>
          <img
            src={process.env.PUBLIC_URL + "/MH.png"}
            alt="HumbleMumble"
            id={props.name}
          />
        </a>
      </Box>
    </Container>
  );
}

export default Logo;
