import React from "react";
import { Link } from "react-router-dom";
import SettingIcon from "../../Images/settings.svg";
import ProfileImg from "../../Images/profileimg.jpg";

const ProfileInfo = ({ innerWidth, imgWidth }) => {
  return (
    <div>
      <div
        style={{
          width:
            innerWidth < 975
              ? innerWidth <= 735
                ? innerWidth - 32
                : innerWidth - 40
              : "935px",
        }}
        className="profile-info-container"
      >
        <div
          style={{
            width:
              imgWidth < 975
                ? innerWidth <= 735
                  ? "73px"
                  : 291.67 - (975 - imgWidth) * 0.334
                : "291.67px",
          }}
          className="profile-img"
        >
          <img src={ProfileImg} alt="profile image" />
        </div>
        <section
          className="profile-info"
          style={{
            width: innerWidth < 735 ? innerWidth - 37 : "735px",
          }}
        >
          <div className="profile-username">
            <h2
              style={{
                display: "block",

                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              smurtiranjan_sahoo
            </h2>
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
      <div className="profile-name-m">
        <h1>Smurtiranjan Sahoo</h1>
        <span>Video Creator</span>
        <div className="profile-bio"></div>
        <a href="">youtube.com/trtechlesson</a>
      </div>
    </div>
  );
};

export default ProfileInfo;
