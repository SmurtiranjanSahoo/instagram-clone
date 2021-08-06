import React, { useState } from "react";
import "./AddComment.css";
import { useParams } from "react-router-dom";
import { isAutheticated } from "../../../../auth/auth";
import { updatePostLikeNComment } from "../../../../helper/apicalls";
import profileImg from "../../../../Images/profileimg.jpg";

const AddComment = ({ innerWidth }) => {
  const { postid } = useParams();
  const { user, token } = isAutheticated();
  const [comment, setComment] = useState({
    userid: user._id,
    text: "",
  });

  const addComment = (e) => {
    e.preventDefault();
    if (comment.text) {
      let formData = new FormData();
      formData.set("comments", JSON.stringify(comment));
      console.log(comment);
      updatePostLikeNComment(postid, user._id, token, formData).then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          console.log(data);
        }
        setComment({ ...comment, text: "" });
      });
    }
  };

  return (
    <div className="comment-wrapper">
      <div className="img">
        <img src={profileImg} alt="profile image" />
      </div>
      <form
        onSubmit={addComment}
        style={{
          width: innerWidth < 735 ? innerWidth - 64 : "735px",
        }}
        className="input"
      >
        <input
          type="text"
          placeholder="Add a comment..."
          value={comment.text}
          onChange={(e) => {
            setComment({ ...comment, text: e.target.value });
          }}
        />
        <button>Post</button>
      </form>
    </div>
  );
};

export default AddComment;
