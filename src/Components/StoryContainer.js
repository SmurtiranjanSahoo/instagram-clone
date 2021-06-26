import React from "react";
import StoryHome from "./StoryHome";

const StoryContainer = () => {
  return (
    <div className="story-wrapper">
      <button className="story-prev">P</button>
      <button
        onClick={() => {
          window.scrollBy(100, 0);
        }}
        className="story-next"
      >
        N
      </button>
      <li></li>
      <StoryHome username="trtechlesson" />
      <StoryHome username="smurtiranjan_sahoo" />
      <StoryHome username="gelvix.tech" />
      <StoryHome username="gelvix.tech" />
      <StoryHome username="gelvix.tech" />
      <StoryHome username="smurtiranjan_sahoo" />
      <StoryHome username="gelvix.tech" />
      <StoryHome username="gelvix.tech" />
      <StoryHome username="gelvix.tech" />
      <StoryHome username="smurtiranjan_sahoo" />
      <StoryHome username="gelvix.tech" />
      <StoryHome username="gelvix.tech" />
    </div>
  );
};

export default StoryContainer;
