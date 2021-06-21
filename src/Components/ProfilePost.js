import React from "react";

const ProfilePost = ({ className = "profile-post" }) => {
  return (
    <>
      <div className={className}>
        <div className="profile-post-likecount">
          <span>
            <span>277</span>
          </span>
          <span>
            <span>70</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default ProfilePost;
