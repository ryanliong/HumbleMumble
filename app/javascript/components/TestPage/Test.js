import React, { useEffect, useState, useCallback } from "react";
import { Container, Typography } from "@material-ui/core";
import { useParams } from "react-router";
import IGDB from "../API/IGDB";
import IGDBConsolidate from "../API/IGDBConsolidate";
function Test() {
  const [result, changeResult] = useState(IGDBConsolidate());

  useEffect(() => console.log(result), []);

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
