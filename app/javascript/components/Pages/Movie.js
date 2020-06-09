// Use for testing to replace old pages incase of breaking other pages
import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import DescriptionImageTest from "../MediaComponents/DescriptionImage";
import DescriptionTest from "../MediaComponents/Description";
import StatisticsTest from "../MediaComponents/Statistics";
import FriendsTest from "../MediaComponents/Friends";
import { Container, Grid } from "@material-ui/core";
import ReviewCarousel from "../MediaComponents/ReviewCarousel";

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
                {/* Top left image here */}
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
                    {/* Carousel here */}
                    <ReviewCarousel />
                  </Grid>
                  <Grid item xs>
                    {/* Description here */}
                    <DescriptionTest />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs>
            {/* Statistics here */}
            <StatisticsTest />
          </Grid>
          <Grid item xs>
            {/* Friends reviews here */}
            <FriendsTest />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Movie;
