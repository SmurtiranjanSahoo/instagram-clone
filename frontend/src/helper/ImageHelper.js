import React from "react";
import { API } from "../backend";

const ImageHelper = ({ post }) => {
  //   console.log(post);
  const imageurl = post
    ? `${API}/post/photo/${post._id}`
    : `https://images.pexels.com/photos/7645829/pexels-photo-7645829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`;
  return (
    <div>
      <img
        src={imageurl}
        alt="photo"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
      />
    </div>
  );
};

export default ImageHelper;
