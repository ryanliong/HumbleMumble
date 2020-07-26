import React from "react";
import { Card, Box, Typography, CardContent } from "@material-ui/core";
import { Tabs } from "antd";
import {
  LikeOutlined,
  PlaySquareOutlined,
  RocketOutlined,
} from "@ant-design/icons";
import OptionalCarousel from "./OptionalCarousel";

function AccountStatistic(props) {
  const { TabPane } = Tabs;

  function callback(key) {
    console.log(key);
  }

  const gameDetails = props.data.games.map((item) => item.attributes);

  const moviesDetails = props.data.movies.map((item) => item.attributes);

  const tvShowDetails = props.data.tvShows.map((item) => item.attributes);

  return (
    <Box>
      <Card style={{ width: 1310 }}>
        <CardContent>
          <Typography variant="h5">Recents</Typography>
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane
              tab={
                <span>
                  <RocketOutlined />
                  Games
                </span>
              }
              key="1"
            >
              <OptionalCarousel details={gameDetails}></OptionalCarousel>
            </TabPane>
            <TabPane
              tab={
                <span>
                  <PlaySquareOutlined />
                  Movies
                </span>
              }
              key="2"
            >
              <OptionalCarousel details={moviesDetails}></OptionalCarousel>
            </TabPane>
            <TabPane
              tab={
                <span>
                  <LikeOutlined />
                  Tv-Show
                </span>
              }
              key="3"
            >
              <OptionalCarousel details={tvShowDetails}></OptionalCarousel>
            </TabPane>
          </Tabs>
        </CardContent>
      </Card>
    </Box>
  );
}

export default AccountStatistic;
