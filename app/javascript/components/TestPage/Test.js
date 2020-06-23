import React, { useEffect, useState, useCallback } from "react";
import { Container, Typography } from "@material-ui/core";
import { useParams } from "react-router";
function Test() {
  let { slug } = useParams();
  const searchTerm = decodeURIComponent(slug);
  const URIsearchTerm = encodeURI(slug);

  const axios = require("axios");

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
