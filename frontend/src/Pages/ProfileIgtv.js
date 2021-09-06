import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchAllUser } from "../actions/userActions";
import { fetchAllPost } from "../actions/postActions";
import { isAutheticated } from "../auth/auth";

//components
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ProfileInfo from "../Components/Profile/ProfileInfo";
import ProfileHighlight from "../Components/Profile/ProfileHighlight";
import ProfileNav from "../Components/Profile/ProfileNav/ProfileNav";
import ProfileNavM from "../Components/Profile/ProfileNav/ProfileNavM";
import FollowInfo from "../Components/Profile/FollowInfo/FollowInfo";
import NavigaitionBottom from "../Components/NavigationBottom/NavigaitionBottom";
import ProfileHeader from "../Components/HeaderNav/ProfileHeader";
import igtvImgS from "../Images/igtv.svg";

const ProfileIgtv = ({ userState, fetchAllUser, fetchAllPost, postState }) => {
  const { userUsernameDetails, allUsers } = userState;
  const { allPosts } = postState;
  const { user } = isAutheticated();
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    fetchAllUser();
    fetchAllPost();
    const updateWindowDimensions = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <div style={{ overflowX: "hidden" }}>
      <Header />
      <ProfileHeader
        username={userUsernameDetails.username}
        innerWidth={innerWidth}
      />
      <div className="profile-wrapper">
        <div
          className="profile-container"
          style={{
            width: innerWidth < 975 ? innerWidth : "975px",
          }}
        >
          <ProfileInfo innerWidth={innerWidth} imgWidth={innerWidth} />
          <div className="highlight-wrapper">
            <li></li>
            <ProfileHighlight text="Me" />
            <ProfileHighlight text="Thoughts" />
          </div>
          <FollowInfo
            followers={
              allUsers.filter((data) =>
                data.followings?.includes(userUsernameDetails._id)
              ).length
            }
            following={userUsernameDetails.followings?.length}
            posts={
              allPosts.filter(
                (data) => data.postAuthor._id === userUsernameDetails._id
              ).length
            }
            innerWidth={innerWidth}
          />
          <ProfileNav
            imgIgtv={igtvImgS}
            textIgtv="#262626"
            borderIgtv="1px solid #000"
            marginIgtv="-1px"
          />
          <ProfileNavM
            currentUserId={userUsernameDetails._id}
            innerWidth={innerWidth}
            SelectIgtv="#0095f6"
          />
          <div
            style={{
              width:
                innerWidth < 975
                  ? innerWidth <= 735
                    ? innerWidth
                    : innerWidth - 40
                  : "935px",
            }}
            className="profile-igtv"
          >
            <h2>Videos</h2>
            {user._id === userUsernameDetails._id && <button>Upload</button>}
          </div>
        </div>
      </div>
      <Footer />
      <NavigaitionBottom />
    </div>
  );
};

const mapStateToProps = (state) => ({
  postState: state.PostReducer,
  userState: state.UserReducer,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllPost: () => dispatch(fetchAllPost()),
  fetchAllUser: () => dispatch(fetchAllUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileIgtv);
