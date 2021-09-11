import React from "react";
import { Link } from "react-router-dom";
import UserPhotoHelper from "../../helper/UserPhotoHelper";
import userImg from "../../Images/profileimg.jpg";

const AccountSuggetion = ({ user, suggestionMessage = "New to Instagram" }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "48px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Link to={`/${user.username}`}>
        {user?.photo ? (
          <UserPhotoHelper className="accountsuggestion-img" user={user} />
        ) : (
          <img
            className="accountsuggestion-img"
            src={userImg}
            alt="User image"
          />
        )}
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
        <p style={{ fontSize: "12px", color: "#8e8e8e" }}>
          {suggestionMessage}
        </p>
      </Link>
      <Link
        to={`/${user.username}`}
        style={{
          fontSize: "12px",
          color: "#0095f6",
          marginLeft: "auto",
          marginTop: "auto",
          marginBottom: "auto",
          textDecoration: "none",
          fontWeight: "600",
        }}
      >
        Follow
      </Link>
    </div>
  );
};

export default AccountSuggetion;
