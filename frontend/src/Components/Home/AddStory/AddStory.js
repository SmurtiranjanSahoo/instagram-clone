import React from "react";
import "./AddStory.css";
import ProfileImg from "../../../Images/profileimg.jpg";
import { ReactComponent as StoryAdd } from "../../../Images/storyAdd.svg";

const AddStory = ({ img = ProfileImg }) => {
  return (
    <div className="container">
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
        <div className="icon">
          <StoryAdd />
        </div>
      </div>
      <div className="text">Your Story</div>
    </div>
  );
};

export default AddStory;
