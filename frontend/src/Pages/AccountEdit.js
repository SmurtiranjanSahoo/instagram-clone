import React from "react";
import Header from "../Components/Header";
import UserImg from "../Images/profileimg.jpg";

const AccountEdit = () => {
  return (
    <div>
      <Header />
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
          <form>
            <div className="edit-profile-img-wrapper">
              <div className="edit-profile-img">
                <img src={UserImg} alt="user img" />
              </div>
              <div className="edit-img-text">
                <h1>posifo1455</h1>
                <p>Change Profile Photo</p>
              </div>
            </div>
            <div className="editname-wrapper">
              <div className="editname-label">Name</div>
              <div className="editname">
                <input type="text" />
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
                <input type="text" />
                <p>
                  In most cases, you'll be able to change your username back to
                  posifo1455 for another 14 days.{" "}
                </p>
              </div>
            </div>
            <div className="edit-website-wrapper">
              <div className="edit-website-label">Website</div>
              <div className="edit-website">
                <input type="text" />
              </div>
            </div>
            <div className="edit-bio-wrapper">
              <div className="edit-bio-label">Bio</div>
              <div className="edit-bio">
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountEdit;
