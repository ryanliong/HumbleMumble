import React from "react";
import {
  Container,
  CardMedia,
  Card,
  CardContent,
  Grid,
  CardActionArea,
} from "@material-ui/core";
import { Typography } from "antd";
import { useState } from "react";
const { Paragraph } = Typography;
import { Redirect, useHistory } from "react-router";

function SearchResultsItem(props) {
  const [linkOut, setOut] = useState(false);
  const movieID = () => localStorage.setItem("movieID", props.attributes.id);

  if (linkOut) {
    movieID();
  }
  if (linkOut) {
    return <Redirect to={props.link.goTo} />;
  }

  return (
    <Card style={{ height: 300, minWidth: 600, overflow: "auto" }}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item>
          <CardActionArea
            onClick={() => {
              setOut(true);
            }}
          >
            <CardMedia
              image={
                props.attributes.image_url == null
                  ? "https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  : props.attributes.image_url
              }
              style={{
                width: 200,
                height: 300,
              }}
            ></CardMedia>
          </CardActionArea>
        </Grid>
        <Grid item>
          <CardContent
            style={{ maxWidth: 370, minWidth: 370, paddingBottom: 0 }}
          >
            <CardActionArea
              onClick={() => {
                setOut(true);
                props.link.goTo;
              }}
            >
              <Typography.Title style={{ fontSize: "1.5em", marginBottom: 0 }}>
                {props.attributes.title}
              </Typography.Title>
            </CardActionArea>
          </CardContent>

          <CardContent
            style={{
              maxWidth: 370,
              minWidth: 370,
              overflow: "auto",
              paddingBottom: 0,
            }}
          >
            <Paragraph
              ellipsis={{
                rows: 7,
                expandable: true,
                suffix: "",
                onEllipsis: (ellipsis) => {
                  // console.log("Ellipsis changed:", ellipsis);
                },
                symbol: <span style={{ color: "blue" }}>expand</span>,
              }}
            >
              {props.attributes.overview}
            </Paragraph>
          </CardContent>
          <CardContent style={{ paddingTop: 0, paddingBottom: 0 }}>
            <Typography>Misc</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}

export default SearchResultsItem;
