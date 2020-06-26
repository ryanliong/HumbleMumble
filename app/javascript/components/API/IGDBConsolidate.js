import React, { useEffect, useState, useCallback } from "react";
import { Container, Typography } from "@material-ui/core";
import { useParams } from "react-router";
import IGDB from "./IGDB";

function IGDBConsolidate() {
  const [result, changeResult] = useState({});

  const fetchData = IGDB({ type: "games", title: "Halo" });
  useEffect(() => {
    Promise.all([fetchData]).then((values) => {
      const searchResults = values[0];
      console.log(searchResults);
      changeResult(searchResults);
      const getCover = searchResults.map((gameDetails) => {
        return IGDB({ type: "covers", title: gameDetails.cover });
      });

      Promise.all(getCover).then((values) =>
        console.log(values.map((flatten) => flatten[0]))
      );
    });
  }, []);

  return result;
}

export default IGDBConsolidate;
