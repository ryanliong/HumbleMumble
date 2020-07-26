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
            `Total: ${
              props.moviesCount + props.gamesCount + props.tvShowsCount
            }`,
          ]}
        ></InformationCard>
        <Grid container item xs={4} spacing={1}>
          <InformationCard
            type="random"
            name="Game"
            info={[
              `Games played: ${props.gamesCount}`,
              "Time Spent",
              "Favourites",
            ]}
          ></InformationCard>
          <InformationCard
            type="random"
            name="Movie"
            info={[
              `Movies watched: ${props.moviesCount}`,
              "Time Spent",
              "Favourites",
            ]}
          ></InformationCard>
        </Grid>
        <Grid container item xs={4} spacing={1}>
          <InformationCard
            type="random"
            name="Tv-Show"
            info={[
              `Tv Shows watched: ${props.tvShowsCount}`,
              "Time Spent",
              "Favourites",
            ]}
          ></InformationCard>
          <InformationCard
            type="random"
            name="Other information here"
            info={[]}
          ></InformationCard>
        </Grid>
      </Grid>
    </Box>
  );
}

export default InformationBoard;
