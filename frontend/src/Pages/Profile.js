import React, { useState, useEffect, useContext } from "react";
import { Link, withRouter, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { fetchAllPost } from "../actions/postActions";
import { getUser, getUserByUsername, isAutheticated } from "../auth/auth";
//context
import { userContext } from "../Context/userContext";
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

const Profile = ({ fetchAllPost, post }) => {
  const { isGettingAllPost, allPosts } = post;
  let { profileid } = useParams();
  const { user, token } = isAutheticated();
  const [showPostModal, setShowPostModal] = useState(false);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [currentUser, setCurrentUser] = useState("");
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { followers, followings, posts, username, _id } = currentUser;

  var j = 1;

  // const loadAllPost = async () => {
  //   const { user, token } = isAutheticated();
  //   setLoading(true);

  //   await getAllPosts(user._id, token).then((data) => {
  //     if (data.error) {
  //       console.log(data.error);
  //     } else {
  //       setUserPosts(data.filter((data) => data.postAuthor._id === _id));
  //     }
  //   });
  //   setLoading(false);
  // };

  const getCurrentUser = async (token, userId) => {
    await getUser(token, userId).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCurrentUser(data);
      }
    });
  };

  const getUserByUName = async (username) => {
    await getUserByUsername(token, user._id, username).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCurrentUser(data[0]);
      }
    });
  };

  useEffect(() => {
    // getCurrentUser(user.token, user.user._id);
    getUserByUName({ username: profileid });
    // loadAllPost();
    const updateWindowDimensions = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
      setCurrentUser("");
      setUserPosts([]);
    };
  }, []);

  useEffect(() => {
    // loadAllPost();
    fetchAllPost();
  }, []);

  if (isGettingAllPost) {
    return (
      <div>
        {innerWidth < 735 ? (
          <ProfileHeader username={username} innerWidth={innerWidth} />
        ) : (
          <Header />
        )}
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
      </div>
    );
  }

  return (
    <userContext.Provider value={{ getUserByUName, currentUser }}>
      <div style={{ overflowX: "hidden" }}>
        <Header />
        <ProfileHeader username={username} innerWidth={innerWidth} />
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
              followers={followers?.length}
              following={followings?.length}
              posts={posts?.length}
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
              currentUserId={_id}
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
                .filter((data) => data.postAuthor._id === _id)
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

        {showPostModal ? <PostModal /> : <></>}
      </div>
    </userContext.Provider>
  );
};

const mapStateToProps = (state) => ({
  post: state.PostReducer,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllPost: () => dispatch(fetchAllPost()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Profile));
