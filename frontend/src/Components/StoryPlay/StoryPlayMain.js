import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchStory } from "../../actions/storyActions";
//images
import optionsImg from "../../Images/StoryPlay/option.svg";
import muteImg from "../../Images/StoryPlay/mute.svg";
import pauseImg from "../../Images/StoryPlay/pause.svg";
import playImg from "../../Images/StoryPlay/play.svg";
import unmuteImg from "../../Images/StoryPlay/soundplay.svg";
import userImg from "../../Images/profileimg.jpg";
import { ReactComponent as ShareImg } from "../../Images/share.svg";
import { ReactComponent as Loading } from "../../Images/spinner.svg";
import { MdClose } from "react-icons/md";

//components
import UserPhotoHelper from "../../helper/UserPhotoHelper";
import StoryPhotoHelper from "../../helper/StoryPhotoHelper";

const StoryPlayMain = ({ innerWidth, fetchStory, storyState }) => {
  const { storyid } = useParams();
  const { storyDetails, isStoryLoading } = storyState;
  const [pause, setPause] = useState(false);
  const [unmute, setUnmute] = useState(false);

  useEffect(() => {
    fetchStory(storyid);
  }, [storyid]);

  if (Object.keys(storyDetails).length === 0) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loading width="50px" height="50px" />
      </div>
    );
  }

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
      <StoryPhotoHelper story={storyDetails} />
      <div className="story-header">
        {storyDetails.storyAuthor?.photo ? (
          <UserPhotoHelper user={storyDetails.storyAuthor} />
        ) : (
          <img src={userImg} alt="user profile" />
        )}
        <div className="story-header-innerdiv">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link to={`/${storyDetails.storyAuthor?.username}`}>
              {storyDetails.storyAuthor?.username}
            </Link>
            {/* <time>6h</time> */}
          </div>

          <div className="story-header-buttons">
            {/* <button
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
            </button> */}
            <Link to="/" className="story-header-optionbutton">
              {/* <img
                style={{ width: "24px", height: "24px" }}
                src={optionsImg}
                alt="option"
              /> */}
              <MdClose style={{ width: "30px", height: "30px" }} />
            </Link>
          </div>
        </div>
      </div>
      <div className="story-reply-sec">
        {/* <div className="reply-input">
          <input type="text" placeholder="Send Message" />
          <button>Send</button>
        </div> */}
        <button>
          <ShareImg style={{ fill: "#dbdbdb" }} />
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  storyState: state.StoryReducer,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStory: (id) => dispatch(fetchStory(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryPlayMain);
