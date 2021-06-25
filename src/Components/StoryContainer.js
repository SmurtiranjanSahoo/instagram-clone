import React from "react";
import StoryHome from "./StoryHome";

const StoryContainer = () => {
  return (
    <div className="story-wrapper">
      <li></li>
      <StoryHome username="me" />
      <StoryHome username="me" />
      <StoryHome username="me" />
    </div>
  );
};

export default StoryContainer;
