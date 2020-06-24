import React, { useState, useCallback, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import DescriptionImage from "../MediaComponents/DescriptionImage";
import Description from "../MediaComponents/Description";
import Statistics from "../MediaComponents/Statistics";
import Friends from "../MediaComponents/Friends";
import { Container, Grid } from "@material-ui/core";
import ContentCarousel from "../MediaComponents/ContentCarousel";
import NavBar2 from "../NavBar/NavBar2";
import { useParams } from "react-router-dom";
import axios from "axios";
import { resolveOnChange } from "antd/lib/input/Input";

function Game() {
  let { game } = useParams();
  const searchTerm = decodeURIComponent(game);
  const URIsearchTerm = encodeURI(game);

  const [responseData, setResponseData] = useState("");

  const fetchData = useCallback(() => {
    axios({
      method: "GET",
      // replace space with hyphen for url
      url: "https://chicken-coop.p.rapidapi.com/games/grand-theft-auto-v",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "chicken-coop.p.rapidapi.com",
        "x-rapidapi-key": "fb9bb69136msh0a13f1ccffcac42p14fdccjsnb016d0269e52",
        useQueryString: true,
      },
      params: {
        platform: "pc",
      },
    })
      .then((response) => {
        console.log(response.data.result);
        setResponseData(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const extractedData = {
    title: responseData.title,
    availablePlatform: responseData.alsoAvailableOn,
    description: responseData.description,
    releaseDate: responseData.releaseDate,
    imageUrl: responseData.image,
    rating: responseData.rating,
    developer: responseData.developer,
    score: responseData.score,
  };

  useEffect(() => fetchData(), [fetchData]);

  console.log(extractedData);

  return (
    <div>
      <NavBar2 page="game" />
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
                  imgUrl={extractedData.imageUrl}
                  name={extractedData.title}
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
                    <ContentCarousel />
                  </Grid>
                  <Grid item xs>
                    {/* Description here */}
                    <Description
                      h={185}
                      description={extractedData.description}
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

export default Game;
