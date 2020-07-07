import React, { useCallback } from "react";
import { useState } from "react";
// Returns an object with specified params for various different calls to IGDB

function IGDB(props) {
  const axios = require("axios");
  const fields =
    props.type == "games"
      ? "fields artworks, cover, name, category, first_release_date, genres, popularity, rating, slug, summary, total_rating, videos, websites, screenshots; "
      : "fields *;";

  const search =
    props.type == "games"
      ? 'search "' + props.title + '"; '
      : "where id = " + props.title + ";";

  const limit = "limit 10;";
  // console.log(fields + search + limit);

  return axios({
    url:
      "https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/" +
      props.type,

    method: "POST",
    headers: {
      Accept: "application/json",
      "user-key": "6566022df8cf4bef79b3c0bf261ed902",
    },
    data: fields + search + limit,
  })
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((err) => {
      console.error(err);
    });
}

export default IGDB;
