import React from "react";
import Header from "../Components/Header";
import ProfileInfo from "../Components/ProfileInfo";
import ProfileHighlight from "../Components/ProfileHighlight";
import ProfileNav from "../Components/ProfileNav";
import Footer from "../Components/Footer";
import igtvImgS from "../Images/igtv.svg";

const ProfileIgtv = () => {
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
          imgIgtv={igtvImgS}
          textIgtv="#262626"
          borderIgtv="1px solid #000"
          marginIgtv="-1px"
        />
      </div>
      <Footer />
    </div>
  );
};

export default ProfileIgtv;
