import React from "react";
import Header from "../Components/Header";
import ProfileInfo from "../Components/ProfileInfo";
import ProfileHighlight from "../Components/ProfileHighlight";
import ProfileNav from "../Components/ProfileNav";
import ProfilePost from "../Components/ProfilePost";
import Footer from "../Components/Footer";
import postsImgS from "../Images/posts.svg";

const Profile = () => {
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
              return <ProfilePost />;
            }
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
