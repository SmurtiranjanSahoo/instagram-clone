import React from "react";
import { Link } from "react-router-dom";
//svg
import postsImg from "../Images/posts.svg";
import igtvImg from "../Images/igtv-grey.svg";
import savedImg from "../Images/saved-grey.svg";
import taggedImg from "../Images/tagged-grey.svg";

const ProfileNav = () => {
  return (
    <div className="profile-nav-container">
      <Link
        style={{
          textDecoration: "none",
          color: "#262626",
          borderTop: "1px solid #000",
          marginTop: "-1px",
        }}
        className="profile-nav-sec"
      >
        <span>
          <img style={{ marginRight: "6px" }} src={postsImg} alt="posts" />
          <span>POSTS</span>
        </span>
      </Link>
      <Link
        style={{ textDecoration: "none", color: "#868686" }}
        className="profile-nav-sec"
      >
        <span>
          <img
            className="profile-nav-img"
            style={{ fill: "#8e8e8e", marginRight: "6px" }}
            src={igtvImg}
            alt="posts"
          />
          <span>IGTV</span>
        </span>
      </Link>
      <Link
        style={{ textDecoration: "none", color: "#868686" }}
        className="profile-nav-sec"
      >
        <span>
          <img
            className="profile-nav-img"
            style={{
              width: "12px",
              height: "12px",
              fill: "#8e8e8e",
              marginRight: "6px",
            }}
            src={savedImg}
            alt="posts"
          />
          <span>SAVED</span>
        </span>
      </Link>
      <Link
        style={{ textDecoration: "none", color: "#868686" }}
        className="profile-nav-sec"
      >
        <span>
          <img
            className="profile-nav-img"
            style={{ fill: "#8e8e8e", marginRight: "6px" }}
            src={taggedImg}
            alt="posts"
          />
          <span>TAGGED</span>
        </span>
      </Link>
    </div>
  );
};

export default ProfileNav;
