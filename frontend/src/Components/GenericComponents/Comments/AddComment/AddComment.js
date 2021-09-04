import React, { useState } from "react";
import "./AddComment.css";
import { connect } from "react-redux";
import { updateLikeNComment, fetchPost } from "../../../../actions/postActions";
import { useParams, Link } from "react-router-dom";
import { isAutheticated } from "../../../../auth/auth";
import profileImg from "../../../../Images/profileimg.jpg";

const AddComment = ({ innerWidth, updateLikeNComment }) => {
  const { postid } = useParams();
  const { user } = isAutheticated();
  const [comment, setComment] = useState({
    user: user._id,
    username: user.username,
    text: "",
    time: "",
  });

  const addComment = (e) => {
    e.preventDefault();
    if (comment.text) {
      let formData = new FormData();
      formData.set("comments", JSON.stringify(comment));
      updateLikeNComment(postid, formData);
      setComment({ ...comment, text: "" });
    }
  };

  return (
    <div className="comment-wrapper">
      <Link to={`/${user.username}`} className="img">
        <img src={profileImg} alt="profile image" />
      </Link>
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
            setComment({
              ...comment,
              text: e.target.value,
              time:
                new Date().toTimeString().slice(0, 5) +
                new Date().toDateString().slice(3, 10),
            });
          }}
        />
        <button>Post</button>
      </form>
    </div>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  updateLikeNComment: (postId, comment) =>
    dispatch(updateLikeNComment(postId, comment)),
  fetchPost: (id) => dispatch(fetchPost(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);
