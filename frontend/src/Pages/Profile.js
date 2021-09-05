import React, { useState, useEffect } from "react";
import { Link, withRouter, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { fetchAllPost } from "../actions/postActions";
import { fetchUserByUsername } from "../actions/userActions";
//images
import postsImgS from "../Images/posts.svg";
import LoadingGif from "../Images/loading.gif";
//component
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

const Profile = ({
  fetchAllPost,
  postState,
  userState,
  fetchUserByUsername,
}) => {
  const { allPosts } = postState;
  const { userUsernameDetails } = userState;
  let { profileid } = useParams();
  const [showPostModal, setShowPostModal] = useState(false);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  var j = 1;

  useEffect(() => {
    fetchAllPost();
    fetchUserByUsername({ username: profileid });
    const updateWindowDimensions = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);
  useEffect(() => {
    fetchUserByUsername({ username: profileid });
    fetchAllPost();
  }, [profileid]);

  if (allPosts.length === 0 || userUsernameDetails?.username !== profileid) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img width="50px" height="50px" src={LoadingGif} alt="loading" />
      </div>
    );
  }

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
          {/* //todo highlight */}
          <div className="highlight-wrapper">
            <li></li>
            <ProfileHighlight text="Me" />
            <ProfileHighlight text="Thoughts" />
          </div>
          <FollowInfo
            followers={userUsernameDetails.followers?.length}
            following={userUsernameDetails.followings?.length}
            posts={userUsernameDetails.posts?.length}
            innerWidth={innerWidth}
          />
          <ProfileNav
            imgPosts={postsImgS}
            textPosts="#262626"
            borderPosts="1px solid #000"
            marginPosts="-1px"
          />
          <ProfileNavM
            innerWidth={innerWidth}
            SelectPost="#0095f6"
            currentUserId={userUsernameDetails._id}
          />
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
              .filter((data) => data.postAuthor._id === userUsernameDetails._id)
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
  fetchUserByUsername: (id) => dispatch(fetchUserByUsername(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Profile));
