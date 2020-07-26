import NavBar from "../NavBar/NavBar";
import DescriptionImage from "../MediaComponents/DescriptionImage";
import Description from "../MediaComponents/Description";
import Statistics from "../MediaComponents/Statistics";
import Friends from "../MediaComponents/Friends";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  useRadioGroup,
} from "@material-ui/core";
import ContentCarousel from "../MediaComponents/ContentCarousel";
import InformationBoard from "../MediaComponents/InformationBoard";
import AccountStatistic from "../MediaComponents/AccountStatistic";
import Recommendation from "../MediaComponents/Recommendation";
import FriendList from "../MediaComponents/FriendList";
import InfiniteListExample from "../MediaComponents/InfiniteListExample";
import NavBar2 from "../NavBar/NavBar2";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import LoadingBar from "../MediaComponents/LoadingBar";

function Account() {
  let { slug } = useParams();

  const [UserData, setUserData] = useState({});

  const fetchData = useCallback(() => {
    axios
      .get(`/api/a/accounts/${slug}`)
      .then((resp) => {
        console.log(resp.data.included.filter((item) => item.type === "movie"));
        setUserData({
          name: resp.data.data.attributes.name,
          imageUrl: resp.data.data.attributes.image_url,
          bio: resp.data.data.attributes.bio,
          moviesCount: resp.data.data.relationships.movies.data.length,
          gamesCount: resp.data.data.relationships.games.data.length,
          tvShowsCount: resp.data.data.relationships.tv_shows.data.length,
          tvShows: resp.data.included.filter((item) => item.type === "tv_show"),
          movies: resp.data.included.filter((item) => item.type === "movie"),
          games: resp.data.included.filter((item) => item.type === "game"),
        });
      })
      .catch((resp) => console.log(resp));
  });

  useEffect(() => fetchData(), []);
  const [loading, setLoadStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoadStatus(false), 2000);
  }, []);
  console.log(UserData.moviesCount);

  return (
    <div
      style={{
        backgroundColor: "rgba(76, 116, 118, 0.5)",
      }}
    >
      <NavBar2 page="account" />
      {loading ? (
        <LoadingBar
          message="Please wait..."
          description="Fetching your account..."
        ></LoadingBar>
      ) : (
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
                    imgUrl={UserData.imageUrl}
                    name={UserData.name}
                    type="account"
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
                      {/* InformationBoard here */}
                      <InformationBoard userData={UserData}></InformationBoard>
                    </Grid>
                    <Grid item xs>
                      {/* Description here */}
                      <Description
                        h={275}
                        title="Bio"
                        description={UserData.bio}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs>
              {/* AccountStatistic here */}
              <AccountStatistic data={UserData}></AccountStatistic>
            </Grid>
            <Grid item xs>
              {/* Recommendation here */}
              {/* <Recommendation /> */}
            </Grid>
            <Grid item xs>
              {/* FriendList here */}
              {/* <Card style={{ width: 1310 }}>
              <CardContent style={{ padding: 0 }}>
                <Typography
                  variant="h5"
                  style={{ paddingTop: 16, paddingLeft: 16 }}
                >
                  Friend List
                </Typography>
                <InfiniteListExample></InfiniteListExample>
              </CardContent>
            </Card> */}
            </Grid>
          </Grid>
        </Container>
      )}
    </div>
  );
}

export default Account;
