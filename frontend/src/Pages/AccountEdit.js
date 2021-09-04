import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { userUpdate, fetchUser } from "../actions/userActions";
import { isAutheticated } from "../auth/auth";
//components
import Header from "../Components/Header";
import ProfileHeader from "../Components/HeaderNav/ProfileHeader";
import UserImg from "../Images/profileimg.jpg";

const AccountEdit = ({ userUpdate, fetchUser, userState }) => {
  const { userDetails } = userState;
  const { user } = isAutheticated();

  const initialState = {
    name: "",
    username: "",
    website: "",
    bio: "",
  };

  const [values, setValues] = useState(initialState);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const { name, username, website, bio } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    userUpdate(values);
  };

  useEffect(() => {
    fetchUser(user._id);
    setValues({
      name: userDetails.name,
      username: userDetails.username,
      website: userDetails?.website,
      bio: userDetails?.bio,
    });
    const updateWindowDimensions = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  useEffect(() => {
    setValues({
      name: userDetails.name,
      username: userDetails.username,
      website: userDetails?.website,
      bio: userDetails?.bio,
    });
  }, [userDetails]);

  return (
    <div>
      <Header />
      <ProfileHeader username="Edit Profile" innerWidth={innerWidth} />

      <div className="account-edit-wrapper">
        <div className="accout-editnav">
          <h2>Edit Profile</h2>
          <h2>Change Password</h2>
          <h2>Apps and Website</h2>
          <h2>Email and SMS</h2>
          <h2>Push Notification</h2>
          <h2>Manage Contacts</h2>
          <h2>Privacy and Security</h2>
          <h2>Login Activity</h2>
          <h2>Email from Instagram</h2>
          <h2>Switch to Professional Account</h2>
        </div>
        <div className="account-edit">
          <form onSubmit={handleSubmit} className="account-edit-form">
            <div className="edit-profile-img-wrapper">
              <div className="edit-profile-img">
                <img src={UserImg} alt="user img" />
              </div>
              <div className="edit-img-text">
                <h1>{userDetails.username}</h1>
                <p>Change Profile Photo</p>
              </div>
            </div>
            <div className="editname-wrapper">
              <div className="editname-label">Name</div>
              <div className="editname">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setValues({ ...values, name: e.target.value });
                  }}
                />
                <p>
                  Help people discover your account by using the name you're
                  known by: either your full name, nickname, or business name.
                </p>
                <p>You can only change your name twice within 14 days.</p>
              </div>
            </div>
            <div className="edit-username-wrapper">
              <div className="edit-username-label">Username</div>
              <div className="edit-username">
                <input
                  value={username}
                  type="text"
                  onChange={(e) => {
                    setValues({ ...values, username: e.target.value });
                  }}
                />
                <p>
                  In most cases, you'll be able to change your username back to
                  posifo1455 for another 14 days.{" "}
                </p>
              </div>
            </div>
            <div className="edit-website-wrapper">
              <div className="edit-website-label">Website</div>
              <div className="edit-website">
                <input
                  type="text"
                  value={website}
                  onChange={(e) => {
                    setValues({ ...values, website: e.target.value });
                    console.log(website);
                  }}
                />
              </div>
            </div>
            <div className="edit-bio-wrapper">
              <div className="edit-bio-label">Bio</div>
              <div className="edit-bio">
                <textarea
                  value={bio}
                  cols="30"
                  rows="10"
                  onChange={(e) => {
                    setValues({ ...values, bio: e.target.value });
                  }}
                ></textarea>
              </div>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userState: state.UserReducer,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  userUpdate: (user) => dispatch(userUpdate(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountEdit);
