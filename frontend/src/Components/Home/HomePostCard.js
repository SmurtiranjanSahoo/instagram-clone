import React, { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { connect } from "react-redux";
import { updateLikeNComment } from "../../actions/postActions";
import { userUpdate, fetchUser } from "../../actions/userActions";
import { isAutheticated } from "../../auth/auth";
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
//components
import PostOptionModal from "../GenericComponents/PostOptionModal/PostOptionModal";
import UserPhotoHelper from "../../helper/UserPhotoHelper";

const HomePostCard = ({
  innerWidth,
  postPageWidth = 600,
  post,
  HomeRef,
  updateLikeNComment,
  userUpdate,
  userState,
  fetchUser,
}) => {
  const { user } = isAutheticated();
  const { userDetails } = userState;
  const [likeCount, setLikeCount] = useState([]);
  const [like, setLike] = useState(false);
  const [save, setSave] = useState(false);
  const [option, setOption] = useState(false);
  const [updateInfo, setUpdateInfo] = useState({
    saved: post._id,
  });

  const updateLike = () => {
    if (!like === true) {
      setLike(true);
      let formData = new FormData();
      formData.set("likes", user._id);
      setLikeCount([...likeCount, user._id]);
      updateLikeNComment(post._id, formData);
    } else {
      setLike(false);
      let formData = new FormData();
      formData.set("likes", user._id);
      setLikeCount(likeCount.filter((l) => l !== user._id));
      updateLikeNComment(post._id, formData);
    }
  };

  const updateSave = () => {
    if (!save === true) {
      setSave(true);
      userUpdate(updateInfo);
      fetchUser(user._id);
    } else {
      setSave(false);
      userUpdate(updateInfo);
      fetchUser(user._id);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    setLike(post.likes?.includes(user._id));
    setLikeCount(post.likes);
    setSave(userDetails.saved?.includes(post._id));
  }, []);

  return (
    <Fragment>
      <div
        className="post-card-container"
        style={{
          width:
            innerWidth < 1000
              ? innerWidth < postPageWidth
                ? innerWidth
                : "600px"
              : "614px",
        }}
      >
        <div className="post-card-header">
          <Link to={`/${post.postAuthor?.username}`}>
            {post.postAuthor?.photo ? (
              <UserPhotoHelper user={post.postAuthor} />
            ) : (
              <img src={userImg} alt="user profile" />
            )}
          </Link>
          <div className="post-card-header-innerdiv">
            <Link to={`/${post.postAuthor?.username}`}>
              {post.postAuthor?.username}
            </Link>
            <button
              onClick={() => {
                setOption(!option);
                disableBodyScroll(HomeRef.current);
              }}
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
          {post.comments?.length > 1 && (
            <Link
              to={
                innerWidth < 736 ? `/p/${post._id}/comments` : `/p/${post._id}`
              }
            >
              View all {post.comments?.length} comments
            </Link>
          )}
          {post.comments?.length > 1 && (
            <div className="post-recent-comment">
              <Link
                to={`/${
                  post.comments[post.comments?.length - 1].commentAuthor
                    .username
                }`}
                style={{
                  color: "#262626",
                  fontWeight: "600",
                  marginRight: "5px",
                }}
              >
                {
                  post.comments[post.comments?.length - 1].commentAuthor
                    .username
                }
              </Link>
              {
                JSON.parse(post.comments[post.comments?.length - 1].comment)
                  ?.text
              }
            </div>
          )}
        </div>
        <div className="post-card-upload-time">
          {post.createdAt
            ?.slice(2, 10)
            ?.split("-")
            ?.reverse()
            ?.toString()
            ?.replaceAll(",", "-")}
        </div>
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
        {option && (
          <PostOptionModal
            postDetails={post}
            setCloseModal={() => {
              setOption(!option);
              enableBodyScroll(HomeRef.current);
            }}
          />
        )}
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  userState: state.UserReducer,
});

const mapDispatchToProps = (dispatch) => ({
  updateLikeNComment: (postId, post) =>
    dispatch(updateLikeNComment(postId, post)),
  userUpdate: (user) => dispatch(userUpdate(user)),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePostCard);
