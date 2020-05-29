import React, { Component } from "react";
import { Route } from "react-router-dom";
import MainPage from "./MainPage";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Account from "./Account";
import Movie from "./Movie";
import Game from "./Game";
import TVShow from "./Tv-Show";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <Link to="/Account">Account</Link>
        <Link to="/MainPage">Main</Link> */}
        <Route exact path="/" component={MainPage} />
        <Route exact path="/Account" component={Account} />
        <Route exact path="/Movie" component={Movie} />
        <Route exact path="/Game" component={Game} />
        <Route exact path="/Tv-Show" component={TVShow} />
      </BrowserRouter>
    );
  }
}

export default App;
