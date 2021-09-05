import React from "react";
import "./PostOptionModal.css";
import { connect } from "react-redux";
import { fetchAllPost, postDelete } from "../../../actions/postActions";
import { isAutheticated } from "../../../auth/auth";
import { useHistory } from "react-router-dom";
import { enableBodyScroll } from "body-scroll-lock";

const PostOptionModal = ({
  setCloseModal,
  postDetails,
  postMRef,
  fetchAllPost,
  postDelete,
}) => {
  const { user } = isAutheticated();
  const history = useHistory();

  const deletePost = (postId) => {
    postDelete(postId);
    enableBodyScroll(postMRef);
    setCloseModal();
    history.goBack();
    fetchAllPost();
    console.log("deleted");
  };

  return (
    <div className="modal-wrapper">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal"
      >
        {postDetails.postAuthor?._id === user._id ? (
          <button
            onClick={() => {
              deletePost(postDetails._id);
            }}
          >
            Delete
          </button>
        ) : (
          <>
            <button>Report</button>
            <button style={{ color: "#ed4956", fontWeight: "700" }}>
              Unfollow
            </button>
          </>
        )}

        <button>Go to post</button>
        <button>Share to...</button>
        <button>Copy Link</button>
        <button>Embed</button>
        <button onClick={setCloseModal}>Cancel</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  postState: state.PostReducer,
  userState: state.UserReducer,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllPost: () => dispatch(fetchAllPost()),
  postDelete: (id) => dispatch(postDelete(id)),
  // fetchUserByUsername: (id) => dispatch(fetchUserByUsername(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostOptionModal);
