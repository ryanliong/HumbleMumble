import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@material-ui/core";
import NavBar2 from "../NavBar/NavBar2";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import IGDB from "../API/IGDB";
import DisplayResults from "../MediaComponents/DisplayResults";
import LoadingBar from "../MediaComponents/LoadingBar";

function Results() {
  let { slug } = useParams();
  const searchTerm = decodeURIComponent(slug);
  const URIsearchTerm = encodeURI(slug);
  // loading consts here
  const [loading, setLoadStatus] = useState(true);
  //Movie consts here
  const [Movies, setMovies] = useState([]);
  const [showMovie, setDisplayMovie] = useState(true);
  //Game consts here
  const [gameResult, changeGameResult] = useState("");
  const [gameCover, changeGameCover] = useState("");
  const [showGame, setDisplayGame] = useState(true);
  //Tv consts here
  const [TvShows, setTvShows] = useState([]);
  const [showTvShow, setDisplayTvShow] = useState(true);
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

      const getCover = searchResults.map(async (gameDetails) => {
        // handle when there is no cover id followed up in line 57
        return gameDetails.cover === undefined
          ? [{ image_id: null }]
          : IGDB({ type: "covers", title: gameDetails.cover });
      });

      Promise.all(getCover).then((values) => {
        const arrayOfCoverUrl = values
          .map((flatten) => flatten[0])
          .map((getImgID) => getImgID.image_id)
          .map((setImageTo1080p) =>
            // continuation of handling when there is no cover id
            setImageTo1080p === null
              ? null
              : "http://images.igdb.com/igdb/image/upload/t_1080p/" +
                setImageTo1080p +
                ".jpg"
          );
        changeGameCover(arrayOfCoverUrl);
      });
    });

    //Tv api grabbing here
    axios
      .get(
        `https://api.themoviedb.org/3/search/tv?api_key=f6fef0b6b13ff8c438075fdee50bb9a8&language=en-US&page=1&query=${URIsearchTerm}&include_adult=false`
      )
      .then((resp) => setTvShows(resp.data.results))
      .catch((resp) => console.log(resp));
  }, [Movies.length, URIsearchTerm]);

  //set loading for 2 secs
  useEffect(() => {
    setTimeout(() => setLoadStatus(false), 2000);
  }, []);

  //Mapped elements start from here, mapping for display
  let gameDetails =
    gameResult != ""
      ? gameResult.map((item) => {
          return {
            title: item.name,
            overview: item.summary,
            image_url: null,
            id: item.id,
            slug: item.slug,
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
      slug: encodeURI(item.title) + "+" + item.id,
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
      slug: encodeURI(item.name) + "+" + item.id,
    };
  });

  const topItem = Movies[0];

  const backgroundUrl =
    topItem != null
      ? topItem.backdrop_path != null
        ? "http://image.tmdb.org/t/p/original" + topItem.backdrop_path
        : "http://image.tmdb.org/t/p/original" + topItem.poster_path
      : "https://images.pexels.com/photos/161154/stained-glass-spiral-circle-pattern-161154.jpeg";

  //code to generate a block of list is here
  const generateBlock = (text, details) => (
    <Card style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}>
      <CardContent>
        {" "}
        <Typography
          variant="h2"
          style={{
            color: "white",
            fontWeight: "bold",
            textShadow: "2px 2px black",
          }}
        >
          {text}
        </Typography>
        <Grid
          container
          direction="column"
          justify="flex-end"
          alignItems="stretch"
          spacing={2}
        >
          <DisplayResults details={details}></DisplayResults>
        </Grid>
      </CardContent>
    </Card>
  );

  //code to switch between categories here
  const categoryStyle = {
    color: "white",
    fontWeight: "bold",
    textShadow: "2px 2px black",
    cursor: "pointer",
  };
  //sets what shows when things are clicked
  const filterSelector = (text) => {
    if (text === "Game") {
      setDisplayGame(true);
      setDisplayTvShow(false);
      setDisplayMovie(false);
    } else if (text === "Movie") {
      setDisplayMovie(true);
      setDisplayTvShow(false);
      setDisplayGame(false);
    } else if (text === "TvShow") {
      setDisplayTvShow(true);
      setDisplayGame(false);
      setDisplayMovie(false);
    } else if (text === "All") {
      setDisplayTvShow(true);
      setDisplayGame(true);
      setDisplayMovie(true);
    }
  };
  //maps the text to blocks to show
  const categorySelector = [
    "All",
    "/ ",
    "Movie",
    " /",
    "TvShow",
    " / ",
    "Game",
  ].map((category) => (
    <Grid item key={category}>
      <Typography
        variant="h2"
        style={categoryStyle}
        onClick={() => filterSelector(category)}
        onMouseEnter
      >
        {category}
      </Typography>{" "}
    </Grid>
  ));

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
        {/* loading bar here */}
        {loading ? (
          <LoadingBar
            message="Please wait..."
            description="Fetching your results..."
          ></LoadingBar>
        ) : (
          <Container style={{ marginTop: 20, maxWidth: 1400 }}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={3}
            >
              {/* category selector block */}
              {categorySelector}
            </Grid>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item key="movieBlock">
                {/* movie block */}
                {showMovie &&
                  generateBlock("Movie", {
                    result: movie,
                    cover: "Movie",
                    type: "Movie",
                  })}
              </Grid>
              <Grid item key="tvShowBlock">
                {/* tv show block */}
                {showTvShow &&
                  generateBlock("Tv-Show", {
                    result: tvShows,
                    cover: "Tv-show",
                    type: "Tv-Show",
                  })}
              </Grid>
              <Grid item key="gameBlock">
                {/* game block */}
                {showGame &&
                  generateBlock("            Games", {
                    result: gameDetails,
                    cover: gameCover,
                    type: "Game",
                  })}
              </Grid>
            </Grid>
          </Container>
        )}
      </div>
    </div>
  );
}

export default Results;
