import React from "react";
import { Box, Grid, Container, Card } from "@material-ui/core";
import { List, Table } from "antd";
import ProgressBar from "./ProgressBar";

function MediaList() {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (theImageURL) => (
        <img alt={theImageURL} src={theImageURL} style={{ width: 75 }} />
      ),
      width: 75,
    },
    {
      title: "Age",
      dataIndex: "age",
      width: 100,
    },
    {
      title: "Address",
      dataIndex: "address",
      width: 200,
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (theImageURL) => (
        <img alt={theImageURL} src={theImageURL} style={{ width: 75 }} />
      ),
      width: 75,
    },
    {
      title: "Age",
      dataIndex: "age",
      width: 100,
    },
    {
      title: "Address",
      dataIndex: "address",
      width: 200,
    },
  ];

  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
      age: "Title here",
      address: <ProgressBar></ProgressBar>,
      address1: `London, Park Lane no. ${i}`,
      address2: `London, Park Lane no. ${i}`,
      address3: `London, Park Lane no. ${i}`,
      address4: `London, Park Lane no. ${i}`,
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
