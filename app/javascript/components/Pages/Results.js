import React, { useState, useEffect } from "react";
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
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function Results() {
  //configured only for movies for now
  let { slug } = useParams();
  const searchTerm = decodeURIComponent(slug);
  const URIsearchTerm = encodeURI(slug);
  const [Movies, setMovies] = useState([]);
  const reloadNavbar = <NavBar2 page="results"></NavBar2>;

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=f6fef0b6b13ff8c438075fdee50bb9a8&language=en-US&query=${URIsearchTerm}&page=1&include_adult=false`
      )
      .then((resp) => setMovies(resp.data.results))
      .catch((resp) => console.log(resp));
  }, [Movies.length, URIsearchTerm]);

  const movie = Movies.map((item) => {
    return {
      title: item.title,
      overview: item.overview,
      image_url:
        item.poster_path == null
          ? item.poster_path
          : "http://image.tmdb.org/t/p/w300" + item.poster_path,
      id: item.id,
    };
  });

  const searchResultItem = [];

  for (let i = 0; i < movie.length; i += 2) {
    if (i + 2 < movie.length) {
      const movieID1 = movie[i].id;
      const movieID2 = movie[i + 1].id;

      searchResultItem.push(
        <Grid item xs>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            spacing={1}
          >
            <Grid item xs={6}>
              <SearchResultsItem
                attributes={movie[i]}
                link={{
                  goTo: "/Movie/" + encodeURI(movie[i].title) + "+" + movieID1,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <SearchResultsItem
                attributes={movie[i + 1]}
                link={{
                  goTo:
                    "/Movie/" + encodeURI(movie[i + 1].title) + "+" + movieID2,
                }}
              ></SearchResultsItem>
            </Grid>
          </Grid>
        </Grid>
      );
    }
  }
  const topItem = Movies[0];

  const backgroundUrl =
    topItem != null
      ? topItem.backdrop_path != null
        ? "http://image.tmdb.org/t/p/original" + topItem.backdrop_path
        : "http://image.tmdb.org/t/p/original" + topItem.poster_path
      : "https://images.pexels.com/photos/161154/stained-glass-spiral-circle-pattern-161154.jpeg";

  console.log(backgroundUrl);
  topItem != null ? console.log(topItem) : "";

  return (
    <div>
      <NavBar2 page="results"></NavBar2>
      <div
        style={{
          backgroundImage: `url(${backgroundUrl})`,
          minHeight: "100%",
          minWidth: "100%",
          position: "absolute",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Container style={{ marginTop: 20 }}>
          <Typography
            variant="h2"
            style={{
              color: "white",
              fontWeight: "bold",
              textShadow: "2px 2px black",
            }}
            mark={true}
          >
            Movies
          </Typography>
          <Grid
            container
            direction="column"
            justify="flex-end"
            alignItems="stretch"
            spacing={2}
          >
            {searchResultItem}
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Results;
