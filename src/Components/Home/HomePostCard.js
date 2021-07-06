import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

const HomePostCard = ({ innerWidth, setOptionBtn }) => {
  const [like, setLike] = useState("false");
  const [saved, setSaved] = useState("false");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
            <a href="">marvelstudios</a>
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
          <img src={userImg} alt="post image" />
        </div>
        <div className="post-card-icons">
          <div>
            <button
              onClick={() => {
                setLike(!like);
              }}
            >
              <img src={like ? likeImg : likeImgS} alt="like" />
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
            onClick={() => {
              setSaved(!saved);
            }}
          >
            <img src={saved ? savedImg : savedImgS} alt="save button" />
          </button>
        </div>
        <div className="post-card-like-v">
          <span>
            <span>3003389 </span>likes
          </span>
        </div>
        <div className="post-card-comment-sec">
          <div className="post-card-caption">
            <span>marvelstudios </span>
            Prepare to meet your match 👊 Tickets and pre-orders are available
            now for Marvel Studios' @Black.Widow. Experience it
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
      </div>
    </>
  );
};

export default HomePostCard;
