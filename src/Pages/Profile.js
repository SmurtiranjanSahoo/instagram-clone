import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

//images
import postsImgS from "../Images/posts.svg";
//component
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ProfileInfo from "../Components/Profile/ProfileInfo";
import ProfileHighlight from "../Components/Profile/ProfileHighlight";
import ProfileNav from "../Components/Profile/ProfileNav";
import ProfilePost from "../Components/Profile/ProfilePost";
import PostModal from "../Components/PostModal/PostModal";
import NavigaitionBottom from "../Components/NavigationBottom/NavigaitionBottom";

const Profile = () => {
  const [showPostModal, setShowPostModal] = useState(false);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const arr = [2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 66, 6, 6, 3, 33, 3, 3, 3, 3, 3];
  var j = 1;

  useEffect(() => {
    const updateWindowDimensions = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <div style={{ overflowX: "hidden" }}>
      <Header />
      <div className="profile-wrapper">
        <div
          className="profile-container"
          style={{
            marginTop: "54px",
            width: innerWidth < 975 ? innerWidth : "975px",
          }}
        >
          <ProfileInfo
            width={innerWidth < 975 ? innerWidth - 40 : "935px"}
            imgWidth={
              innerWidth < 975
                ? 291.67 - (975 - innerWidth) * 0.334
                : "291.67px"
            }
          />
          <div className="highlight-wrapper">
            <li></li>
            <ProfileHighlight text="Me" />
            <ProfileHighlight text="Thoughts" />
          </div>
          <ProfileNav
            imgPosts={postsImgS}
            textPosts="#262626"
            borderPosts="1px solid #000"
            marginPosts="-1px"
          />
          <div
            className="profile-post-container"
            style={{
              width: innerWidth < 975 ? innerWidth - 40 : "935px",
            }}
          >
            {arr.map((x, i) => {
              if (j === i) {
                j = j + 3;
                return (
                  <Link
                    style={{ textDecoration: "none" }}
                    to={{
                      pathname: "/p/1",
                      state: { modal: true },
                    }}
                  >
                    <ProfilePost className={"profile-post-margin"} />
                  </Link>
                );
              } else {
                return (
                  // <div
                  //   onClick={() => {
                  //     setShowPostModal(!showPostModal);
                  //   }}
                  // >
                  // </div>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={{
                      pathname: "/p/1",
                      state: { modal: true },
                    }}
                  >
                    <ProfilePost />
                  </Link>
                );
              }
            })}
          </div>
        </div>
      </div>

      <NavigaitionBottom />
      <Footer />

      {showPostModal ? <PostModal /> : <></>}
    </div>
  );
};

export default withRouter(Profile);
