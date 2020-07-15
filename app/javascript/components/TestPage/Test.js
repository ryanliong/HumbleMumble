import React, { useState, useEffect } from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import NavBar2 from "../NavBar/NavBar2";
import SearchResultsItem from "../MediaComponents/SearchResultsItems";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import IGDB from "../API/IGDB";
import DisplayResults from "../MediaComponents/DisplayResults";
import { Spin, Alert } from "antd";
import LoadingBar from "../MediaComponents/LoadingBar";
function Test() {
  const [loading, setLoadStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoadStatus(false), 2000);
  }, []);
  return <LoadingBar></LoadingBar>;
}

export default Test;
