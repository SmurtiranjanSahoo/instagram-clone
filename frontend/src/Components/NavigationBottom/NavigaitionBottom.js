import React, { useState, useEffect } from "react";
import "./NavigaitionBottom.css";
import { Link } from "react-router-dom";
//images
import { ReactComponent as Home } from "../../Images/home.svg";
import { ReactComponent as Like } from "../../Images/like.svg";
import { ReactComponent as Search } from "../../Images/Header/search.svg";
import { ReactComponent as NewPost } from "../../Images/Header/newPost.svg";
import userImg from "../../Images/profileimg.jpg";

const NavigaitionBottom = ({
  ImgHome = Home,
  ImgLike = Like,
  ImgSearch = Search,
}) => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    const updateWindowDimensions = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <div
      style={{ width: innerWidth < 735 ? innerWidth : "735px" }}
      className="navigation-wrapper"
    >
      <Link style={{ width: innerWidth / 5 }} to="/" className="navigation-img">
        <ImgHome />
      </Link>
      <Link
        style={{ width: innerWidth / 5 }}
        to="/explore"
        className="navigation-img"
      >
        <ImgSearch />
      </Link>
      <Link
        to="/create"
        style={{ width: innerWidth / 5 }}
        className="navigation-img"
      >
        {/* <input
          onClick={() => {
            console.log("clicked");
          }}
          type="file"
          name="photo"
          accept="image/*"
          onChange={(e) => {
            setPhoto(e.target.files[0]);
          }}
        /> */}
        <NewPost />
      </Link>
      <Link
        style={{ width: innerWidth / 5 }}
        to="/accounts/activity"
        className="navigation-img"
      >
        <ImgLike />
      </Link>
      <Link
        to="/profile"
        style={{ width: innerWidth / 5 }}
        className="navigation-img header-profile-img"
      >
        <img
          className="header-icon-container-profile"
          src={userImg}
          alt="User image"
        />
      </Link>
    </div>
  );
};

export default NavigaitionBottom;
