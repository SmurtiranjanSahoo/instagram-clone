import React from "react";
import "./UserAccount.css";
import { Link } from "react-router-dom";
import UserPhotoHelper from "../../../helper/UserPhotoHelper";
import UserImg from "../../../Images/profileimg.jpg";

const UserAccount = ({ userImg = UserImg, user }) => {
  return (
    <div className="useraccount-wrapper" style={{}}>
      <Link to={`/${user.username}`}>
        {user?.photo ? (
          <UserPhotoHelper user={user} className="useraccount-img" />
        ) : (
          <img className="useraccount-img" src={userImg} alt="user image" />
        )}
      </Link>
      <Link to={`/${user.username}`} className="useraccount-link">
        <p className="useraccount-username">{user.username}</p>
        <p className="useraccount-name">{user.name}</p>
        <p className="useraccount-label">New Account</p>
      </Link>
      <Link to={`/${user.username}`} className="useraccount-button">
        Follow
      </Link>
    </div>
  );
};

export default UserAccount;
