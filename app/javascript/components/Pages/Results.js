import React from "react";
import {
  Container,
  CardMedia,
  Card,
  CardContent,
  Typography,
  Grid,
} from "@material-ui/core";
import NavBar2 from "../NavBar/NavBar2";
import SearchResultsItem from "../MediaComponents/SearchResultsItems";

function Results() {
  return (
    <div>
      <NavBar2 page="results"></NavBar2>
      <Container style={{ marginTop: 50 }}>
        <Typography variant="h3">Movies</Typography>
        <Grid
          container
          direction="column"
          justify="flex-end"
          alignItems="stretch"
          spacing={2}
        >
          <Grid item xs>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
              spacing={1}
            >
              <Grid item xs={6}>
                <SearchResultsItem></SearchResultsItem>
              </Grid>
              <Grid item xs={6}>
                <SearchResultsItem></SearchResultsItem>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
              spacing={1}
            >
              <Grid item xs={6}>
                <SearchResultsItem></SearchResultsItem>
              </Grid>
              <Grid item xs={6}>
                <SearchResultsItem></SearchResultsItem>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
              spacing={1}
            >
              <Grid item xs={6}>
                <SearchResultsItem></SearchResultsItem>
              </Grid>
              <Grid item xs={6}>
                <SearchResultsItem></SearchResultsItem>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
              spacing={1}
            >
              <Grid item xs={6}>
                <SearchResultsItem></SearchResultsItem>
              </Grid>
              <Grid item xs={6}>
                <SearchResultsItem></SearchResultsItem>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
              spacing={1}
            >
              <Grid item xs={6}>
                <SearchResultsItem></SearchResultsItem>
              </Grid>
              <Grid item xs={6}>
                <SearchResultsItem></SearchResultsItem>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
              spacing={1}
            >
              <Grid item xs={6}>
                <SearchResultsItem></SearchResultsItem>
              </Grid>
              <Grid item xs={6}>
                <SearchResultsItem></SearchResultsItem>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Results;
