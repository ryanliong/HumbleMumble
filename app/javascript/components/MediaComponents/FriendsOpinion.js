import React, { useState, useCallback } from "react";
import Statistics from "./Statistics";
import {
  CardContent,
  Card,
  makeStyles,
  Typography,
  CardActionArea,
  CardMedia,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    height: 800,
  },
  media: {
    width: 300,
    height: 430,
  },
});

function FriendsOpinion() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <CardActionArea onClick={() => window.open("https://www.luminus.com/")}>
          <CardMedia
            className={classes.media}
            image="https://steemitimages.com/DQmQbki6acfNKT9cX3MWBxsxSTHEEk16PVeqyvGyCXSVu6i/friend.jpg"
          />
          <Typography gutterBottom variant="h5">
            Friend Name
          </Typography>
        </CardActionArea>
        <Typography gutterBottom variant="h5">
          Times watched:
        </Typography>
        <Typography gutterBottom variant="h5">
          Rating:
        </Typography>
        <Typography gutterBottom variant="h5">
          Last Watched:
        </Typography>
        <Typography gutterBottom variant="p">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem saepe
          eaque sed velit vero ducimus pariatur nostrum, facilis unde,
          perferendis magnam ullam culpa laborum, ut placeat accusamus voluptas
          at fugit minus sit commodi deserunt temporibus? Voluptate eos id quasi
          magnam.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default FriendsOpinion;
