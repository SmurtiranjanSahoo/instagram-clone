import React from "react";
import { connect } from "react-redux";
import { clearCreateStoryDetails, storyCreate } from "../actions/storyActions";
import { Redirect } from "react-router-dom";
//icons
import { MdAddCircleOutline, MdClose } from "react-icons/md";

const CreateStory = ({
  clearCreateStoryDetails,
  storyState,
  storyCreate,
  history,
}) => {
  const { createStoryDetails } = storyState;
  const createStory = () => {
    let formData = new FormData();
    formData.set("photo", createStoryDetails.photo);
    formData.set("storyAuthor", createStoryDetails.storyAuthor);
    storyCreate(formData);
    clearCreateStoryDetails();
  };

  if (!createStoryDetails.photo) {
    return <Redirect to="/" />;
  }

  return (
    <div className="createstory-wapper">
      <div className="createstory-container">
        <div className="createstory-top-buttons">
          <MdClose
            onClick={() => {
              clearCreateStoryDetails();
              history.push("/");
            }}
            style={{ width: "30px", height: "30px", margin: "10px 20px" }}
            fill="#ffffff"
          />
        </div>
        <img
          src={URL.createObjectURL(createStoryDetails.photo)}
          alt="story photo"
        />
        <div className="createstory-bottom-button">
          <button onClick={createStory}>
            <MdAddCircleOutline
              style={{ width: "25px", height: "25px", marginRight: "5px" }}
              fill="#ffffff"
            />
            Add to your story
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  storyState: state.StoryReducer,
});

const mapDispatchToProps = (dispatch) => ({
  clearCreateStoryDetails: () => dispatch(clearCreateStoryDetails()),
  storyCreate: (story) => dispatch(storyCreate(story)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateStory);
