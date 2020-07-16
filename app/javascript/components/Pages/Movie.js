import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import DescriptionImage from "../MediaComponents/DescriptionImage";
import Description from "../MediaComponents/Description";
import Statistics from "../MediaComponents/Statistics";
import Friends from "../MediaComponents/Friends";
import { Container, Grid } from "@material-ui/core";
import ContentCarousel from "../MediaComponents/ContentCarousel";
import axios from "axios";
import { useParams } from "react-router-dom";
import NavBar2 from "../NavBar/NavBar2";

function Movie() {
  let { slug } = useParams();
  let splitVal = slug.split("+");
  let rawSearchTerm = splitVal[0];
  let movieID = splitVal[1];
  const searchTerm = decodeURIComponent(rawSearchTerm);
  const URIsearchTerm = encodeURI(rawSearchTerm);
  const [Movies, setMovies] = useState({});
  const [RT, setRT] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieID}?api_key=f6fef0b6b13ff8c438075fdee50bb9a8&language=en-US`
      )
      .then((resp) => setMovies(resp.data))
      .catch((resp) => console.log(resp));

    axios
      .get(`/movie/${URIsearchTerm}`)
      .then((resp) => setRT(resp.data))
      .catch((resp) => console.log(resp));
  }, [RT.length]);

  const movie = Movies;

  const backgroundUrl =
    movie.backdrop_path != ""
      ? "http://image.tmdb.org/t/p/original" + movie.backdrop_path
      : "http://image.tmdb.org/t/p/original" + movie.poster_path;
  //create generic object here that is same across all categories for easy processing of information

  const movieData = {
    title: movie.title, //DescriptionImage name
    type: "movie", //DescriptionImage type
    description: movie.overview, //Description description
    imageUrl: "http://image.tmdb.org/t/p/w300" + movie.poster_path, // DescriptionImage imgURL
    Id: movie.id, //ContentCarousel movieId
  };

  const rottenTomData = RT.map((item) => {
    return {
      name: item.name,
      publication: item.publication,
      date: item.date,
      description: item.description,
      score: item.score,
      link: item.link,
    };
  }); //To be passed to ContentCarousel to forLoop through

  return (
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
      <NavBar2 page="movie" />
      {/* information starting from here will be abstracted away, please include all needed information in an object */}
      <Container maxWidth="lg" style={{ marginTop: 50 }}>
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
                  imgUrl={"http://image.tmdb.org/t/p/w300" + movie.poster_path}
                  name={movie.title}
                  type="movie"
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
                    <ContentCarousel movieId={movie.id} RT={RT} />
                  </Grid>
                  <Grid item xs>
                    {/* Description here */}
                    <Description
                      h={185}
                      title="Description"
                      description={movie.overview}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs>
            {/* Statistics here */}
            <Statistics />
          </Grid>
          <Grid item xs>
            {/* Friends reviews here */}
            <Friends />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Movie;
