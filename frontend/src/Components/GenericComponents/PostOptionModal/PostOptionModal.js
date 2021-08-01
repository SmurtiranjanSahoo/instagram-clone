import React from "react";
import "./PostOptionModal.css";
import { isAutheticated } from "../../../auth/auth";

const PostOptionModal = ({ setCloseModal, userid }) => {
  const { user } = isAutheticated();
  return (
    <div className="modal-wrapper">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal"
      >
        {userid === user._id ? (
          <button>Delete</button>
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

export default PostOptionModal;
