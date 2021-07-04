import React, { useState, useEffect } from "react";

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

const ProfileSaved = () => {
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
      <ProfileHeader innerWidth={innerWidth} />
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
          <FollowInfo innerWidth={innerWidth} />
          <ProfileNav
            imgSaved={savedImgS}
            textSaved="#262626"
            borderSaved="1px solid #000"
            marginSaved="-1px"
          />
          <ProfileNavM innerWidth={innerWidth} SelectSaved="#0095f6" />
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
            <ProfilePost />
            <ProfilePost className={"profile-post-margin"} />
            <ProfilePost />
            <ProfilePost />
            <ProfilePost className={"profile-post-margin"} />
            <ProfilePost />
            <ProfilePost />
            <ProfilePost className={"profile-post-margin"} />
            <ProfilePost />
            <ProfilePost />
            <ProfilePost className={"profile-post-margin"} />
          </div>
        </div>
      </div>
      <Footer />
      <NavigaitionBottom />
    </div>
  );
};

export default ProfileSaved;
