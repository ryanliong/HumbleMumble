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
import IGDB from "../API/IGDB";

function Results() {
  //configured only for movies and TvShows for now
  let { slug } = useParams();
  const searchTerm = decodeURIComponent(slug);
  const URIsearchTerm = encodeURI(slug);
  //movie consts here
  const [Movies, setMovies] = useState([]);
  //game consts here
  const [gameResult, changeGameResult] = useState("");
  const [gameCover, changeGameCover] = useState("");
  console.log(slug);
  const [TvShows, setTvShows] = useState([]);

  useEffect(() => {
    //Movies api grabbing here
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=f6fef0b6b13ff8c438075fdee50bb9a8&language=en-US&query=${URIsearchTerm}&page=1&include_adult=false`
      )
      .then((resp) => setMovies(resp.data.results))
      .catch((resp) => console.log(resp));

    //Games api grabbing here
    const fetchData = IGDB({ type: "games", title: slug });
    Promise.all([fetchData]).then((values) => {
      const searchResults = values[0];
      changeGameResult(searchResults);

      const getCover = searchResults.map((gameDetails) => {
        return IGDB({ type: "covers", title: gameDetails.cover });
      });

      Promise.all(getCover).then((values) => {
        const arrayOfCoverUrl = values
          .map((flatten) => flatten[0])
          .map((getImgID) => getImgID.image_id)
          .map(
            (setImageTo1080p) =>
              "http://images.igdb.com/igdb/image/upload/t_1080p/" +
              setImageTo1080p +
              ".jpg"
          );
        changeGameCover(arrayOfCoverUrl);
      });
    });
  }, [Movies.length, URIsearchTerm]);

  console.log(gameResult);
  console.log(gameCover);

  let gameDetails =
    gameResult != ""
      ? gameResult.map((item) => {
          return {
            title: item.name,
            overview: item.summary,
            image_url: null,
            id: item.id,
          };
        })
      : "";

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

  const tvShows = TvShows.map((item) => {
    return {
      title: item.name,
      overview: item.overview,
      image_url:
        item.poster_path == null
          ? item.poster_path
          : "http://image.tmdb.org/t/p/w300" + item.poster_path,
      id: item.id,
    };
  });

  const searchResultItem = [];
  const gameSearchResult = [];
  //Game search result item generation here
  if (gameDetails != "") {
    if (gameCover != "") {
      for (let i = 0; i < gameResult.length; i += 1) {
        gameDetails[i].image_url = gameCover[i];
      }
      console.log(gameDetails);
    }

    for (let i = 0; i < gameResult.length; i += 2) {
      if (gameResult.length - 1 < 1) {
        gameSearchResult.push(
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
                  attributes={gameDetails[i]}
                  link={{
                    goTo: "/Game/" + gameResult[i].slug,
                    action: "",
                  }}
                />
              </Grid>
              <Grid item xs={6}></Grid>
            </Grid>
          </Grid>
        );
      } else {
        gameSearchResult.push(
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
                  attributes={gameDetails[i]}
                  link={{
                    goTo: "/Game/" + gameResult[i].slug,
                    action: "",
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <SearchResultsItem
                  attributes={gameDetails[i + 1]}
                  link={{
                    goTo: "/Game/" + gameResult[i + 1].slug,
                    action: "",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        );
      }
    }
  }
  //Movie search result item generation here
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

  //For TvShows
  for (let i = 0; i < tvShows.length; i += 2) {
    if (tvShows.length == 1) {
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
                attributes={tvShows[i]}
                link={{
                  goTo:
                    "/Tv-Show/" +
                    encodeURI(tvShows[i].title) +
                    "+" +
                    tvShows[i].id,
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      );
    }

    if (i + 2 < tvShows.length) {
      const tvShowID1 = tvShows[i].id;
      const tvShowID2 = tvShows[i + 1].id;

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
                attributes={tvShows[i]}
                link={{
                  goTo:
                    "/Tv-Show/" + encodeURI(tvShows[i].title) + "+" + tvShowID1,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <SearchResultsItem
                attributes={tvShows[i + 1]}
                link={{
                  goTo:
                    "/Tv-Show/" +
                    encodeURI(tvShows[i + 1].title) +
                    "+" +
                    tvShowID2,
                }}
              ></SearchResultsItem>
            </Grid>
          </Grid>
        </Grid>
      );
    }
  }

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
          <Typography
            variant="h2"
            style={{
              color: "white",
              fontWeight: "bold",
              textShadow: "2px 2px black",
            }}
            mark={true}
          >
            Games
          </Typography>
          <Grid
            container
            direction="column"
            justify="flex-end"
            alignItems="stretch"
            spacing={2}
          >
            {gameSearchResult}
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Results;
