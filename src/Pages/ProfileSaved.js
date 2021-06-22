import React from "react";
import Header from "../Components/Header";
import ProfileInfo from "../Components/ProfileInfo";
import ProfileHighlight from "../Components/ProfileHighlight";
import ProfileNav from "../Components/ProfileNav";
import Footer from "../Components/Footer";
import savedImgS from "../Images/saved.svg";

const ProfileSaved = () => {
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
          imgSaved={savedImgS}
          textSaved="#262626"
          borderSaved="1px solid #000"
          marginSaved="-1px"
        />
      </div>
      <Footer />
    </div>
  );
};

export default ProfileSaved;
