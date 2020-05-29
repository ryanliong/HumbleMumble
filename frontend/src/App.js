import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import { Link } from "react-router-dom"
import  MainPage from "./MainPage"
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Account from "./Account";
// import Question from "./Question/Question";
// import Questions from "./Questions/Questions";
// import Callback from "./Callback";
// import SecuredRoute from "./SecuredRoute/SecuredRoute";
// import NewQuestion from "./NewQuestion/NewQuestion";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to= '/Account'>Account</Link>
        <Link to= '/MainPage'>Main</Link>
        <div>
        <Switch>
          <Route exact path='/Account' component={Account}/>
          <Route exact path='/MainPage' component={MainPage}/>
        </Switch> 
          {/* <Route exact path='/' component={Questions}/>
          <Route exact path='/question/:questionId' component={Question}/>
          <Route exact path='/callback' component={Callback}/>
          <SecuredRoute path='/new-question' component = {NewQuestion}/> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
