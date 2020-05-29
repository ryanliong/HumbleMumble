import React, { Component } from "react";
import NavBar from "./NavBar/NavBar";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Account from "./Account";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom"
import  MainPage from "./MainPage"
// import Question from "./Question/Question";
// import Questions from "./Questions/Questions";
// import Callback from "./Callback";
// import SecuredRoute from "./SecuredRoute/SecuredRoute";
// import NewQuestion from "./NewQuestion/NewQuestion";

class App extends Component {
  render() {
    return (
      <div>
        <Link to= '/Account'>Account</Link>
        <Link to= '/MainPage'>Main</Link>  
        <Route exact path='/' component={Account}/>
        <Route exact path='/' component={MainPage}/>
        {/* <Route exact path='/' component={Questions}/>
        <Route exact path='/question/:questionId' component={Question}/>
        <Route exact path='/callback' component={Callback}/>
        <SecuredRoute path='/new-question' component = {NewQuestion}/> */}
      </div>
    );
  }
}

export default App;
