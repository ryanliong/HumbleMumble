import React from "react";
import { List, Menu } from "antd";
import { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import CenteredModal from "../MediaComponents/CenteredModal";
import auth0Client from "./Auth";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SearchBar from "../MediaComponents/SearchBar";
import { HomeOutlined } from "@ant-design/icons";
function NavBar2(props) {
  const [currentPage, changePage] = useState(props.page);
  const [listOpen, openList] = useState(false);
  const handleClick = (nextPage) => changePage(nextPage);

  const signOut = () => {
    auth0Client.signOut();
    props.history.replace("/");
  };
  const bgColor = "#2b2d42";
  const centerStyle = {
    position: "relative",
    display: "flex",
    fontSize: 20,
    height: 58,
    leftPadding: 50,
    backgroundColor: bgColor,
  };

  const centerItem = {
    marginLeft: 25,
    marginRight: 25,
    color: "white",
  };
  const rightStyle = {
    position: "absolute",
    top: 0,
    right: 0,
    height: 58,
    backgroundColor: bgColor,
  };
  const rightItem = { height: 58 };
  return (
    <nav>
      <Menu
        mode="horizontal"
        style={{
          float: "left",
          top: 0,
          right: 0,
          height: 58,
          width: 600,
          position: "flex",
          backgroundColor: bgColor,
        }}
        selectable={false}
        theme="dark"
      >
        <Menu.Item key="humbleMumble">
          <Link className="navbar-brand" to="/">
            <img src="/MH.png" alt="HumbleMumble" id="SmallLogo" />
            HumbleMumble
          </Link>
        </Menu.Item>
        <Menu.Item key="searchBar">
          <SearchBar></SearchBar>
        </Menu.Item>
      </Menu>
      <Menu
        onClick={handleClick}
        selectedKeys={[currentPage]}
        mode="horizontal"
        style={centerStyle}
        theme="dark"
      >
        <Menu.Item key="home" style={centerItem}>
          <Link to="/">
            <span>Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="account" style={centerItem}>
          <Link to="/Account">My Account</Link>
        </Menu.Item>
        <Menu.Item key="movie" style={centerItem}>
          <Link to="/Movie">Movie</Link>
        </Menu.Item>
        <Menu.Item key="game" style={centerItem}>
          <Link to="/Game">Game</Link>
        </Menu.Item>
        <Menu.Item key="tv-show" style={centerItem}>
          <Link to="/Tv-Show">Tv-Show</Link>
        </Menu.Item>
        <Menu.Item key="test" style={centerItem}>
          <Link to="/Test">Test</Link>
        </Menu.Item>
        <Menu.Item key="results" style={centerItem}>
          <Link to="/Results">Results</Link>
        </Menu.Item>
        <Menu.Item>
          <CenteredModal type="List"></CenteredModal>
        </Menu.Item>
      </Menu>
      <Menu mode="horizontal" style={rightStyle} selectedKeys={[]} theme="dark">
        <Menu.Item key="login" style={rightItem}>
          {!auth0Client.isAuthenticated() && (
            <button className="btn btn-dark" onClick={auth0Client.signIn}>
              Sign In
            </button>
          )}
          {auth0Client.isAuthenticated() && (
            <div>
              <label className="mr-2 text-white">
                {auth0Client.getProfile().name}
              </label>
              <button
                className="btn btn-dark"
                onClick={() => {
                  signOut();
                }}
              >
                Sign Out
              </button>
            </div>
          )}
        </Menu.Item>
      </Menu>
    </nav>
  );
}

export default withRouter(NavBar2);
