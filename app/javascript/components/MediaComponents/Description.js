import React, { useState, useEffect } from "react";
import {
  Card,
  makeStyles,
  CardMedia,
  CardActionArea,
  CardContent,
  Box,
} from "@material-ui/core";
import { Typography } from "antd";

const { Text, Title } = Typography;
function Description(props) {
  const [editableBio, setBio] = useState(localStorage.getItem("bio"));

  const change = (str) => {
    setBio(str);
  };

  useEffect(() => {
    localStorage.setItem("bio", editableBio);
  }, [editableBio]);

  return (
    <Card style={{ width: 1000, height: props.h, overflow: "auto" }}>
      <CardContent
        style={{
          overflow: "auto",
          paddingBottom: 0,
        }}
      >
        <Title level={4}>{props.title}</Title>
        {props.title === "Bio" ? (
          <Text editable={{ onChange: change }}>{editableBio}</Text>
        ) : (
          <Text>{props.description}</Text>
        )}
      </CardContent>
    </Card>
  );
}

export default Description;
