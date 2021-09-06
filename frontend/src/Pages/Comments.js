import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPost } from "../actions/postActions";
import { getPost } from "../helper/apicalls";
//components
import CommentsHeader from "../Components/HeaderNav/CommentsHeader";
import AddComment from "../Components/GenericComponents/Comments/AddComment/AddComment";
import Comment from "../Components/GenericComponents/Comments/Comment";
import UserPhotoHelper from "../helper/UserPhotoHelper";
//image
import userImg from "../Images/profileimg.jpg";
import LoadingGif from "../Images/loading.gif";

const Comments = ({ postState, fetchPost, userState }) => {
  const { postDetails } = postState;
  const { userDetails } = userState;
  const { postid } = useParams();
  const [comments, setComments] = useState([]);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    fetchPost(postid);
    getComments();
    const updateWindowDimensions = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  const getComments = async () => {
    await getPost(postid).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setComments(data.comments);
      }
    });
  };

  useEffect(() => {
    getComments();
  }, [comments]);

  if (Object.keys(postDetails).length === 0) {
    return (
      <div>
        <CommentsHeader innerWidth={innerWidth} />
        <div style={{ marginTop: "44px" }}>
          <AddComment innerWidth={innerWidth} />
        </div>
        <div
          style={{
            height: "80vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img width="50px" height="50px" src={LoadingGif} alt="loading" />
        </div>
      </div>
    );
  }

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
            <Link
              style={{
                textDecoration: "none",
              }}
              to={`/${postDetails.postAuthor?.username}`}
            >
              {userDetails?.photo ? (
                <UserPhotoHelper className="img-img" user={userDetails} />
              ) : (
                <img src={userImg} alt="user image" />
              )}
            </Link>
            <div className="user-caption-innerDiv" style={{ width: "100%" }}>
              <Link
                style={{
                  textDecoration: "none",
                  color: "#262626",
                  fontWeight: "600",
                }}
                to={`/${postDetails.postAuthor?.username}`}
              >
                {postDetails.postAuthor?.username}{" "}
              </Link>
              {postDetails.caption}
              <div
                className="upload-time"
                style={{
                  color: "#8e8e8e",
                  fontSize: "12px",
                  fontWeight: 400,
                  marginTop: "10px",
                }}
              >
                {postDetails.createdAt
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
              return <Comment key={i} comment={comment} />;
            })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  postState: state.PostReducer,
  userState: state.UserReducer,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPost: (id) => dispatch(fetchPost(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
