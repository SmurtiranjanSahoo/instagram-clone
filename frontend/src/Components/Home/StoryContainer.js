import React, { useRef, useState, useEffect, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  fetchAllStory,
  setCreateStoryDetails,
  clearCreatedStoryDetails,
  storyDelete,
} from "../../actions/storyActions";
import { isAutheticated } from "../../auth/auth";
//components
import StoryHome from "./StoryHome";
import AddStory from "./AddStory/AddStory";
//image
import StoryNavImg from "../../Images/story-nav.png";
import { ReactComponent as Loading } from "../../Images/spinner.svg";

const StoryContainer = ({
  innerWidth,
  fetchAllStory,
  storyState,
  setCreateStoryDetails,
  clearCreatedStoryDetails,
  storyDelete,
}) => {
  const {
    allStories,
    isGettingAllStory,
    createStoryDetails,
    createdStoryDetails,
  } = storyState;
  const { user } = isAutheticated();
  const [prevBtn, setPrevBtn] = useState("hidden");
  const [nextBtn, setNextBtn] = useState("visible");
  const storyWrapper = useRef("");
  const YourStory = () => {
    for (let i = 0; i < allStories.length; i++) {
      if (allStories[i].storyAuthor?._id === user._id) {
        return (
          <Link
            style={{ textDecoration: "none" }}
            to={`/stories/${allStories[i]._id}`}
          >
            <StoryHome story={allStories[i]} />
          </Link>
        );
      }
    }
    return (
      <label for="image">
        <input
          type="file"
          name="image"
          id="image"
          style={{
            display: "none",
          }}
          multiple="false"
          onChange={(e) => {
            setCreateStoryDetails({
              storyAuthor: user._id,
              photo: e.target.files[0],
            });
          }}
        />
        <AddStory />
      </label>
    );
  };

  if (Object.keys(createdStoryDetails).length !== 0) {
    setTimeout(() => {
      storyDelete(createdStoryDetails._id);
      clearCreatedStoryDetails();
    }, 86400000);
  }

  useEffect(() => {
    fetchAllStory();
  }, [allStories]);

  if (createStoryDetails.photo) {
    return <Redirect to="/create/story" />;
  }

  return (
    <Fragment>
      <div
        ref={storyWrapper}
        className="story-wrapper"
        style={{
          width:
            innerWidth < 1000
              ? innerWidth < 600
                ? innerWidth
                : "600px"
              : "614px",
        }}
      >
        <div className="story-wrapper-li">
          <li></li>
        </div>

        {YourStory()}

        {allStories
          .filter((story) => story.storyAuthor?._id !== user._id)
          .map((story, i) => {
            return (
              <Link
                style={{ textDecoration: "none" }}
                to={`/stories/${story._id}`}
                key={i}
              >
                <StoryHome story={story} />
              </Link>
            );
          })}
        {allStories.length === 0 && (
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: "0",
            }}
          >
            <Loading width="50px" height="50px" />
          </div>
        )}
      </div>

      <div
        style={{ visibility: prevBtn }}
        className="story-wrapper-button-prev"
      >
        <button
          onClick={() => {
            storyWrapper.current.scrollBy(-400, 0);
            if (storyWrapper.current.scrollLeft - 400 <= 0) {
              setPrevBtn("hidden");
            }
            if (
              storyWrapper.current.scrollWidth -
                storyWrapper.current.clientWidth ===
              storyWrapper.current.scrollLeft
            ) {
              setNextBtn("visible");
            }
          }}
          className="story-prev"
        >
          <img
            style={{
              height: "25p",
              width: "25px",
              transform: "scaleX(-1)",
            }}
            src={StoryNavImg}
            alt=""
          />
        </button>
      </div>
      <div
        style={{ visibility: nextBtn }}
        className="story-wrapper-button-next"
      >
        <button
          onClick={() => {
            let x = 400;

            storyWrapper.current.scrollBy(x, 0);
            if (x !== 0) {
              setPrevBtn("visible");
            } else {
              setPrevBtn("hidden");
            }
            if (
              storyWrapper.current.scrollWidth -
                storyWrapper.current.clientWidth <=
              storyWrapper.current.scrollLeft + 400
            ) {
              setNextBtn("hidden");
            } else {
              setNextBtn("visible");
            }
          }}
          className="story-next"
        >
          <img
            style={{
              height: "25p",
              width: "25px",
            }}
            src={StoryNavImg}
            alt=""
          />
        </button>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  storyState: state.StoryReducer,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllStory: () => dispatch(fetchAllStory()),
  clearCreatedStoryDetails: () => dispatch(clearCreatedStoryDetails()),
  setCreateStoryDetails: (story) => dispatch(setCreateStoryDetails(story)),
  storyDelete: (story) => dispatch(storyDelete(story)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StoryContainer);
