import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import PageNotFound from "./Pages/PageNotFound";
import ProfileIgtv from "./Pages/ProfileIgtv";
import ProfileSaved from "./Pages/ProfileSaved";
import ProfileTagged from "./Pages/ProfileTagged";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/accounts/login" component={Login} />
        <Route exact path="/accounts/emailsignup" component={Signup} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/profile/channel" component={ProfileIgtv} />
        <Route exact path="/profile/saved" component={ProfileSaved} />
        <Route exact path="/profile/tagged" component={ProfileTagged} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default App;
