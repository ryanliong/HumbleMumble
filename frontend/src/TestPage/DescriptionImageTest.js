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
            Indiana Jones
          </Typography>
          <CardActionArea
            onClick={() => window.open("https://www.rottentomatoes.com/")}
          >
            <Typography gutterBottom variant="h6">
              Rotten Tomatoes
            </Typography>
          </CardActionArea>
          <CardActionArea onClick={() => window.open("https://www.imdb.com/")}>
            <Typography gutterBottom variant="h6">
              Imdb
            </Typography>
          </CardActionArea>
          <CardActionArea
            onClick={() => window.open("https://www.luminus.com/")}
          >
            <Typography gutterBottom variant="h6">
              OtherReviewSites
            </Typography>
          </CardActionArea>
        </CardContent>
      </Card>
    </Box>
  );
}

export default DescriptionImage;
