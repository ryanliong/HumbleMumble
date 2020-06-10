import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import DescriptionImage from "../MediaComponents/DescriptionImage";
import Description from "../MediaComponents/Description";
import Statistics from "../MediaComponents/Statistics";
import Friends from "../MediaComponents/Friends";
import { Container, Grid } from "@material-ui/core";
import ContentCarousel from "../MediaComponents/ContentCarousel";

function TvShow() {
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
                <DescriptionImage
                  imgUrl="https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Kingdomofthecrystalskull.jpg/220px-Kingdomofthecrystalskull.jpg"
                  name="Indiana Jones and the Kingdom of the Crystal Skull"
                  type="movie"
                ></DescriptionImage>
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
                    <ContentCarousel />
                  </Grid>
                  <Grid item xs>
                    {/* Description here */}
                    <Description h={185} title="Description" />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs>
            {/* Statistics here */}
            <Statistics />
          </Grid>
          <Grid item xs>
            {/* Friends reviews here */}
            <Friends />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default TvShow;
