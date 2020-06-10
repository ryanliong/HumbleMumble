import React from "react";
import { Card, Box, Typography, CardContent } from "@material-ui/core";
import { Tabs } from "antd";
import { AppleOutlined, AndroidOutlined } from "@ant-design/icons";
import OptionalCarousel from "./OptionalCarousel";

function AccountStatistic() {
  const { TabPane } = Tabs;

  function callback(key) {
    console.log(key);
  }

  return (
    <Box>
      <Card style={{ width: 1310 }}>
        <CardContent>
          <Typography variant="h5">Recents</Typography>
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane
              tab={
                <span>
                  <AppleOutlined />
                  Games
                </span>
              }
              key="1"
            >
              <OptionalCarousel></OptionalCarousel>
            </TabPane>
            <TabPane
              tab={
                <span>
                  <AndroidOutlined />
                  Movies
                </span>
              }
              key="2"
            >
              <OptionalCarousel></OptionalCarousel>
            </TabPane>
            <TabPane tab="Tv-Show" key="3">
              <OptionalCarousel></OptionalCarousel>
            </TabPane>
          </Tabs>
        </CardContent>
      </Card>
    </Box>
  );
}

export default AccountStatistic;
