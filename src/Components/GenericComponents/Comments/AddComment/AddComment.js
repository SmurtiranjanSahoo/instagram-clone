import React from "react";
import "./AddComment.css";
import profileImg from "../../../../Images/profileimg.jpg";

const AddComment = ({ innerWidth }) => {
  return (
    <div className="comment-wrapper">
      <div className="img">
        <img src={profileImg} alt="profile image" />
      </div>
      <form
        style={{
          width: innerWidth < 735 ? innerWidth - 64 : "735px",
        }}
        className="input"
      >
        <input type="text" placeholder="Add a comment..." />
        <button>Post</button>
      </form>
    </div>
  );
};

export default AddComment;
