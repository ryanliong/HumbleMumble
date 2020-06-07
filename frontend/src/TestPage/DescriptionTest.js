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

function Description() {
  return (
    <Card style={{ width: 1000, height: 185 }}>
      <CardContent>
        <Typography gutterBottom variant="h5">
          Description
        </Typography>
        <Typography gutterBottom variant="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nam
          quos sed ratione nemo illo enim, quibusdam impedit itaque maiores sint
          illum, distinctio saepe error qui assumenda non alias id. Quia earum
          voluptate ipsum minus? Quibusdam tenetur doloremque suscipit, eos,
          voluptate necessitatibus, eius tempora rem debitis sed facere quam
          sint!
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Description;
