import React from "react";
import Header from "../Components/Header";
import ProfileInfo from "../Components/ProfileInfo";
import ProfileHighlight from "../Components/ProfileHighlight";
import ProfileNav from "../Components/ProfileNav";
import ProfilePost from "../Components/ProfilePost";
import Footer from "../Components/Footer";
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
