import React from "react";
import ProfileImg from "../Images/profileimg.jpg";

const StoryHome = ({ username, img = ProfileImg }) => {
  return (
    <div className="story-container">
      <div className="story-outline">
        <div
          style={{
            width: "62px",
            height: "62px",
            background: "#ffffff",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={img} alt="" />
        </div>
      </div>
      <div className="story-username">{username}</div>
    </div>
  );
};

export default StoryHome;
