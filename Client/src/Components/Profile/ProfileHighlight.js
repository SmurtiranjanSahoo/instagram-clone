import React from "react";
import ProfileImg from "../../Images/profileimg.jpg";

const ProfileHighlight = ({ text, img = ProfileImg }) => {
  return (
    <div className="highlight-container">
      <div className="highlight-it">
        <div className="highlight-outline">
          <img src={img} alt="" />
        </div>
        <div className="highlight-text">{text}</div>
      </div>
    </div>
  );
};

export default ProfileHighlight;
