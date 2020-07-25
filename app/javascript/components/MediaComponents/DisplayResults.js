import React, { useState, useEffect } from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import NavBar2 from "../NavBar/NavBar2";
import SearchResultsItem from "../MediaComponents/SearchResultsItems";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import IGDB from "../API/IGDB";

function DisplayResults(props) {
  const displayArray = [];
  const [resultArray, setResultArray] = useState("");
  /*Input constants:
    cover: game cover
    result: result from game/tvshow/movie
    type: Tv-Show, Movie, Game
    */

  //Updates the array when the api fetches the data
  useEffect(() => setResultArray(props.details.result), [props.details.result]);

  if (props.details.cover != "") {
    //for games cover to be attached in to the object
    if (props.details.type === "Game") {
      for (let i = 0; i < resultArray.length; i += 1) {
        resultArray[i].image_url = props.details.cover[i];
      }
    }
    //loop through to generate list of results
    for (let i = 0; i < resultArray.length; i += 2) {
      if (resultArray.length - i - 1 < 1) {
        //if odd results appear generate only one card
        displayArray.push(
          <Grid item xs key={i}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
              spacing={2}
            >
              <Grid item key={props.details.type + i} xs={6}>
                <SearchResultsItem
                  attributes={resultArray[i]}
                  link={{
                    goTo: "/" + props.details.type + "/" + resultArray[i].slug,
                  }}
                />
              </Grid>
              <Grid item xs={6}></Grid>
            </Grid>
          </Grid>
        );
      } else {
        //if even results appear generate cards beside each other
        displayArray.push(
          <Grid item xs key={i}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
              spacing={2}
            >
              <Grid item key={props.details.type + i} xs={6}>
                <SearchResultsItem
                  attributes={resultArray[i]}
                  link={{
                    goTo: "/" + props.details.type + "/" + resultArray[i].slug,
                  }}
                />
              </Grid>
              <Grid item key={props.details.type + (i + 1)} xs={6}>
                <SearchResultsItem
                  attributes={resultArray[i + 1]}
                  link={{
                    goTo:
                      "/" + props.details.type + "/" + resultArray[i + 1].slug,
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        );
      }
    }
  }

  return displayArray;
}

export default DisplayResults;
