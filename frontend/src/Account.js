import React, { Component } from "react";
import NavBar from "./NavBar/NavBar";
import AccountTitle from './AccountInfo/AccountTitle/AccountTitle';
import Shows from './AccountInfo/ShowInfo/Shows';
import Movies from './AccountInfo/MovieInfo/Movies';
import Games from './AccountInfo/GameInfo/Games';
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
// import Question from "./Question/Question";
// import Questions from "./Questions/Questions";
// import Callback from "./Callback";
// import SecuredRoute from "./SecuredRoute/SecuredRoute";
// import NewQuestion from "./NewQuestion/NewQuestion";

class Account extends Component {
  render() {
    return (
      <div>
        <NavBar name="SmallLogo" />
        <AccountTitle/>
        <Shows/>
        <Movies/>
        <Games/>  
        {/* <Route exact path='/' component={Questions}/>
        <Route exact path='/question/:questionId' component={Question}/>
        <Route exact path='/callback' component={Callback}/>
        <SecuredRoute path='/new-question' component = {NewQuestion}/> */}
      </div>
    );
  }
}

export default Account;
