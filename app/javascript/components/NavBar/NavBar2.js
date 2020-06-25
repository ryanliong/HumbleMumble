import React from "react";
import { List, Menu } from "antd";
import { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import CenteredModal from "../MediaComponents/CenteredModal";
import auth0Client from "./Auth";
import Autocomplete from "@material-ui/lab/Autocomplete";
import SearchBar from "../MediaComponents/SearchBar";

function NavBar2(props) {
  const [currentPage, changePage] = useState(props.page);

  const handleClick = (nextPage) => changePage(nextPage);

  const signOut = () => {
    auth0Client.signOut();
    props.history.replace("/");
  };

  const centerStyle = {
    position: "relative",
    display: "flex",
    fontSize: 20,
    height: 58,
    leftPadding: 50,
  };

  const centerItem = { marginLeft: 25, marginRight: 25 };
  const rightStyle = { position: "absolute", top: 0, right: 0, height: 58 };
  const rightItem = { height: 58 };
  const [searchBar, updateSearchBar] = useState(<SearchBar></SearchBar>);
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
        }}
        selectable={false}
        theme="dark"
      >
        <Menu.Item>
          <Link className="navbar-brand" to="/">
            <img src="/MH.png" alt="HumbleMumble" id="SmallLogo" />
            HumbleMumble
          </Link>
        </Menu.Item>
        <Menu.Item>
          <SearchBar></SearchBar>
        </Menu.Item>
      </Menu>
      <Menu
        onclick={handleClick}
        selectedKeys={[currentPage]}
        mode="horizontal"
        style={centerStyle}
        theme="dark"
      >
        <Menu.Item key="home" style={centerItem}>
          <Link to="/">Home</Link>
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
        <Menu.Item style={rightItem}>
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
