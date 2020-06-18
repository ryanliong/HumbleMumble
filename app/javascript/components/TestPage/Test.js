import React from "react";
import { Box, Grid } from "@material-ui/core";
import { List } from "antd";

function Test() {
  const testData = [
    "movie",
    "game",
    "tv-show",
    "movie",
    "game",
    "tv-show",
    "movie",
    "game",
    "tv-show",
    "movie",
    "game",
    "tv-show",
    "movie",
    "game",
    "tv-show",
    "movie",
    "game",
    "tv-show",
    "movie",
    "game",
    "tv-show",
    "movie",
    "game",
    "tv-show",
    "movie",
    "game",
    "tv-show",
    "movie",
    "game",
    "tv-show",
    "movie",
    "game",
    "tv-show",
    "movie",
    "game",
    "tv-show",
    "movie",
    "game",
    "tv-show",
    "movie",
    "game",
    "tv-show",
    "movie",
    "game",
    "tv-show",
    "movie",
    "game",
    "tv-show",
    "movie",
    "game",
    "tv-show",
  ];
  return (
    <Box>
      <Grid container direction="row" justify="center" alignItems="flex-start">
        <Grid item xs={6}>
          <List
            size="small"
            bordered
            dataSource={testData}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </Grid>
        <Grid item xs={6}>
          <List
            size="small"
            bordered
            dataSource={testData}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Test;
