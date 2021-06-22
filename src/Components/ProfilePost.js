import React from "react";
import { IoHeartSharp } from "react-icons/all";
import { RiChat3Fill } from "react-icons/ri";

const ProfilePost = ({
  className = "profile-post",
  likecount = "277",
  commentcount = "80",
}) => {
  return (
    <>
      <div className={className}>
        <div className="profile-post-likecount">
          <span style={{ marginRight: "30px" }}>
            <IoHeartSharp
              style={{ width: "21px", height: "21px", opacity: "1" }}
            />
            <span style={{ marginLeft: "7px" }}> {likecount} </span>
          </span>
          <span>
            <RiChat3Fill
              style={{ width: "21px", height: "21px", transform: "scaleX(-1)" }}
            />
            <span style={{ marginLeft: "7px" }}> {commentcount} </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default ProfilePost;
