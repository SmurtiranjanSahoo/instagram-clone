import React, { useState, useEffect } from "react";
import "./AddComment.css";
import { connect } from "react-redux";
import { updateLikeNComment, fetchPost } from "../../../../actions/postActions";
import { fetchUser } from "../../../../actions/userActions";
import { useParams, Link } from "react-router-dom";
import { isAutheticated } from "../../../../auth/auth";
import profileImg from "../../../../Images/profileimg.jpg";
//components
import UserPhotoHelper from "../../../../helper/UserPhotoHelper";

const AddComment = ({
  innerWidth,
  updateLikeNComment,
  fetchUser,
  userState,
}) => {
  const { postid } = useParams();
  const { user } = isAutheticated();
  const { userDetails } = userState;
  const [comment, setComment] = useState({
    user: user._id,
    comment: {
      text: "",
      time: "",
    },
  });

  const addComment = (e) => {
    e.preventDefault();
    if (comment.comment.text) {
      let formData = new FormData();
      formData.set("user", comment.user);
      formData.set("comment", JSON.stringify(comment.comment));
      updateLikeNComment(postid, formData);
      setComment({
        ...comment,
        comment: {
          text: "",
          time: "",
        },
      });
    }
  };

  useEffect(() => {
    fetchUser(user._id);
  }, []);

  return (
    <div className="comment-wrapper">
      <Link to={`/${user.username}`} className="img">
        {userDetails?.photo ? (
          <UserPhotoHelper className="img-img" user={userDetails} />
        ) : (
          <img src={profileImg} alt="profile image" className="img-img" />
        )}
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
          value={comment.comment.text}
          onChange={(e) => {
            setComment({
              ...comment,
              comment: {
                text: e.target.value,
                time:
                  new Date().toTimeString().slice(0, 5) +
                  new Date().toDateString().slice(3, 10),
              },
            });
          }}
        />
        <button>Post</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userState: state.UserReducer,
});

const mapDispatchToProps = (dispatch) => ({
  updateLikeNComment: (postId, comment) =>
    dispatch(updateLikeNComment(postId, comment)),
  fetchPost: (id) => dispatch(fetchPost(id)),
  fetchUser: (id) => dispatch(fetchUser(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);
