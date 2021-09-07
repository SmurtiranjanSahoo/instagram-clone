import React, { useEffect, useState } from "react";
import "../Components/StoryPlay/StoryPlay.css";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
//components
import StoryPlayMain from "../Components/StoryPlay/StoryPlayMain";
// images
import closeBtn from "../Images/PostModal/closeBtn.svg";

const StoryPlay = ({ history, storyState }) => {
  const { storyid } = useParams();
  const { isStoryLoading } = storyState;
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const handle = useFullScreenHandle();

  useEffect(() => {
    const updateWindowDimensions = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  // if (storyid && !isStoryLoading) {
  //   setTimeout(() => {
  //     history.push("/");
  //   }, 8000);
  // }

  return (
    <FullScreen handle={handle}>
      <div
        className="story-play-wrapper"
        // onLoad={handle.enter}
        // onAbort={handle.exit}
      >
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
    </FullScreen>
  );
};

const mapStateToProps = (state) => ({
  storyState: state.StoryReducer,
});
export default connect(mapStateToProps)(StoryPlay);
