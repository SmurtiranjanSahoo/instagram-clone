import React from "react";
import { API } from "../backend";

const ImageHelper = ({ post }) => {
  //   console.log(post);
  const imageurl = post
    ? `${API}/post/photo/${post._id}`
    : `https://images.pexels.com/photos/7645829/pexels-photo-7645829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`;
  return (
    <img
      src={imageurl}
      alt="photo"
      style={{ height: "100%", width: "100%", objectFit: "cover" }}
    />
  );
};

export default ImageHelper;
