import React, { useState } from "react";
import {
  Card,
  makeStyles,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  Box,
} from "@material-ui/core";

function Description(props) {
  return (
    <Card style={{ width: 1000, height: props.h }}>
      <CardContent>
        <Typography gutterBottom variant="h5">
          {props.title}
        </Typography>
        <Typography gutterBottom variant="p">
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Description;
