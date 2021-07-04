import React from "react";
import "./FollowInfo.css";

const FollowInfo = ({
  posts = "29",
  followers = "7,171",
  following = "52",
}) => {
  return (
    <div className="wrapper">
      <div className="innerDiv">
        <span className="span1">{posts}</span>
        <span>posts</span>
      </div>
      <div className="innerDiv">
        <span className="span1">{followers}</span>
        <span>followers</span>
      </div>
      <div className="innerDiv">
        <span className="span1">{following}</span>
        <span>following</span>
      </div>
    </div>
  );
};

export default FollowInfo;
