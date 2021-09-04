import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
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

const ProfileIgtv = ({ userState }) => {
  const { userUsernameDetails } = userState;
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
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
            followers={userUsernameDetails.followers?.length}
            following={userUsernameDetails.followings?.length}
            posts={userUsernameDetails.posts?.length}
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
            <h2>Videos</h2> <button>Upload</button>
          </div>
        </div>
      </div>
      <Footer />
      <NavigaitionBottom />
    </div>
  );
};

const mapStateToProps = (state) => ({
  userState: state.UserReducer,
});

export default connect(mapStateToProps)(ProfileIgtv);
