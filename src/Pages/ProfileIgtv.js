import React from "react";
import Header from "../Components/Header";
import ProfileInfo from "../Components/Profile/ProfileInfo";
import ProfileHighlight from "../Components/Profile/ProfileHighlight";
import ProfileNav from "../Components/Profile/ProfileNav/ProfileNav";
import Footer from "../Components/Footer";
import igtvImgS from "../Images/igtv.svg";

const ProfileIgtv = () => {
  return (
    <div
      style={{
        overflowX: "hidden",
        overflowY: "scroll",
      }}
    >
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
        <div className="profile-igtv">
          <h2>Videos</h2> <button>Upload</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfileIgtv;
