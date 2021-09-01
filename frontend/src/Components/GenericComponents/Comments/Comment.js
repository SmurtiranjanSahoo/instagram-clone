import React from "react";
import { Link } from "react-router-dom";
import userImg from "../../../Images/profileimg.jpg";

const Comment = ({ comment }) => {
  let profileLink = `/${comment.username}`;

  return (
    <div
      className="user-caption"
      style={{
        margin: "0 0 16px 0",
        width: "100%",
        borderBottom: "1px solid #efefef",
        padding: "0 16px 16px 0",
      }}
    >
      <div>
        <img src={userImg} alt="user image" />
      </div>
      <div className="user-caption-innerDiv" style={{ width: "100%" }}>
        <Link
          style={{
            textDecoration: "none",
            color: "#262626",
            fontWeight: "600",
          }}
          to={profileLink}
        >
          {comment.username}{" "}
        </Link>
        {comment.text}
        <div
          className="upload-time"
          style={{
            color: "#8e8e8e",
            fontSize: "12px",
            fontWeight: 400,
            marginTop: "10px",
          }}
        >
          {comment.time}
        </div>
      </div>
    </div>
  );
};

export default Comment;