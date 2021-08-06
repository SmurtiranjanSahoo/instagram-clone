import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SettingIcon from "../../Images/settings.svg";
import ProfileImg from "../../Images/profileimg.jpg";
import { isAutheticated, updateUser, getUser } from "../../auth/auth";
//context
import { userContext } from "../../Context/userContext";

const ProfileInfo = ({ innerWidth, imgWidth }) => {
  const { user, token } = isAutheticated();

  const UserContext = useContext(userContext);
  // console.log(UserContext);
  const { name, followers, followings, posts, username, _id } =
    UserContext.currentUser;
  const [follow, setFollow] = useState(false);
  const [updateInfo, setUpdateInfo] = useState({
    followings: _id,
  });
  useEffect(() => {
    // let user = JSON.parse(localStorage.getItem("jwt"));
    getUser(token, user._id).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setFollow(data.followings?.includes(_id));
      }
    });
  }, []);

  const updateFollow = () => {
    if (!follow === true) {
      setFollow(true);
      updateUser(user._id, token, updateInfo).then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          console.log(data);
        }
      });
      //Todo Add user to followers
    } else {
      setFollow(false);
      updateUser(user._id, token, updateInfo).then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          console.log(data);
        }
      });
    }
  };

  return (
    <div>
      <div
        style={{
          width:
            innerWidth < 975
              ? innerWidth <= 735
                ? innerWidth - 32
                : innerWidth - 40
              : "935px",
        }}
        className="profile-info-container"
      >
        <div
          style={{
            width:
              imgWidth < 975
                ? innerWidth <= 735
                  ? "73px"
                  : 291.67 - (975 - imgWidth) * 0.334
                : "291.67px",
          }}
          className="profile-img"
        >
          <img src={ProfileImg} alt="profile image" />
        </div>
        <section
          className="profile-info"
          style={{
            width: innerWidth < 735 ? innerWidth - 37 : "735px",
          }}
        >
          <div className="profile-username">
            <h2
              style={{
                display: "block",

                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {username}
            </h2>
            {user._id === _id ? (
              <span>
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "#262626" }}
                >
                  Edit Profile
                </Link>
              </span>
            ) : !follow ? (
              <button onClick={updateFollow}>Follow</button>
            ) : (
              <button
                style={{
                  backgroundColor: "#ffffff",
                  color: "#262626",
                  border: "1px solid #dbdbdb",
                }}
                onClick={updateFollow}
              >
                Unfollow
              </button>
            )}

            <img src={SettingIcon} alt="gear icon" />
          </div>
          <ul className="profile-info-pff">
            <span style={{ marginRight: "40px" }}>
              <span style={{ fontWeight: "600" }}>{posts?.length}</span> posts
            </span>
            <span style={{ marginRight: "40px" }}>
              <span style={{ fontWeight: "600" }}>{followers?.length}</span>{" "}
              followers
            </span>
            <span>
              <span style={{ fontWeight: "600" }}>{followings?.length}</span>{" "}
              following
            </span>
          </ul>
          <div className="profile-name">
            <h1>{name}</h1>
            <span>Video Creator</span>
            <div className="profile-bio"></div>
            <a href="">youtube.com/trtechlesson</a>
          </div>
        </section>
      </div>
      <div className="profile-name-m">
        <h1>{name}</h1>
        <span>Video Creator</span>
        <div className="profile-bio"></div>
        <a href="">youtube.com/trtechlesson</a>
      </div>
    </div>
  );
};

export default ProfileInfo;
