import React, { useEffect, useState, useRef } from "react";
import "../Components/StoryPlay/StoryPlay.css";

//components
import StoryPlayMain from "../Components/StoryPlay/StoryPlayMain";
// images
import closeBtn from "../Images/PostModal/closeBtn.svg";

const StoryPlay = ({ history }) => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <div className="story-play-wrapper">
      <div className="insta-logo">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-dark.png/ff9b85f2b7ca.png"
          alt="logo"
        />
      </div>
      <div
        className="story-play-container"
        style={{
          padding: innerWidth <= 425 ? "0" : "20px 0",
        }}
      >
        <StoryPlayMain innerWidth={innerWidth} />
      </div>
      <div className="storyPlay-closeBtn">
        <button
          onClick={() => {
            history.goBack();
          }}
        >
          <img src={closeBtn} alt="close button" />
        </button>
      </div>
    </div>
  );
};

export default StoryPlay;
