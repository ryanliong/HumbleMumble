import React, { Component } from "react";
import { Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Account from "./Pages/Account";
import Movie from "./Pages/Movie";
import Game from "./Pages/Game";
import TVShow from "./Pages/Tv-Show";
import Test from "./TestPage/Test";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/Account" component={Account} />
        <Route exact path="/Movie" component={Movie} />
        <Route exact path="/Game" component={Game} />
        <Route exact path="/Tv-Show" component={TVShow} />
        <Route exact path="/Test" component={Test} />
      </BrowserRouter>
    );
  }
}

export default App;
