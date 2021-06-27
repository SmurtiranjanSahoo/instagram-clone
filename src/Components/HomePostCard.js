import React, { useState } from "react";
import userImg from "../Images/profileimg.jpg";
import messageImg from "../Images/message.svg";
import optionsImg from "../Images/PostCard/options.svg";
import likeImg from "../Images/PostCard/like.svg";
import likeImgS from "../Images/PostCard/likeS.svg";
import commentImg from "../Images/PostCard/comment.svg";
import shareImg from "../Images/PostCard/share.svg";
import savedImg from "../Images/PostCard/saved.svg";
import savedImgS from "../Images/PostCard/savedS.svg";
import emojiImg from "../Images/PostCard/emoji.svg";

const HomePostCard = () => {
  const [like, setLike] = useState("false");
  const [saved, setSaved] = useState("false");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="post-card-container">
      <div className="post-card-header">
        <img src={userImg} alt="user profile" />
        <div className="post-card-header-innerdiv">
          <a href="">marvelstudios</a>
          <button>
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
          <button>
            <img src={commentImg} alt="comment" />
          </button>
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
          Prepare to meet your match 👊 Tickets and pre-orders are available now
          for Marvel Studios' @Black.Widow. Experience it
        </div>
        <a href="">View all 230 comments</a>
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
  );
};

export default HomePostCard;
