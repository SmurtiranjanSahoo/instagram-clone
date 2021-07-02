import React, { useState, useEffect } from "react";
import { IoHeartSharp } from "react-icons/all";
import { RiChat3Fill } from "react-icons/ri";

const ProfilePost = ({
  className = "profile-post",
  likecount = "277",
  commentcount = "80",
}) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <>
      <div
        className={className}
        style={{
          width: width < 975 ? 293 - (975 - width) * 0.334 : "293px",
          height: width < 975 ? 293 - (975 - width) * 0.334 : "293px",
        }}
      >
        <div className="profile-post-likecount">
          <span style={{ marginRight: "30px" }}>
            <IoHeartSharp
              style={{ width: "21px", height: "21px", opacity: "1" }}
            />
            <span style={{ marginLeft: "7px" }}> {likecount} </span>
          </span>
          <span>
            <RiChat3Fill
              style={{ width: "21px", height: "21px", transform: "scaleX(-1)" }}
            />
            <span style={{ marginLeft: "7px" }}> {commentcount} </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default ProfilePost;
