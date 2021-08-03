import React, { useEffect, useState } from "react";
import "./PostOptionModal.css";
import { isAutheticated } from "../../../auth/auth";
import { deletePost, getAllPosts } from "../../../helper/apicalls";
import { useHistory } from "react-router-dom";
import { enableBodyScroll } from "body-scroll-lock";

const PostOptionModal = ({ setCloseModal, postObj, postMRef }) => {
  const [loading, setLoading] = useState(false);

  const { user, token } = isAutheticated();
  const history = useHistory();

  const loadAllPost = async () => {
    const { user, token } = isAutheticated();

    await getAllPosts(user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data);
      }
    });
  };

  const postDelete = (postId) => {
    setLoading(true);
    deletePost(postId, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        loadAllPost();
        setLoading(false);
      }
    });
    history.goBack();
    enableBodyScroll(postMRef);
  };
  //Todo bug profile page not refresh after del
  // useEffect(() => {
  //   loadAllPost()
  // }, [])

  return (
    <div className="modal-wrapper">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal"
      >
        {postObj.postAuthor?._id === user._id ? (
          <button
            onClick={() => {
              postDelete(postObj._id);
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

export default PostOptionModal;
