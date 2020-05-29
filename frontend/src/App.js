import React, { Component } from "react";
import NavBar from "./NavBar/NavBar";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
// import { Route } from "react-router-dom";

// import Question from "./Question/Question";
// import Questions from "./Questions/Questions";
// import Callback from "./Callback";
// import SecuredRoute from "./SecuredRoute/SecuredRoute";
// import NewQuestion from "./NewQuestion/NewQuestion";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar name="SmallLogo" />
        <Logo name="FrontPageLogo" link="index.html" />
        <SearchBar />
        {/* <Route exact path='/' component={Questions}/>
        <Route exact path='/question/:questionId' component={Question}/>
        <Route exact path='/callback' component={Callback}/>
        <SecuredRoute path='/new-question' component = {NewQuestion}/> */}
      </div>
    );
  }
}

export default App;
