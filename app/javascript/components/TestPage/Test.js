import React, { useEffect, useState, useCallback } from "react";
import { Container, Typography } from "@material-ui/core";
import { useParams } from "react-router";
import IGDB from "../API/IGDB";
import IGDBConsolidate from "../API/IGDBConsolidate";
function Test() {
  const [result, changeResult] = useState("");
  const [cover, changeCover] = useState("");

  useEffect(() => {
    const fetchData = IGDB({ type: "games", title: "Halo" });
    Promise.all([fetchData]).then((values) => {
      const searchResults = values[0];
      changeResult(searchResults);

      const getCover = searchResults.map((gameDetails) => {
        return IGDB({ type: "covers", title: gameDetails.cover });
      });

      Promise.all(getCover).then((values) => {
        const arrayOfCoverUrl = values
          .map((flatten) => flatten[0])
          .map((getImgID) => getImgID.image_id)
          .map(
            (setImageTo1080p) =>
              "images.igdb.com/igdb/image/upload/t_1080p/" +
              setImageTo1080p +
              ".jpg"
          );
        changeCover(arrayOfCoverUrl);
      });
    });
  }, []);

  console.log(result);
  console.log(cover);

  return (
    <div>
      <Container>
        <Typography variant="h1">Error 404 page not found!</Typography>
        <a href="/">
          <img src="/MH.png" alt="HumbleMumble" style={{ marginLeft: 70 }} />
        </a>
      </Container>
    </div>
  );
}

export default Test;
