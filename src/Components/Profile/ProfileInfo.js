import React from "react";
import { Link } from "react-router-dom";
import SettingIcon from "../../Images/settings.svg";
import ProfileImg from "../../Images/profileimg.jpg";

const ProfileInfo = ({ width }) => {
  return (
    <div
      style={{
        width: width,
      }}
      className="profile-info-container"
    >
      <div className="profile-img">
        <img src={ProfileImg} alt="profile image" />
      </div>
      <section className="profile-info">
        <div className="profile-username">
          <h2>smurtiranjan_sahoo</h2>
          <span>
            <Link style={{ textDecoration: "none", color: "#262626" }}>
              Edit Profile
            </Link>
          </span>
          <img src={SettingIcon} alt="gear icon" />
        </div>
        <ul className="profile-info-pff">
          <span style={{ marginRight: "40px" }}>
            <span style={{ fontWeight: "600" }}>29</span> posts
          </span>
          <span style={{ marginRight: "40px" }}>
            <span style={{ fontWeight: "600" }}>7205</span> followers
          </span>
          <span>
            <span style={{ fontWeight: "600" }}>37</span> following
          </span>
        </ul>
        <div className="profile-name">
          <h1>Smurtiranjan Sahoo</h1>
          <span>Video Creator</span>
          <div className="profile-bio"></div>
          <a href="">youtube.com/trtechlesson</a>
        </div>
      </section>
    </div>
  );
};

export default ProfileInfo;
