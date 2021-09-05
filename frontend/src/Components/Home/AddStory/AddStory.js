import React from "react";
import "./AddStory.css";
import { connect } from "react-redux";
//images
import ProfileImg from "../../../Images/profileimg.jpg";
import { ReactComponent as StoryAdd } from "../../../Images/storyAdd.svg";
//components
import UserPhotoHelper from "../../../helper/UserPhotoHelper";

const AddStory = ({ userState }) => {
  const { userDetails } = userState;
  return (
    <div className="container">
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
        {userDetails?.photo ? (
          <UserPhotoHelper user={userDetails} />
        ) : (
          <img src={ProfileImg} alt="" />
        )}
        <div className="icon">
          <StoryAdd />
        </div>
      </div>
      <div className="text">Your Story</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userState: state.UserReducer,
});

export default connect(mapStateToProps)(AddStory);
