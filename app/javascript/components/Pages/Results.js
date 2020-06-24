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

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=f6fef0b6b13ff8c438075fdee50bb9a8&language=en-US&query=${URIsearchTerm}&page=1&include_adult=false`
      )
      .then((resp) => setMovies(resp.data.results))
      .catch((resp) => console.log(resp));
  }, [Movies.length]);

  const movie = Movies.map((item) => {
    return {
      title: item.title,
      overview: item.overview,
      image_url: "http://image.tmdb.org/t/p/w300" + item.poster_path,
      id: item.id,
    };
  });

  const searchResultItem = [];

  for (let i = 0; i < movie.length; i += 2) {
    if (i + 2 < movie.length) {
      const movieID1 = () => localStorage.setItem("movieID", movie[i].id);
      const movieID2 = () => localStorage.setItem("movieID", movie[i + 1].id);
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
              <Link
                to={"/Movie/" + encodeURI(movie[i].title)}
                onClick={movieID1}
              >
                <SearchResultsItem attributes={movie[i]}></SearchResultsItem>
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Link
                to={"/Movie/" + encodeURI(movie[i + 1].title)}
                onClick={movieID2}
              >
                <SearchResultsItem
                  attributes={movie[i + 1]}
                ></SearchResultsItem>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      );
    }
  }

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
          {searchResultItem}
        </Grid>
      </Container>
    </div>
  );
}

export default Results;
