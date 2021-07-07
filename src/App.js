import React, { useState, useEffect, Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
//components
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import PageNotFound from "./Pages/PageNotFound";
import ProfileIgtv from "./Pages/ProfileIgtv";
import ProfileSaved from "./Pages/ProfileSaved";
import ProfileTagged from "./Pages/ProfileTagged";
import DirectInbox from "./Pages/DirectInbox";
import Explore from "./Pages/Explore";
import StoryPlay from "./Pages/StoryPlay";
import Activity from "./Pages/Activity";
import PostModal from "./Components/PostModal/PostModal";
import Comments from "./Pages/Comments";
import ExploreSearch from "./Pages/ExploreSearch";

class App extends Component {
  constructor(props) {
    super(props);
    this.previousLocation = this.props.location;
  }

  componentWillUpdate() {
    let { location } = this.props;

    if (!(location.state && location.state.modal)) {
      this.previousLocation = location;
    }
  }

  render() {
    const { location } = this.props;
    const isModal =
      location.state &&
      location.state.modal &&
      this.previousLocation !== location;

    return (
      <div>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path="/" component={Home} />
          <Route exact path="/accounts/login" component={Login} />
          <Route exact path="/accounts/emailsignup" component={Signup} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/profile/channel" component={ProfileIgtv} />
          <Route exact path="/profile/saved" component={ProfileSaved} />
          <Route exact path="/profile/tagged" component={ProfileTagged} />
          <Route exact path="/direct/inbox" component={DirectInbox} />
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/stories" component={StoryPlay} />
          <Route exact path="/accounts/activity" component={Activity} />
          <Route exact path="/explore/search" component={ExploreSearch} />
          <Route exact path="/p/comments" component={Comments} />

          <Route exact path="/p/:postid">
            <PostModal isModal={isModal} />
          </Route>
          <Route path="*" component={PageNotFound} />
        </Switch>
        {isModal ? (
          <Route exact path="/p/:postid">
            <PostModal isModal={isModal} />
          </Route>
        ) : null}
      </div>
    );
  }
}

export default withRouter(App);

// const App = () => {

//   const [previousLocation, setPreviousLocation] = useState(location)
//   useEffect(() => {
//     const { location } = this.props;
//   if (!(location.state && location.state.modal)) {
//     previousLocation = this.props.location;
//   }

//   }, [])

//   render() {
//     const { location } = this.props;
//     const isModal = (
//       location.state &&
//       location.state.modal &&
//       previousLocation !== location

//   }

//   return (
//     <Router>
//       <Switch location={isModal ? previousLocation : location}>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/accounts/login" component={Login} />
//         <Route exact path="/accounts/emailsignup" component={Signup} />
//         <Route exact path="/profile" component={Profile} />
//         <Route exact path="/profile/channel" component={ProfileIgtv} />
//         <Route exact path="/profile/saved" component={ProfileSaved} />
//         <Route exact path="/profile/tagged" component={ProfileTagged} />
//         <Route exact path="/direct/inbox" component={DirectInbox} />
//         <Route exact path="/explore" component={Explore} />
//         <Route exact path="/modal/:id" component={PostModal}/>
//         <Route path="*" component={PageNotFound} />
//       </Switch>
//       {isModal
//         ? <Route exact path="/modal/:id" component={PostModal} />
//         : null}
//     </Router>

//   );
// };

// export default App;
