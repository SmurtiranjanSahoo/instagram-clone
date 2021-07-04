import React from "react";
import "./FollowInfo.css";

const FollowInfo = ({
  posts = "29",
  followers = "7,171",
  following = "52",
  innerWidth,
}) => {
  return (
    <div className="wrapper">
      <div
        className="innerDiv"
        style={{
          width: 244.75 - (735 - innerWidth) * 0.335,
        }}
      >
        <span className="span1">{posts}</span>
        <span>posts</span>
      </div>
      <div
        className="innerDiv"
        style={{
          width: 244.75 - (735 - innerWidth) * 0.335,
        }}
      >
        <span className="span1">{followers}</span>
        <span>followers</span>
      </div>
      <div
        className="innerDiv"
        style={{
          width: 244.75 - (735 - innerWidth) * 0.335,
        }}
      >
        <span className="span1">{following}</span>
        <span>following</span>
      </div>
    </div>
  );
};

export default FollowInfo;
