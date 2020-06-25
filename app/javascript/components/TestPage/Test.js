import React, { useEffect, useState, useCallback } from "react";
import { Container, Typography } from "@material-ui/core";
import { useParams } from "react-router";
import IGDB from "../API/IGDB";
function Test() {
  const axios = require("axios");
  // const fetchData = useCallback(() => {
  //   axios({
  //     url:
  //       "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/private/reviews",
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "user-key": "6566022df8cf4bef79b3c0bf261ed902",
  //     },
  //     data:
  //       "fields category,checksum,conclusion,content,created_at,game,introduction,likes,negative_points,platform,positive_points,slug,title,updated_at,url,user,user_rating,video,views;limit 50;",
  //   })
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);
  const [result, changeResult] = useState({});
  const fetchData = IGDB({ type: "games", title: "Halo" });
  useEffect(() => changeResult(fetchData), []);
  console.log(result);
  return (
    <div>
      <Container>
        <Typography variant="h1"></Typography>
        <a href="/">
          <img src="/MH.png" alt="HumbleMumble" style={{ marginLeft: 70 }} />
        </a>
      </Container>
    </div>
  );
}

export default Test;
