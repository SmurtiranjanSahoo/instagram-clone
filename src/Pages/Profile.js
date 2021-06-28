import React, { useState } from "react";
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

const Profile = () => {
  const [showPostModal, setShowPostModal] = useState(false);

  const arr = [2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 66, 6, 6, 3, 33, 3, 3, 3, 3, 3];
  var j = 1;

  return (
    <div style={{ overflowX: "hidden" }}>
      <Header />
      <div className="profile-container" style={{ marginTop: "54px" }}>
        <ProfileInfo />
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
        <div className="profile-post-container">
          {arr.map((x, i) => {
            if (j === i) {
              j = j + 3;
              return <ProfilePost className={"profile-post-margin"} />;
            } else {
              return (
                // <div
                //   onClick={() => {
                //     setShowPostModal(!showPostModal);
                //   }}
                // >
                // </div>
                <Link
                  to={{
                    pathname: "/modal/1",
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
      <Footer />

      {showPostModal ? <PostModal /> : <></>}
    </div>
  );
};

export default withRouter(Profile);
