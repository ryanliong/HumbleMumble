import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Account from "./Pages/Account";
import Movie from "./Pages/Movie";
import Game from "./Pages/Game";
import TVShow from "./Pages/Tv-Show";
import Test from "./TestPage/Test";
import Results from "./Pages/Results";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/Account" component={Account} />
          <Route exact path="/Movie/:slug" component={Movie} />
          <Route exact path="/Game" component={Game} />
          <Route exact path="/Tv-Show" component={TVShow} />
          <Route exact path="/Test" component={Test} />
          <Route exact path="/Results" component={Results} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
