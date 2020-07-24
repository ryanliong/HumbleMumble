import React from "react";
import { Box, Grid, Container, Card } from "@material-ui/core";
import { List, Table } from "antd";
import ProgressBar from "./ProgressBar";

function MediaList() {
  //keys of item from left to right
  const columns = [
    {
      dataIndex: "firstMediaImage",
      render: (theImageURL) => (
        <img alt={theImageURL} src={theImageURL} style={{ width: 75 }} />
      ),
      width: 75,
    },
    {
      dataIndex: "firstMediaTitle",
      width: 100,
    },
    {
      dataIndex: "firstMediaProgress",
      width: 200,
    },
    {
      dataIndex: "secondMediaImage",
      render: (theImageURL) => (
        <img alt={theImageURL} src={theImageURL} style={{ width: 75 }} />
      ),
      width: 75,
    },
    {
      dataIndex: "secondMediaTitle",
      width: 100,
    },
    {
      dataIndex: "secondMediaProgress",
      width: 200,
    },
  ];

  // data being pushed from left to right in to the list
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      firstMediaImage: `https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
      firstMediaTitle: "Title here",
      firstMediaProgress: <ProgressBar></ProgressBar>,
      secondMediaImage: `https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
      secondMediaTitle: "Title here",
      secondMediaProgress: <ProgressBar></ProgressBar>,
    });
  }

  return (
    <Table
      showHeader={false}
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 50 }}
      scroll={{ y: 540 }}
      size="small"
      on
    />
  );
}

export default MediaList;
