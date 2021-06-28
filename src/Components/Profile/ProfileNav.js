import React from "react";
import { Link } from "react-router-dom";
//svg
import postsImg from "../../Images/posts-grey.svg";
import igtvImg from "../../Images/igtv-grey.svg";
import savedImg from "../../Images/saved-grey.svg";
import taggedImg from "../../Images/tagged-grey.svg";

const ProfileNav = ({
  imgPosts = postsImg,
  imgIgtv = igtvImg,
  imgSaved = savedImg,
  imgTagged = taggedImg,
  textPosts = "#868686",
  textIgtv = "#868686",
  textSaved = "#868686",
  textTagged = "#868686",
  borderPosts,
  marginPosts,
  borderIgtv,
  marginIgtv,
  borderSaved,
  marginSaved,
  borderTagged,
  marginTagged,
}) => {
  return (
    <div className="profile-nav-container">
      <Link
        to="/profile"
        style={{
          textDecoration: "none",
          color: textPosts,
          borderTop: borderPosts,
          marginTop: marginPosts,
        }}
        className="profile-nav-sec"
      >
        <span>
          <img style={{ marginRight: "6px" }} src={imgPosts} alt="posts" />
          <span>POSTS</span>
        </span>
      </Link>
      <Link
        to="/profile/channel"
        style={{
          textDecoration: "none",
          color: textIgtv,
          borderTop: borderIgtv,
          marginTop: marginIgtv,
        }}
        className="profile-nav-sec"
      >
        <span>
          <img
            className="profile-nav-img"
            style={{ fill: "#8e8e8e", marginRight: "6px" }}
            src={imgIgtv}
            alt="posts"
          />
          <span>IGTV</span>
        </span>
      </Link>
      <Link
        to="/profile/saved"
        style={{
          textDecoration: "none",
          color: textSaved,
          borderTop: borderSaved,
          marginTop: marginSaved,
        }}
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
            src={imgSaved}
            alt="posts"
          />
          <span>SAVED</span>
        </span>
      </Link>
      <Link
        to="/profile/tagged"
        style={{
          textDecoration: "none",
          color: textTagged,
          borderTop: borderTagged,
          marginTop: marginTagged,
        }}
        className="profile-nav-sec"
      >
        <span>
          <img
            className="profile-nav-img"
            style={{ fill: "#8e8e8e", marginRight: "6px" }}
            src={imgTagged}
            alt="posts"
          />
          <span>TAGGED</span>
        </span>
      </Link>
    </div>
  );
};

export default ProfileNav;
