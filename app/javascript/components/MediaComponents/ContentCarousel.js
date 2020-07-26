import React, { useState, useEffect } from "react";
import { Card, Box, Container, Typography } from "@material-ui/core";
import { Carousel } from "antd";
import axios from "axios";

function ContentCarousel(props) {
  //from TMDB
  // const [Reviews, setReviews] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/movie/${props.movieId}}/reviews?api_key=f6fef0b6b13ff8c438075fdee50bb9a8&language=en-US&page=1`
  //     )
  //     .then((resp) => setReviews(resp.data.results))
  //     .catch((resp) => console.log(resp));
  // }, [props.movieId]);

  // const test = Reviews.map((item) => {
  //   return { author: item.author, description: item.content };
  // });

  //from RT
  const test =
    props.type === "game"
      ? [
          { author: "WIP", description: "Under Contruction" },
          { author: "WIP", description: "Under Contruction" },
          { author: "WIP", description: "Under Contruction" },
          { author: "WIP", description: "Under Contruction" },
          { author: "WIP", description: "Under Contruction" },
          { author: "WIP", description: "Under Contruction" },
          { author: "WIP", description: "Under Contruction" },
          { author: "WIP", description: "Under Contruction" },
          { author: "WIP", description: "Under Contruction" },
          { author: "WIP", description: "Under Contruction" },
        ]
      : props.RT.map((item) => {
          return { author: item.name, description: item.description };
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
        {test2.length < 3 ? (
          <Typography
            style={{
              width: 1000,
              height: 500,
              background: "#364d79",
              overflow: "hidden",
              textAlign: "center",
              color: "white",
              lineHeight: 8,
            }}
            variant="h2"
          >
            No reviews found
          </Typography>
        ) : (
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
        )}
      </Card>
    </Box>
  );
}

export default ContentCarousel;
