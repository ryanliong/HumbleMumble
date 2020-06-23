import React, { useState, useEffect } from "react";
import { Card, Box, Container } from "@material-ui/core";
import { Carousel } from "antd";
import axios from "axios";

function ContentCarousel(props) {
  // Using TMDB
  // const [Reviews, setReviews] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/movie/${props.movieId}}/reviews?api_key=f6fef0b6b13ff8c438075fdee50bb9a8&language=en-US&page=1`
  //     )
  //     .then((resp) => setReviews(resp.data.results))
  //     .catch((resp) => console.log(resp));
  // }, [props.movieId]);

  // const review = Reviews.map((item) => {
  //   return (
  //     <div>
  //       <h3>{item.author}</h3>
  //       <p>{item.content}</p>
  //       <a href="https://www.themoviedb.org/review/4fce8f8819c29523880000de">
  //         Read More
  //       </a>
  //     </div>
  //   );
  // });

  // Using RottenTomamtos + webscrapper (parseHub) for The Avengers
  const [Reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://www.parsehub.com/api/v2/runs/t7cwNVWboUft/data?api_key=tq9HizJt62Tj&format=json`
      )
      .then((resp) => setReviews(resp.data.review))
      .catch((resp) => console.log(resp));
  }, [Reviews.length]);

  const review = Reviews.map((item) => {
    return (
      <div>
        <h3>{item.author}</h3>
        <h5>{item.description}</h5>
      </div>
    );
  });

  const test = Reviews.map((item) => {
    return { author: item.author, description: item.description };
  });

  const test2 = [];

  for (let i = 0; i < test.length; i += 3) {
    if (i + 3 < test.length) {
      test2.push(
        <div>
          <Container maxWidth="md" style={{ marginTop: 50 }}>
            <h3>{test[i].author}</h3>
            <h5 style={{ marginBottom: 50 }}>{test[i].description}</h5>
            <h3>{test[i + 1].author}</h3>
            <h5 style={{ marginBottom: 50 }}>{test[i + 1].description}</h5>
            <h3>{test[i + 2].author}</h3>
            <h5 style={{ marginBottom: 50 }}>{test[i + 2].description}</h5>
          </Container>
        </div>
      );
    }
  }

  console.log(test);

  return (
    <Box>
      <Card style={{ width: 1000 }}>
        <Carousel
          autoplay
          autoplaySpeed={3000}
          style={{
            width: 1000,
            height: 500,
            background: "#364d79",
            overflow: "hidden",
            textAlign: "center",
            lineHeight: 30,
          }}
        >
          {test2}
        </Carousel>
      </Card>
    </Box>
  );
}

export default ContentCarousel;
