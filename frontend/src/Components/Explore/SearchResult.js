import React from "react";
import { Link } from "react-router-dom";
import UserImg from "../../Images/profileimg.jpg";
import UserPhotoHelper from "../../helper/UserPhotoHelper";

const SearchResult = ({ userImg = UserImg, user }) => {
  let profileLink = `/${user.username}`;
  return (
    <Link
      to={profileLink}
      style={{
        width: "100%",
        height: "63px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "8px 16px",
        textDecoration: "none",
      }}
    >
      {user?.photo ? (
        <UserPhotoHelper user={user} className="explore-searchresult-img" />
      ) : (
        <img
          className="explore-searchresult-img"
          src={userImg}
          alt="user image"
        />
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p style={{ fontSize: "14px", fontWeight: "600" }}>{user.username}</p>
        <p style={{ fontSize: "14px", color: "#8e8e8e" }}>{user.name}</p>
      </div>
    </Link>
  );
};

export default SearchResult;
