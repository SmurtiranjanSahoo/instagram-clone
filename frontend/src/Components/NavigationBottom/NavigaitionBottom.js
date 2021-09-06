import React, { useState, useEffect } from "react";
import "./NavigaitionBottom.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../../actions/userActions";
import { isAutheticated } from "../../auth/auth";
//images
import { ReactComponent as Home } from "../../Images/home.svg";
import { ReactComponent as Like } from "../../Images/like.svg";
import { ReactComponent as Search } from "../../Images/Header/search.svg";
import { ReactComponent as NewPost } from "../../Images/Header/newPost.svg";
import userImg from "../../Images/profileimg.jpg";
//components
import UserPhotoHelper from "../../helper/UserPhotoHelper";

const NavigaitionBottom = ({
  ImgHome = Home,
  ImgLike = Like,
  ImgSearch = Search,
  userState,
  fetchUser,
}) => {
  const { user } = isAutheticated();
  const { userDetails } = userState;
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    fetchUser(user._id);
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
        <NewPost />
      </Link>
      <Link
        style={{ width: innerWidth / 5 }}
        to="/activity"
        className="navigation-img"
      >
        <ImgLike />
      </Link>
      <Link
        to={`/${user.username}`}
        style={{ width: innerWidth / 5 }}
        className="navigation-img header-profile-img"
      >
        {userDetails?.photo ? (
          <UserPhotoHelper
            className="header-icon-container-profile"
            user={userDetails}
          />
        ) : (
          <img
            className="header-icon-container-profile"
            src={userImg}
            alt="User image"
          />
        )}
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userState: state.UserReducer,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigaitionBottom);
