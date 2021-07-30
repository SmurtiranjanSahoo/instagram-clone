import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPost } from "../../helper/apicalls";
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

const PostPage = ({ innerWidth, setOptionBtn, postId }) => {
  const [like, setLike] = useState("false");
  const [saved, setSaved] = useState("false");
  const [postObj, setPostObj] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const getPostdata = () => {
    getPost(postId).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setPostObj(data);
      }
    });
  };
  useEffect(() => {
    getPostdata();
  });

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
        <div>
          <button
            style={{ paddingLeft: "0px" }}
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
          <span>{postObj.likes?.length} </span>likes
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
