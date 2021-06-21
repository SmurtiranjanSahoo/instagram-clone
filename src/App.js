import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import PageNotFound from "./Pages/PageNotFound";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/accounts/login" component={Login} />
        <Route path="/accounts/emailsignup" component={Signup} />
        <Route path="/profile" component={Profile} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default App;
