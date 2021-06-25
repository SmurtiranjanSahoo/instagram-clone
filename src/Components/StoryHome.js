import React from "react";
import ProfileImg from "../Images/profileimg.jpg";

const StoryHome = ({ username, img = ProfileImg }) => {
  return (
    <div className="story-container">
      <div className="story-it">
        <div className="story-outline">
          <img src={img} alt="" />
        </div>
        <div className="story-username">{username}</div>
      </div>
    </div>
  );
};

export default StoryHome;
