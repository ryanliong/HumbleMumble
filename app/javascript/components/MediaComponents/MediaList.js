import React from "react";
import { Box, Grid, Container, Card } from "@material-ui/core";
import { List } from "antd";

function MediaList() {
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
  ];
  return (
    <Container maxWidth="md" style={{ marginTop: 150 }}>
      <Card>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
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
      </Card>
    </Container>
  );
}

export default MediaList;
