import React from "react";
import Header from "../Components/Header";
import ProfileInfo from "../Components/ProfileInfo";
import ProfileHighlight from "../Components/ProfileHighlight";
import ProfileNav from "../Components/ProfileNav";
import ProfilePost from "../Components/ProfilePost";
import Footer from "../Components/Footer";

const Profile = () => {
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
        <ProfileNav />
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

export default Profile;
