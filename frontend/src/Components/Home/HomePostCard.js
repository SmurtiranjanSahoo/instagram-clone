import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import { isAutheticated, getUser, updateUser } from "../../auth/auth";
import ImageHelper from "../../helper/ImageHelper";
import { updatePostLikeNComment, getPost } from "../../helper/apicalls";
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
//components
import PostOptionModal from "../GenericComponents/PostOptionModal/PostOptionModal";

const HomePostCard = ({ innerWidth, post, HomeRef }) => {
  const { user, token } = isAutheticated();
  const [likeCount, setLikeCount] = useState([]);
  const [like, setLike] = useState(false);
  const [save, setSave] = useState(false);
  const [option, setOption] = useState(false);
  const [updateInfo, setUpdateInfo] = useState({
    saved: post._id,
  });
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

  const getCurrentUser = async () => {
    await getUser(token, user._id).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setSave(data.saved?.includes(post._id));
      }
    });
  };

  const updateLike = () => {
    if (!like === true) {
      setLike(true);
      let formData = new FormData();
      formData.set("likes", user._id);
      setLikeCount([...likeCount, user._id]);
      updatePostLikeNComment(post._id, user._id, token, formData).then(
        (data) => {
          if (data.error) {
            console.log(data.error);
          } else {
            getCurrentLikes(post._id);
          }
        }
      );
    } else {
      setLike(false);
      let formData = new FormData();
      formData.set("likes", user._id);
      setLikeCount(likeCount.filter((l) => l !== user._id));
      updatePostLikeNComment(post._id, user._id, token, formData).then(
        (data) => {
          if (data.error) {
            console.log(data.error);
          } else {
            getCurrentLikes(post._id);
          }
        }
      );
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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    getCurrentLikes(post._id);
    getCurrentUser();
  }, []);

  return (
    <>
      <div
        className="post-card-container"
        style={{
          width:
            innerWidth < 1000
              ? innerWidth < 600
                ? innerWidth
                : "600px"
              : "614px",
        }}
      >
        <div className="post-card-header">
          <img src={userImg} alt="user profile" />
          <div className="post-card-header-innerdiv">
            <Link to={post.postAuthor?.username}>
              {post.postAuthor?.username}
            </Link>
            <button
              onClick={() => {
                setOption(!option);
                disableBodyScroll(HomeRef.current);
              }}
              // onClick={setOptionBtn}
            >
              <img
                style={{ width: "16px", height: "16px" }}
                src={optionsImg}
                alt="option"
              />
            </button>
          </div>
        </div>
        <div className="post-card-img">
          <ImageHelper post={post} />
        </div>
        <div className="post-card-icons">
          <div
            style={{
              display: "flex",
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
            <Link
              to={
                innerWidth < 736 ? `/p/${post._id}/comments` : `/p/${post._id}`
              }
            >
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
            <span>{post.postAuthor?.username} </span>
            {post.caption}
          </div>
          <Link
            to={innerWidth < 736 ? `/p/${post._id}/comments` : `/p/${post._id}`}
          >
            View all 230 comments
          </Link>
          <div className="post-recent-comment">
            <span>tamuna_samadashvili </span>
            Wonderful 🙌
          </div>
        </div>
        <div className="post-card-upload-time">59 MINUTES AGO</div>
        <div className="post-card-add-comment">
          <form onSubmit={handleSubmit}>
            <button className="post-card-add-comment-button">
              <img src={emojiImg} alt="emoji" />
            </button>
            <input type="text" placeholder="Add a comment..." />
            <button
              style={{
                color: "#0095f6",
                fontWeight: "600",
                background: "none",
                outline: "none",
                border: "none",
              }}
            >
              Post
            </button>
          </form>
        </div>
        {option ? (
          <PostOptionModal
            postObj={post}
            setCloseModal={() => {
              setOption(!option);
              enableBodyScroll(HomeRef.current);
            }}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default HomePostCard;
