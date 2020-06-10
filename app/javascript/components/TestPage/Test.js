import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import DescriptionImage from "../MediaComponents/DescriptionImage";
import Description from "../MediaComponents/Description";
import Statistics from "../MediaComponents/Statistics";
import Friends from "../MediaComponents/Friends";
import { Container, Grid } from "@material-ui/core";
import ContentCarousel from "../MediaComponents/ContentCarousel";
import InformationBoard from "../MediaComponents/InformationBoard";

function Test() {
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
                  imgUrl="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  name="Indiana Jones and the Kingdom of the Crystal Skull"
                  type="game"
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
                    {/* <ContentCarousel /> */}
                    <InformationBoard></InformationBoard>
                  </Grid>
                  <Grid item xs>
                    {/* Description here */}
                    {/* <Description /> */}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs>
            {/* Statistics here */}
            {/* <Statistics /> */}
          </Grid>
          <Grid item xs>
            {/* Friends reviews here */}
            {/* <Friends /> */}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Test;
