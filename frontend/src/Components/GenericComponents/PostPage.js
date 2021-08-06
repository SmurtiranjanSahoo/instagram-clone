import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPost, updatePostLikes } from "../../helper/apicalls";
import { isAutheticated, getUser, updateUser } from "../../auth/auth";
import ImageHelper from "../../helper/ImageHelper";

//images
import userImg from "../../Images/profileimg.jpg";
import optionsImg from "../../Images/PostCard/options.svg";
import likeImg from "../../Images/PostCard/like.svg";
import likeImgS from "../../Images/PostCard/likeS.svg";
import commentImg from "../../Images/PostCard/comment.svg";
import shareImg from "../../Images/PostCard/share.svg";
import savedImg from "../../Images/PostCard/saved.svg";
import savedImgS from "../../Images/PostCard/savedS.svg";
import emojiImg from "../../Images/PostCard/emoji.svg";
import LoadingGif from "../../Images/loading.gif";

const PostPage = ({ innerWidth, setOptionBtn, postObj }) => {
  const { user, token } = isAutheticated();
  const [likeCount, setLikeCount] = useState([]);
  const [like, setLike] = useState(false);
  const [save, setSave] = useState(false);
  const [updateInfo, setUpdateInfo] = useState({
    saved: postObj._id,
  });

  useEffect(() => {
    getCurrentLikes(postObj._id);
    getCurrentUser();
  }, []);

  const getCurrentUser = async () => {
    await getUser(token, user._id).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setSave(data.saved?.includes(postObj._id));
      }
    });
  };

  const getCurrentLikes = async (postId) => {
    await getPost(postId).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setLike(data.likes?.includes(user._id));
        setLikeCount(data.likes);
      }
    });
  };

  const updateLike = () => {
    if (!like === true) {
      setLike(true);
      let formData = new FormData();
      formData.set("likes", user._id);
      setLikeCount([...likeCount, user._id]);
      updatePostLikes(postObj._id, user._id, token, formData).then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          getCurrentLikes(postObj._id);
        }
      });
    } else {
      setLike(false);
      let formData = new FormData();
      formData.set("likes", user._id);
      setLikeCount(likeCount.filter((l) => l !== user._id));
      updatePostLikes(postObj._id, user._id, token, formData).then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          getCurrentLikes(postObj._id);
        }
      });
    }
  };

  const updateSave = () => {
    if (!save === true) {
      setSave(true);
      updateUser(user._id, token, updateInfo).then((data) => {
        if (data.error) {
          console.log(data.error);
        }
      });
    } else {
      setSave(false);
      updateUser(user._id, token, updateInfo).then((data) => {
        if (data.error) {
          console.log(data.error);
        }
      });
    }
  };

  if (!postObj) {
    return (
      <div
        style={{
          height: "calc(100vh - 50px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img width="50px" height="50px" src={LoadingGif} alt="loading" />
      </div>
    );
  }

  return (
    <div
      className="post-card-container"
      style={{
        width:
          innerWidth < 1000
            ? innerWidth < 735
              ? innerWidth
              : "735px"
            : "614px",
      }}
    >
      <div className="post-card-header">
        <img src={userImg} alt="user profile" />
        <div className="post-card-header-innerdiv" style={{ width: "100%" }}>
          <a href="">{postObj.postAuthor?.username}</a>
          <button onClick={setOptionBtn}>
            <img
              style={{ width: "16px", height: "16px" }}
              src={optionsImg}
              alt="option"
            />
          </button>
        </div>
      </div>
      <div className="post-card-img">
        <ImageHelper post={postObj} />
      </div>
      <div className="post-card-icons">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <button
            style={{ paddingLeft: "0px" }}
            onClick={() => {
              updateLike();
            }}
          >
            <img src={like ? likeImgS : likeImg} alt="like" />
          </button>
          <Link to={innerWidth < 736 ? "/p/comments" : "/p/1"}>
            <button>
              <img src={commentImg} alt="comment" />
            </button>
          </Link>
          <button>
            <img src={shareImg} alt="Share" />
          </button>
        </div>
        <button
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
          onClick={() => {
            updateSave();
          }}
        >
          <img src={save ? savedImgS : savedImg} alt="save button" />
        </button>
      </div>
      <div className="post-card-like-v">
        <span>
          <span>{likeCount.length} </span>likes
        </span>
      </div>
      <div className="post-card-comment-sec">
        <div className="post-card-caption">
          <span>{postObj.postAuthor?.username} </span>
          {postObj.caption}
        </div>
        <Link to={innerWidth < 736 ? "/p/comments" : "/p/1"}>
          View all 230 comments
        </Link>
        <div className="post-recent-comment">
          <span>tamuna_samadashvili </span>
          Wonderful 🙌
        </div>
      </div>
      <div className="post-card-upload-time">59 MINUTES AGO</div>
    </div>
  );
};

export default PostPage;
