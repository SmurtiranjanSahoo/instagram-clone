import React from "react";
import { Link } from "react-router-dom";
import UserImg from "../../Images/profileimg.jpg";

const UserAccount = ({ userImg = UserImg, user }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "63px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "8px 16px",
      }}
    >
      <Link to={`/${user.username}`}>
        <img
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            marginRight: "15px",
            marginLeft: "5px",
          }}
          src={userImg}
          alt="user image"
        />
      </Link>
      <Link
        to={`/${user.username}`}
        style={{
          display: "flex",
          flexDirection: "column",
          textDecoration: "none",
        }}
      >
        <p style={{ fontSize: "14px", fontWeight: "600", color: "#262626" }}>
          {user.username}
        </p>
        <p style={{ fontSize: "14px", color: "#8e8e8e" }}>{user.name}</p>
        <p style={{ fontSize: "12px", color: "#8e8e8e" }}>New Account</p>
      </Link>
      <button
        style={{
          width: "61.67px",
          height: "30px",
          padding: "5px 9px",
          border: "none",
          outline: "none",
          borderRadius: "4px",
          fontSize: "14px",
          fontWeight: "600",
          backgroundColor: "#0095f6",
          color: "#ffffff",
          marginLeft: "auto",
          marginTop: "auto",
          marginBottom: "auto",
          cursor: "pointer",
        }}
      >
        Follow
      </button>
    </div>
  );
};

export default UserAccount;
