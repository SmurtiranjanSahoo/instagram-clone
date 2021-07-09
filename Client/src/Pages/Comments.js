import React, { useEffect, useState } from "react";
//components
import CommentsHeader from "../Components/HeaderNav/CommentsHeader";
import AddComment from "../Components/GenericComponents/Comments/AddComment/AddComment";
//image
import userImg from "../Images/profileimg.jpg";
const Comments = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <div>
      <CommentsHeader innerWidth={innerWidth} />
      <div style={{ marginTop: "44px" }}>
        <AddComment innerWidth={innerWidth} />
        <div
          className="post-comment-container"
          style={{ padding: "20px 0px 16px 16px" }}
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
              <span>marvelstudios </span>
              Prepare to meet your match 👊 Tickets and pre-orders are available
              now for Marvel Studios' @Black.Widow. Experience it
              <div
                className="upload-time"
                style={{
                  color: "#8e8e8e",
                  fontSize: "12px",
                  fontWeight: 400,
                  marginTop: "10px",
                }}
              >
                20h
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
