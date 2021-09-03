import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchAllPost } from "../actions/postActions";
//components
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ProfileInfo from "../Components/Profile/ProfileInfo";
import ProfileHighlight from "../Components/Profile/ProfileHighlight";
import ProfileNav from "../Components/Profile/ProfileNav/ProfileNav";
import ProfileNavM from "../Components/Profile/ProfileNav/ProfileNavM";
import ProfilePost from "../Components/Profile/ProfilePost";
import FollowInfo from "../Components/Profile/FollowInfo/FollowInfo";
import PostModal from "../Components/PostModal/PostModal";
import NavigaitionBottom from "../Components/NavigationBottom/NavigaitionBottom";
import ProfileHeader from "../Components/HeaderNav/ProfileHeader";
//svg
import savedImgS from "../Images/saved.svg";

const ProfileSaved = ({ fetchAllPost, postState, userState }) => {
  const { isGettingAllPost, allPosts } = postState;
  const { userUsernameDetails, userDetails } = userState;
  const [showPostModal, setShowPostModal] = useState(false);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  var j = 1;

  useEffect(() => {
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
      <div className="profile-wrapper" style={{ overflowY: "hidden" }}>
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
            innerWidth={innerWidth}
            followers={userUsernameDetails.followers?.length}
            following={userUsernameDetails.followings?.length}
            posts={userUsernameDetails.posts?.length}
          />
          <ProfileNav
            imgSaved={savedImgS}
            textSaved="#262626"
            borderSaved="1px solid #000"
            marginSaved="-1px"
          />
          <ProfileNavM
            currentUserId={userUsernameDetails._id}
            innerWidth={innerWidth}
            SelectSaved="#0095f6"
          />
          <div
            className="profile-saved-text"
            style={{
              width:
                innerWidth < 975
                  ? innerWidth <= 735
                    ? innerWidth
                    : innerWidth - 40
                  : "935px",
            }}
          >
            <p>Only you can see what you've saved</p>
          </div>
          <div
            className="profile-post-container"
            style={{
              width:
                innerWidth < 975
                  ? innerWidth <= 735
                    ? innerWidth
                    : innerWidth - 40
                  : "935px",
            }}
          >
            {allPosts
              .filter((data) => userDetails.saved?.includes(data._id))
              .map((userPost, i) => {
                if (j === i) {
                  j = j + 3;
                  return (
                    <Link
                      style={{ textDecoration: "none" }}
                      to={{
                        pathname: `/p/${userPost._id}`,
                        state: { modal: innerWidth <= 735 ? false : true },
                      }}
                      key={i}
                    >
                      <ProfilePost
                        post={userPost}
                        className={"profile-post-margin"}
                      />
                    </Link>
                  );
                } else {
                  return (
                    <Link
                      style={{ textDecoration: "none" }}
                      to={{
                        pathname: `/p/${userPost._id}`,
                        state: { modal: innerWidth <= 735 ? false : true },
                      }}
                      key={i}
                    >
                      <ProfilePost post={userPost} />
                    </Link>
                  );
                }
              })}
          </div>
        </div>
      </div>
      <Footer />
      <NavigaitionBottom />

      {showPostModal && <PostModal />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  postState: state.PostReducer,
  userState: state.UserReducer,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllPost: () => dispatch(fetchAllPost()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProfileSaved));
