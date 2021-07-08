import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

//images
import taggedImgS from "../Images/tagged.svg";
//component
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ProfileInfo from "../Components/Profile/ProfileInfo";
import ProfileHighlight from "../Components/Profile/ProfileHighlight";
import ProfileNav from "../Components/Profile/ProfileNav/ProfileNav";
import ProfileNavM from "../Components/Profile/ProfileNav/ProfileNavM";
import ProfilePost from "../Components/Profile/ProfilePost";
import FollowInfo from "../Components/Profile/FollowInfo/FollowInfo";
import PostModal from "../Components/PostModal/PostModal";
import NavigaitionBottom from "../Components/NavigationBottom/NavigaitionBottom";
import ProfileHeader from "../Components/HeaderNav/ProfileHeader";

const ProfileTagged = () => {
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
      <ProfileHeader innerWidth={innerWidth} />
      <div className="profile-wrapper" style={{ overflowY: "hidden" }}>
        <div
          className="profile-container"
          style={{
            width: innerWidth < 975 ? innerWidth : "975px",
          }}
        >
          <ProfileInfo innerWidth={innerWidth} imgWidth={innerWidth} />
          <div className="highlight-wrapper">
            <li></li>
            <ProfileHighlight text="Me" />
            <ProfileHighlight text="Thoughts" />
          </div>
          <FollowInfo innerWidth={innerWidth} />
          <ProfileNav
            imgTagged={taggedImgS}
            textTagged="#262626"
            borderTagged="1px solid #000"
            marginTagged="-1px"
          />
          <ProfileNavM innerWidth={innerWidth} SelectTagged="#0095f6" />
          <div
            className="profile-post-container"
            style={{
              width:
                innerWidth < 975
                  ? innerWidth <= 735
                    ? innerWidth
                    : innerWidth - 40
                  : "935px",
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
                      state: { modal: innerWidth <= 735 ? false : true },
                    }}
                  >
                    <ProfilePost className={"profile-post-margin"} />
                  </Link>
                );
              } else {
                return (
                  <Link
                    style={{ textDecoration: "none" }}
                    to={{
                      pathname: "/p/1",
                      state: { modal: innerWidth <= 735 ? false : true },
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

export default ProfileTagged;
