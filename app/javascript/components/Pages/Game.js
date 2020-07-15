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
import IGDB from "../API/IGDB";

function Game() {
  let { game } = useParams();
  const makeTitle = (slug) => {
    var words = slug.split("-");

    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }

    return words.join(" ");
  };

  const [responseData, setResponseData] = useState("");
  const [cover, setCover] = useState("");
  const [igdbData, setIgdbData] = useState("");

  const fetchData = useCallback(() => {
    //metacritic information
    axios({
      method: "GET",
      // replace space with hyphen for url
      url: "https://chicken-coop.p.rapidapi.com/games/" + game,
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

    //igdb information

    const igdbFetch = IGDB({ type: "games", title: makeTitle(game) });
    Promise.all([igdbFetch]).then((values) => {
      const searchResults = values[0];
      setIgdbData(searchResults);

      const getCover =
        searchResults[0].cover === undefined
          ? [{ image_id: null }]
          : IGDB({ type: "covers", title: searchResults[0].cover });

      Promise.resolve(getCover).then((values) => {
        setCover(
          values[0].image_id === null
            ? null
            : "http://images.igdb.com/igdb/image/upload/t_1080p/" +
                values[0].image_id +
                ".jpg"
        );
      });
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

  useEffect(() => fetchData(), []);

  //create generic object here that is same across all categories for easy processing of information
  return (
    <div>
      <NavBar2 page="game" />
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
                  imgUrl={cover}
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
