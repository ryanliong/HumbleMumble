import React, { Component } from "react";
import NavBar from "./NavBar/NavBar";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Account from "./Account";
import { Switch, Route } from 'react-router-dom';
import { Link } from "react-router-dom"
// import Question from "./Question/Question";
// import Questions from "./Questions/Questions";
// import Callback from "./Callback";
// import SecuredRoute from "./SecuredRoute/SecuredRoute";
// import NewQuestion from "./NewQuestion/NewQuestion";

class MainPage extends Component {
  render() {
    return (
      <div>
        <NavBar name="SmallLogo" />
        <Logo name="FrontPageLogo" link="index.html" />
        <SearchBar />
        <Link to= '/Account'>Account</Link>
        <Link to= '/MainPage'>Main</Link>
      </div>
    );
  }
}

export default MainPage;
