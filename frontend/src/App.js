import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import MainPage from "./MainPage";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Account from "./Account";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <Link to="/Account">Account</Link>
        <Link to="/MainPage">Main</Link> */}
        <Route exact path="/" component={MainPage} />
        <Route exact path="/Account" component={Account} />
      </BrowserRouter>
    );
  }
}

export default App;
