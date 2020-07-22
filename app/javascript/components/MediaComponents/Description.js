import React, { useState } from "react";
import {
  Card,
  makeStyles,
  CardMedia,
  CardActionArea,
  CardContent,
  Box,
  Typography,
} from "@material-ui/core";

function Description(props) {
  return (
    <Card style={{ width: 1000, height: props.h, overflow: "auto" }}>
      <CardContent
        style={{
          overflow: "auto",
          paddingBottom: 0,
        }}
      >
        <Typography gutterbottom variant="h5">
          {props.title}
        </Typography>
        <Typography gutterbottom variant="p">
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Description;
