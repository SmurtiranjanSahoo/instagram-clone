import React from "react";
import { API } from "../backend";
import UserImg from "../Images/profileimg.jpg";

const UserPhotoHelper = ({ user, className }) => {
  //   console.log(post);
  const imageurl = user ? `${API}/user/photo/${user._id}` : UserImg;
  return (
    <img
      className={className}
      src={imageurl}
      alt="photo"
      style={{ objectFit: "cover" }}
    />
  );
};

export default UserPhotoHelper;
