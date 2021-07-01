import React, { useState } from "react";
//images
import optionsImg from "../../Images/StoryPlay/option.svg";
import muteImg from "../../Images/StoryPlay/mute.svg";
import pauseImg from "../../Images/StoryPlay/pause.svg";
import playImg from "../../Images/StoryPlay/play.svg";
import unmuteImg from "../../Images/StoryPlay/soundplay.svg";
import userImg from "../../Images/profileimg.jpg";

const StoryPlayMain = () => {
  const [pause, setPause] = useState(false);
  const [unmute, setUnmute] = useState(false);

  return (
    <div className="story-play-main">
      <div className="story-header">
        <img src={userImg} alt="user profile" />
        <div className="story-header-innerdiv">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a href="">marvelstudios</a>
            <time>6h</time>
          </div>

          <div className="story-header-buttons">
            <button
              onClick={() => setPause(!pause)}
              className="story-header-playbutton"
            >
              <img
                style={{ width: "16px", height: "16px" }}
                src={pause ? playImg : pauseImg}
                alt="play"
              />
            </button>
            <button
              onClick={() => setUnmute(!unmute)}
              className="story-header-soundbutton"
            >
              <img
                style={{ width: "16px", height: "16px" }}
                src={unmute ? unmuteImg : muteImg}
                alt="play"
              />
            </button>
            <button className="story-header-optionbutton">
              <img
                style={{ width: "24px", height: "24px" }}
                src={optionsImg}
                alt="option"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryPlayMain;
