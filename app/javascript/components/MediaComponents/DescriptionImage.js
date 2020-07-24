import React from "react";
import {
  Card,
  makeStyles,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  Box,
  Link,
} from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    height: 700,
  },
  media: {
    width: 300,
    height: 430,
  },
});

function DescriptionImage(props) {
  const classes = useStyles();
  const actions = (text, link) => (
    <CardActionArea onClick={link}>
      <Typography gutterBottom variant="h6">
        {text}
      </Typography>
    </CardActionArea>
  );

  const mediaPreset =
    props.type === "game"
      ? [
          actions("IGDB", () =>
            window.open("https://www.igdb.com/games/" + props.slug)
          ),
        ]
      : [
          actions("Rotten Tomatoes", () =>
            window.open("https://www.rottentomatoes.com")
          ),
          actions("Imdb", () => window.open("https://www.imdb.com/")),
          actions("Add Movie", () => addMedia("movies")),
        ];

  const addMedia = (type) => {
    axios({
      url: `/api/a/${type}`,

      method: "POST",
      data: {
        title: props.name,
        image_url: props.imgUrl,
        description: "Placeholder",
        score: "Placeholder",
        account_id: localStorage.getItem("id"),
      },
    }).catch((resp) => console.log(resp));
  };

  const personPreset = [
    actions("Add Movie", () => addMedia("movies")),
    actions("Add Game", () => addMedia("movies")),
    actions("Add Tv-Show", () => addMedia("movies")),
  ];

  const mediaCategories = ["game", "movie", "tvShow"];

  return (
    <Box>
      <Card className={classes.root}>
        <CardActionArea
          onClick={() =>
            window.open(
              "https://www.google.com/search?q=" +
                props.name.replace(/\s/g, "+")
            )
          }
        >
          <CardMedia className={classes.media} image={props.imgUrl} />
        </CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            {props.name}
          </Typography>
          {mediaCategories.includes(props.type) ? mediaPreset : personPreset}
        </CardContent>
      </Card>
    </Box>
  );
}

export default DescriptionImage;
