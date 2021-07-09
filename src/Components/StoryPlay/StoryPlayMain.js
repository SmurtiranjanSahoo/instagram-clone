import React, { useState } from "react";
//images
import optionsImg from "../../Images/StoryPlay/option.svg";
import muteImg from "../../Images/StoryPlay/mute.svg";
import pauseImg from "../../Images/StoryPlay/pause.svg";
import playImg from "../../Images/StoryPlay/play.svg";
import unmuteImg from "../../Images/StoryPlay/soundplay.svg";
import userImg from "../../Images/profileimg.jpg";
import { ReactComponent as ShareImg } from "../../Images/share.svg";

const StoryPlayMain = ({ innerWidth }) => {
  const [pause, setPause] = useState(false);
  const [unmute, setUnmute] = useState(false);

  return (
    <div
      className="story-play-main"
      style={{
        width:
          innerWidth < 975
            ? innerWidth < 735
              ? innerWidth < 425
                ? innerWidth
                : "300px"
              : "310px"
            : "320px",

        height: innerWidth < 425 ? "100%" : "600px",
      }}
    >
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
      <div className="story-reply-sec">
        <div className="reply-input">
          <input type="text" placeholder="Send Message" />
          <button>Send</button>
        </div>
        <button>
          <ShareImg style={{ fill: "#dbdbdb" }} />
        </button>
      </div>
    </div>
  );
};

export default StoryPlayMain;
