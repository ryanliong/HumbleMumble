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
        ];

  const personPreset = [
    actions("Add Movie", () => console.log("Add movie button working")),
    actions("Add Game", () => console.log("Add game button working")),
    actions("Add Tv-Show", () => console.log("Add tv-show button working")),
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
            {mediaCategories.includes(props.type) ? props.name : "Persons name"}
          </Typography>
          {mediaCategories.includes(props.type) ? mediaPreset : personPreset}
        </CardContent>
      </Card>
    </Box>
  );
}

export default DescriptionImage;
