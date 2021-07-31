import React from "react";
import "./PostOptionModal.css";

const PostOptionModal = ({ setCloseModal }) => {
  return (
    <div className="modal-wrapper">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal"
      >
        <button>Report</button>
        <button>Unfollow</button>
        <button>Go to post</button>
        <button>Share to...</button>
        <button>Copy Link</button>
        <button>Embed</button>
        <button onClick={setCloseModal}>Cancel</button>
      </div>
    </div>
  );
};

export default PostOptionModal;
