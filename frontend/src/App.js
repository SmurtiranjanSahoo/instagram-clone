import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";
import PrivateRoute from "./auth/PrivateRoute";
import { isAutheticated } from "./auth/auth";

//context
import { userContext } from "./Context/userContext";
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
import CreatePost from "./Pages/CreatePost";

const App = ({ location }) => {
  const [previousLocation, setPreviousLocation] = useState(location);
  const [currentUser, setCurrentUser] = useState();
  const { user } = isAutheticated();
  // console.log(user);

  useEffect(() => {
    if (!(location.state && location.state.modal)) {
      setPreviousLocation(location);
    }
    setCurrentUser(user);
  }, []);

  const isModal =
    location.state && location.state.modal && previousLocation !== location;

  return (
    <userContext.Provider value={{ currentUser }}>
      <Switch location={isModal ? previousLocation : location}>
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/accounts/login" component={Login} />
        <Route exact path="/accounts/emailsignup" component={Signup} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/profile/channel" component={ProfileIgtv} />
        <PrivateRoute exact path="/profile/saved" component={ProfileSaved} />
        <PrivateRoute exact path="/profile/tagged" component={ProfileTagged} />
        <PrivateRoute exact path="/direct/inbox" component={DirectInbox} />
        <PrivateRoute exact path="/explore" component={Explore} />
        <PrivateRoute exact path="/stories" component={StoryPlay} />
        <PrivateRoute exact path="/accounts/activity" component={Activity} />
        <PrivateRoute exact path="/explore/search" component={ExploreSearch} />
        <PrivateRoute exact path="/p/comments" component={Comments} />
        <PrivateRoute exact path="/create" component={CreatePost} />

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
    </userContext.Provider>
  );
};

export default withRouter(App);

//* class based approach
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.previousLocation = this.props.location;
//   }

//   componentWillUpdate() {
//     let { location } = this.props;

//     if (!(location.state && location.state.modal)) {
//       this.previousLocation = location;
//     }
//   }

//   render() {
//     const { location } = this.props;
//     const isModal =
//       location.state &&
//       location.state.modal &&
//       this.previousLocation !== location;

//     return (
//       <div>
//         <Switch location={isModal ? this.previousLocation : location}>
//           <PrivateRoute exact path="/" component={Home} />
//           <Route exact path="/accounts/login" component={Login} />
//           <Route exact path="/accounts/emailsignup" component={Signup} />
//           <PrivateRoute exact path="/profile" component={Profile} />
//           <PrivateRoute exact path="/profile/channel" component={ProfileIgtv} />
//           <PrivateRoute exact path="/profile/saved" component={ProfileSaved} />
//           <PrivateRoute
//             exact
//             path="/profile/tagged"
//             component={ProfileTagged}
//           />
//           <PrivateRoute exact path="/direct/inbox" component={DirectInbox} />
//           <PrivateRoute exact path="/explore" component={Explore} />
//           <PrivateRoute exact path="/stories" component={StoryPlay} />
//           <PrivateRoute exact path="/accounts/activity" component={Activity} />
//           <PrivateRoute
//             exact
//             path="/explore/search"
//             component={ExploreSearch}
//           />
//           <PrivateRoute exact path="/p/comments" component={Comments} />

//           <Route exact path="/p/:postid">
//             <PostModal isModal={isModal} />
//           </Route>
//           <Route path="*" component={PageNotFound} />
//         </Switch>
//         {isModal ? (
//           <Route exact path="/p/:postid">
//             <PostModal isModal={isModal} />
//           </Route>
//         ) : null}
//       </div>
//     );
//   }
// }

// export default withRouter(App);
