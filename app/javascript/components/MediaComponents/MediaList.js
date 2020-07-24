import { Box, Grid, Container, Card } from "@material-ui/core";
import { List, Table } from "antd";
import ProgressBar from "./ProgressBar";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import LoadingBar from "../MediaComponents/LoadingBar";

function MediaList() {
  const [UserData, setUserData] = useState([]);
  const [loading, setLoadStatus] = useState(true);

  const fetchData = useCallback(() => {
    axios
      .get(`/api/a/accounts/${localStorage.getItem("slug")}`)
      .then((resp) => {
        setUserData(
          resp.data.included.map((attr) => {
            return {
              title: attr.attributes.title,
              account_id: attr.attributes.account_id,
              description: attr.attributes.description,
              image_url: attr.attributes.image_url,
              link: attr.attributes.link,
              score: attr.attributes.score,
              entry_id: attr.id,
            };
          })
        );
      })
      .catch((resp) => console.log(resp));
  });

  useEffect(() => {
    fetchData();
  }, []);

  // 2 secs loading
  useEffect(() => {
    setTimeout(() => setLoadStatus(false), 2000);
  }, []);

  console.log(UserData[0]);

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
      firstMediaTitle: "nothing",
      firstMediaProgress: <ProgressBar></ProgressBar>,
      secondMediaImage: `https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
      secondMediaTitle: "Title here",
      secondMediaProgress: <ProgressBar></ProgressBar>,
    });
  }

  return loading ? (
    <LoadingBar
      message="Please wait..."
      description="Fetching your results..."
    ></LoadingBar>
  ) : (
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
