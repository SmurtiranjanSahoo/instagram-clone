import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { fetchAllPost } from "../actions/postActions";
import { fetchUser, fetchAllUser } from "../actions/userActions";
import { isAutheticated } from "../auth/auth";
//components
import Header from "../Components/Header";
import HomeHeader from "../Components/HeaderNav/HomeHeader";
import Footer from "../Components/Footer";
import HomeRightside from "../Components/Home/HomeRightside";
import StoryContainer from "../Components/Home/StoryContainer";
import HomePostCard from "../Components/Home/HomePostCard";
import NavigaitionBottom from "../Components/NavigationBottom/NavigaitionBottom";
import PostOptionModal from "../Components/GenericComponents/PostOptionModal/PostOptionModal";
import UserAccount from "../Components/Home/UserAccount/UserAccount";
//images
import { ReactComponent as HomeS } from "../Images/home-select.svg";
import { ReactComponent as Loading } from "../Images/spinner.svg";

const Home = ({
  fetchAllPost,
  postState,
  fetchUser,
  userState,
  fetchAllUser,
}) => {
  const { user } = isAutheticated();
  const { allPosts } = postState;
  const { userDetails, allUsers } = userState;
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const HomeRef = useRef("");

  useEffect(() => {
    fetchAllPost();
    fetchUser(user._id);
    fetchAllUser();
    const updateWindowDimensions = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  useEffect(() => {
    fetchAllPost();
  }, [allPosts]);

  if (allPosts.length === 0) {
    return (
      <div>
        {innerWidth < 735 ? <HomeHeader /> : <Header ImgHome={HomeS} />}
        <div
          style={{
            height: "100vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loading width="50px" height="50px" />
        </div>
      </div>
    );
  }

  if (userDetails.followings?.length === 0) {
    return (
      <div style={{ width: "100%", overflowX: "hidden" }}>
        <Header ImgHome={HomeS} />
        <HomeHeader />
        <div
          style={{
            marginTop: "54px",
            width: innerWidth < 600 ? innerWidth : "600px",
            marginLeft: "auto",
            marginRight: "auto",
            paddingTop: "30px",
          }}
        >
          <div
            style={{
              fontWeight: "600",
              color: "#262626",
              marginLeft: innerWidth < 600 ? "25px" : "0",
            }}
          >
            Suggestions For You
          </div>
          <div
            style={{
              marginTop: "16px",
              padding: "8px 0",
              width: "100%",
              border: innerWidth < 600 ? "none" : "1px solid #dbdbdb",
              borderRadius: "3px",
            }}
            className="account-suggestion-container"
          >
            {allUsers
              .filter((data) => data._id !== user._id)
              .map((user, i) => {
                return <UserAccount key={i} user={user} />;
              })}
          </div>
        </div>

        <NavigaitionBottom ImgHome={HomeS} />
      </div>
    );
  } else {
    return (
      <div style={{ width: "100%", overflowX: "hidden" }}>
        <Header ImgHome={HomeS} />
        <HomeHeader />
        <div ref={HomeRef} className="home-wrapper">
          <div className="home-left">
            <StoryContainer innerWidth={innerWidth} />
            <div>
              {userDetails.followings?.map((user) =>
                allPosts
                  .filter((data) => data.postAuthor._id === user)
                  .map((post, i) => (
                    <HomePostCard
                      key={i}
                      post={post}
                      innerWidth={innerWidth}
                      HomeRef={HomeRef}
                    />
                  ))
              )}
            </div>
          </div>
          <HomeRightside />
        </div>
        {/* <Footer /> */}
        <NavigaitionBottom ImgHome={HomeS} />
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  postState: state.PostReducer,
  userState: state.UserReducer,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllPost: () => dispatch(fetchAllPost()),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchAllUser: () => dispatch(fetchAllUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
