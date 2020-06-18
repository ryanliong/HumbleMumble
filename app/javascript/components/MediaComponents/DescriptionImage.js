import React from "react";
import {
  Card,
  makeStyles,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  Box,
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
  const actions = (x, y) => (
    <CardActionArea onClick={y}>
      <Typography gutterBottom variant="h6">
        {x}
      </Typography>
    </CardActionArea>
  );

  const moviePreset = [
    actions("Rotten Tomatoes", () =>
      window.open("https://www.rottentomatoes.com")
    ),
    actions("Imdb", () => window.open("https://www.imdb.com/")),
    actions("OtherReviewSite", () => window.open(" https://www.luminus.com/")),
  ];

  const personPreset = [
    actions("Add Movie", () => console.log("Add movie button working")),
    actions("Add Game", () => console.log("Add game button working")),
    actions("Add Tv-Show", () => console.log("Add tv-show button working")),
  ];

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
            {props.type === "movie" ? props.name : "Persons name"}
          </Typography>
          {props.type === "movie" ? moviePreset : personPreset}
        </CardContent>
      </Card>
    </Box>
  );
}

export default DescriptionImage;
