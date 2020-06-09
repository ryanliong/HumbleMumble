// Use for testing to replace old pages incase of breaking othe pages

import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import DescriptionImageTest from "./DescriptionImage";
import DescriptionTest from "./DescriptionTest";
import StatisticsTest from "./StatisticsTest";
import FriendsTest from "./FriendsTest";
import { Container, Grid } from "@material-ui/core";
import ReviewCarousel from "./ReviewCarousel";

function Movie() {
  return (
    <div>
      <NavBar name="SmallLogo" />
      <Container maxWidth="lg" style={{ marginTop: 150 }}>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
          spacing={4}
        >
          <Grid item xs>
            <Grid
              container
              spacing={1}
              direction="row"
              justify="center"
              alignItems="flex-start"
            >
              <Grid item xs>
                <DescriptionImageTest
                  imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Kingdomofthecrystalskull.jpg/220px-Kingdomofthecrystalskull.jpg"
                  name="Indiana Jones and the Kingdom of the Crystal Skull"
                ></DescriptionImageTest>
              </Grid>
              <Grid item xs={9}>
                <Grid
                  container
                  direction="column"
                  justify="flex-start"
                  alignItems="stretch"
                  spacing={2}
                >
                  <Grid item xs>
                    <ReviewCarousel />
                  </Grid>
                  <Grid item xs>
                    <DescriptionTest />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs>
            <StatisticsTest />
          </Grid>
          <Grid item xs>
            <FriendsTest />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Movie;
