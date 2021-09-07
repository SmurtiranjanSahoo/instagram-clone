import React from "react";
import { API } from "../backend";
import UserImg from "../Images/profileimg.jpg";

const StoryPhotoHelper = ({ story, className }) => {
  const imageurl = story ? `${API}/story/photo/${story._id}` : UserImg;
  return (
    <img
      className={className}
      src={imageurl}
      alt="photo"
      style={{ objectFit: "cover" }}
    />
  );
};

export default StoryPhotoHelper;
