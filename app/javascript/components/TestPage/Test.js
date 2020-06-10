import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import DescriptionImage from "../MediaComponents/DescriptionImage";
import Description from "../MediaComponents/Description";
import Statistics from "../MediaComponents/Statistics";
import Friends from "../MediaComponents/Friends";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import ContentCarousel from "../MediaComponents/ContentCarousel";
import InformationBoard from "../MediaComponents/InformationBoard";
import AccountStatistic from "../MediaComponents/AccountStatistic";
import Recommendation from "../MediaComponents/Recommendation";
import FriendList from "../MediaComponents/FriendList";
import InfiniteListExample from "../MediaComponents/InfiniteListExample";

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
                  name="Profile picture"
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
                    {/* InformationBoard here */}
                    <InformationBoard></InformationBoard>
                  </Grid>
                  <Grid item xs>
                    {/* Description here */}
                    <Description h={275} title="Bio" />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs>
            {/* AccountStatistic here */}
            <AccountStatistic></AccountStatistic>
          </Grid>
          <Grid item xs>
            {/* Recommendation here */}
            <Recommendation />
          </Grid>
          <Grid item xs>
            {/* FriendList here */}
            <Card style={{ width: 1310 }}>
              <CardContent style={{ padding: 0 }}>
                <Typography
                  variant="h5"
                  style={{ paddingTop: 16, paddingLeft: 16 }}
                >
                  Friend List
                </Typography>
                <InfiniteListExample></InfiniteListExample>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Test;
