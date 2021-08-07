import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { getPost } from "../helper/apicalls";
import { isAutheticated, getUser } from "../auth/auth";
//components
import CommentsHeader from "../Components/HeaderNav/CommentsHeader";
import AddComment from "../Components/GenericComponents/Comments/AddComment/AddComment";
import Comment from "../Components/GenericComponents/Comments/Comment";
//image
import userImg from "../Images/profileimg.jpg";
const Comments = () => {
  const { postid } = useParams();
  const { user, token } = isAutheticated();

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [comments, setComments] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [postObj, setPostObj] = useState({});
  const [profileLink, setProfileLink] = useState("");

  useEffect(() => {
    const updateWindowDimensions = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  const getPostdata = async () => {
    await getPost(postid).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setComments(data.comments);
        setPostObj(data);
        setProfileLink(`/${data.postAuthor?.username}`);
        // console.log(JSON.parse(data.comments[1]));
      }
    });
  };
  // console.log(postObj);
  useEffect(() => {
    getPostdata();
  }, [comments]);
  return (
    <div>
      <CommentsHeader innerWidth={innerWidth} />
      <div style={{ marginTop: "44px" }}>
        <AddComment innerWidth={innerWidth} />
        <div
          className="post-comment-container"
          style={{ padding: "20px 0px 16px 16px", height: "100%" }}
        >
          <div
            className="user-caption"
            style={{
              margin: "0 0 16px 0",
              width: "100%",
              borderBottom: "1px solid #efefef",
              padding: "0 16px 16px 0",
            }}
          >
            <div>
              <img src={userImg} alt="user image" />
            </div>
            <div className="user-caption-innerDiv" style={{ width: "100%" }}>
              <Link
                style={{
                  textDecoration: "none",
                  color: "#262626",
                  fontWeight: "600",
                }}
                to={profileLink}
              >
                {postObj.postAuthor?.username}{" "}
              </Link>
              {postObj.caption}
              <div
                className="upload-time"
                style={{
                  color: "#8e8e8e",
                  fontSize: "12px",
                  fontWeight: 400,
                  marginTop: "10px",
                }}
              >
                {postObj.createdAt
                  ?.slice(2, 10)
                  ?.split("-")
                  ?.reverse()
                  ?.toString()
                  ?.replaceAll(",", "-")}
              </div>
            </div>
          </div>
          {comments
            .slice(0)
            .reverse()
            .map((comment, i) => {
              comment = JSON.parse(comment);
              return <Comment key={i} comment={comment} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Comments;
