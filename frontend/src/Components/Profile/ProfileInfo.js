import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import {
  fetchUser,
  fetchUserByUsername,
  userUpdate,
  fetchAllUser,
} from "../../actions/userActions";
import { isAutheticated } from "../../auth/auth";
//icon
import SettingIcon from "../../Images/settings.svg";
import ProfileImg from "../../Images/profileimg.jpg";
//components
import UserPhotoHelper from "../../helper/UserPhotoHelper";

const ProfileInfo = ({
  innerWidth,
  imgWidth,
  userState,
  postState,
  fetchUser,
  fetchUserByUsername,
  userUpdate,
  fetchAllUser,
}) => {
  const { profileid } = useParams();
  const { user } = isAutheticated();
  const { userDetails, userUsernameDetails, allUsers } = userState;
  const { allPosts } = postState;

  const [follow, setFollow] = useState(false);
  const [updateInfo, setUpdateInfo] = useState({
    followings: userUsernameDetails._id,
  });

  const updateFollow = () => {
    if (!follow === true) {
      setFollow(true);
      userUpdate(updateInfo);
      //Todo Add user to followers
    } else {
      setFollow(false);
      userUpdate(updateInfo);
    }
  };

  useEffect(() => {
    fetchUserByUsername({ username: profileid });
    fetchUser(user._id);
    fetchAllUser();
    setFollow(userDetails.followings?.includes(userUsernameDetails._id));
  }, [profileid, userDetails.followings]);

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
          {user.username === profileid ? (
            userDetails?.photo ? (
              <UserPhotoHelper className="profile-img-img" user={userDetails} />
            ) : (
              <img src={ProfileImg} alt="profile image" />
            )
          ) : userUsernameDetails?.photo ? (
            <UserPhotoHelper
              className="profile-img-img"
              user={userUsernameDetails}
            />
          ) : (
            <img src={ProfileImg} alt="profile image" />
          )}
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
              {user.username === profileid
                ? userDetails.username
                : userUsernameDetails.username}
            </h2>
            {user._id === userUsernameDetails._id ? (
              <span>
                <Link
                  to="/edit"
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
              <span style={{ fontWeight: "600" }}>
                {
                  allPosts.filter(
                    (data) => data.postAuthor._id === userUsernameDetails._id
                  ).length
                }
              </span>{" "}
              posts
            </span>
            <span style={{ marginRight: "40px" }}>
              <span style={{ fontWeight: "600" }}>
                {
                  allUsers.filter((data) =>
                    data.followings?.includes(userUsernameDetails._id)
                  ).length
                }
              </span>{" "}
              followers
            </span>
            <span>
              <span style={{ fontWeight: "600" }}>
                {user.username === profileid
                  ? userDetails.followings?.length
                  : userUsernameDetails.followings?.length}
              </span>{" "}
              following
            </span>
          </ul>
          <div className="profile-name">
            <h1>
              {user.username === profileid
                ? userDetails.name
                : userUsernameDetails.name}
            </h1>
            <span>Video Creator</span>
            <div className="profile-bio"></div>
            <a href="">youtube.com/trtechlesson</a>
          </div>
        </section>
      </div>
      <div className="profile-name-m">
        <h1>
          {" "}
          {user.username === profileid
            ? userDetails.name
            : userUsernameDetails.name}
        </h1>
        <span>Artist</span>
        <div className="profile-bio">
          {user.username === profileid
            ? userDetails?.bio
            : userUsernameDetails?.bio}
        </div>
        <a
          target="_blank"
          href={
            user.username === profileid
              ? userDetails.website
                ? userDetails.website
                : "https://youtube.com/trtechlesson"
              : userUsernameDetails.website
              ? userUsernameDetails.website
              : "https://youtube.com/trtechlesson"
          }
        >
          {user.username === profileid
            ? userDetails.website
              ? userDetails.website
              : "https://youtube.com/trtechlesson"
            : userUsernameDetails.website
            ? userUsernameDetails.website
            : "https://youtube.com/trtechlesson"}
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userState: state.UserReducer,
  postState: state.PostReducer,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserByUsername: (username) => dispatch(fetchUserByUsername(username)),
  fetchUser: (id) => dispatch(fetchUser(id)),
  userUpdate: (user) => dispatch(userUpdate(user)),
  fetchAllUser: () => dispatch(fetchAllUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);
