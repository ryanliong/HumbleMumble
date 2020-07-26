import React from "react";
import { Card, CardContent, Typography, Box, Grid } from "@material-ui/core";
import InformationCard from "./InformationCard";

function InformationBoard(props) {
  return (
    <Box style={{ width: 1020 }}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={1}
      >
        <InformationCard
          type="overall"
          info={[
            `Tv Shows watched: ${props.userData.tvShowsCount}`,
            `Movies watched: ${props.userData.moviesCount}`,
            `Games played: ${props.userData.gamesCount}`,
            `Total media: ${
              props.userData.moviesCount +
              props.userData.gamesCount +
              props.userData.tvShowsCount
            }`,
          ]}
        ></InformationCard>
        <Grid container item xs={4} spacing={1}>
          <InformationCard
            type="random"
            name="Games played"
            info={props.userData.games}
            color="linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)"
          ></InformationCard>
          <InformationCard
            type="random"
            name="Movies watched"
            info={props.userData.movies}
            color={"linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%)"}
          ></InformationCard>
        </Grid>
        <Grid container item xs={4} spacing={1}>
          <InformationCard
            type="random"
            name="Tv-Show watched"
            info={props.userData.tvShows}
            color={"linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)"}
          ></InformationCard>
          <InformationCard
            type="random"
            name="All Media"
            info={props.userData.tvShows
              .concat(props.userData.movies)
              .concat(props.userData.games)}
            color={"linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)"}
          ></InformationCard>
        </Grid>
      </Grid>
    </Box>
  );
}

export default InformationBoard;
