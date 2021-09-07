import React from "react";
import { connect } from "react-redux";
import UserPhotoHelper from "../../helper/UserPhotoHelper";

import ProfileImg from "../../Images/profileimg.jpg";

const StoryHome = ({ story, userDetails }) => {
  return (
    <div className="story-container">
      <div className="story-outline">
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
          {story.storyAuthor?.photo ? (
            <UserPhotoHelper user={story.storyAuthor} />
          ) : (
            <img src={ProfileImg} alt="user img" />
          )}
        </div>
      </div>
      <div className="story-username">
        {story.storyAuthor.username !== userDetails.username
          ? story.storyAuthor.username
          : "Your Story"}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userDetails: state.UserReducer.userDetails,
});

export default connect(mapStateToProps)(StoryHome);
