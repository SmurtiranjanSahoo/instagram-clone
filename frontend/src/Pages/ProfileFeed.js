import React, { useState, useEffect, useRef } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchAllPost } from "../actions/postActions";
import { fetchAllUser } from "../actions/userActions";
//images
import taggedImgS from "../Images/tagged.svg";
//component
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ProfileInfo from "../Components/Profile/ProfileInfo";
import ProfileHighlight from "../Components/Profile/ProfileHighlight";
import ProfileNav from "../Components/Profile/ProfileNav/ProfileNav";
import ProfileNavM from "../Components/Profile/ProfileNav/ProfileNavM";
import FollowInfo from "../Components/Profile/FollowInfo/FollowInfo";
import PostModal from "../Components/PostModal/PostModal";
import NavigaitionBottom from "../Components/NavigationBottom/NavigaitionBottom";
import ProfileHeader from "../Components/HeaderNav/ProfileHeader";
import HomePostCard from "../Components/Home/HomePostCard";

const ProfileFeed = ({ fetchAllPost, postState, userState, fetchAllUser }) => {
  const { allPosts } = postState;
  const { userUsernameDetails, allUsers } = userState;

  const [showPostModal, setShowPostModal] = useState(false);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const FeedRef = useRef();
  useEffect(() => {
    fetchAllPost();
    fetchAllUser();
    const updateWindowDimensions = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <div ref={FeedRef} style={{ overflowX: "hidden" }}>
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
            imgTagged={taggedImgS}
            textTagged="#262626"
            borderTagged="1px solid #000"
            marginTagged="-1px"
          />
          <ProfileNavM
            currentUserId={userUsernameDetails._id}
            innerWidth={innerWidth}
            SelectTagged="#0095f6"
          />
          {innerWidth < 736 && (
            <div>
              {allPosts
                .filter(
                  (data) => data.postAuthor._id === userUsernameDetails._id
                )
                .map((post, i) => (
                  <HomePostCard
                    key={i}
                    post={post}
                    innerWidth={innerWidth}
                    HomeRef={FeedRef}
                  />
                ))}
            </div>
          )}
        </div>
      </div>

      <NavigaitionBottom />
      <Footer />

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
  fetchAllUser: () => dispatch(fetchAllUser()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProfileFeed));
