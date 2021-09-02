import React, { useState, useEffect, Fragment } from "react";
import { IoHeartSharp } from "react-icons/all";
import { RiChat3Fill } from "react-icons/ri";
import ImageHelper from "../../helper/ImageHelper";
const ProfilePost = ({ className = "profile-post", post }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <Fragment>
      <div
        className={className}
        style={{
          width:
            width < 975
              ? width <= 735
                ? width <= 505
                  ? 243.66 - (735 - width) * 0.3335
                  : 243.66 - (735 - width) * 0.334
                : 293 - (975 - width) * 0.334
              : "293px",
          height:
            width < 975
              ? width <= 735
                ? width <= 505
                  ? 243.66 - (735 - width) * 0.3335
                  : 243.66 - (735 - width) * 0.334
                : 293 - (975 - width) * 0.334
              : "293px",
        }}
      >
        <ImageHelper post={post} />
        <div className="profile-post-likecount">
          <span style={{ marginRight: "30px" }}>
            <IoHeartSharp
              style={{ width: "21px", height: "21px", opacity: "1" }}
            />
            <span style={{ marginLeft: "7px" }}> {post.likes?.length} </span>
          </span>
          <span>
            <RiChat3Fill
              style={{ width: "21px", height: "21px", transform: "scaleX(-1)" }}
            />
            <span style={{ marginLeft: "7px" }}> {post.comments?.length} </span>
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default ProfilePost;
