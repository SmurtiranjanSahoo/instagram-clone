import React from "react";
//components
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ProfileInfo from "../Components/Profile/ProfileInfo";
import ProfileHighlight from "../Components/Profile/ProfileHighlight";
import ProfileNav from "../Components/Profile/ProfileNav";
import ProfilePost from "../Components/Profile/ProfilePost";
//images
import taggedImgS from "../Images/tagged.svg";

const ProfileTagged = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Header />
      <div className="profile-container" style={{ marginTop: "54px" }}>
        <ProfileInfo />
        <div className="highlight-wrapper">
          <li></li>
          <ProfileHighlight text="Me" />
          <ProfileHighlight text="Thoughts" />
        </div>
        <ProfileNav
          imgTagged={taggedImgS}
          textTagged="#262626"
          borderTagged="1px solid #000"
          marginTagged="-1px"
        />
        <div className="profile-post-container">
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
      <Footer />
    </div>
  );
};

export default ProfileTagged;