import React from "react";
import { Link } from "react-router-dom";

//images
import { ReactComponent as BackImg } from "../../Images/Header/back.svg";

const CreatePostHeader = ({ innerWidth }) => {
  return (
    <div className="header-wrapper-m">
      <div
        className="header-mobile-container"
        style={{
          width: innerWidth < 735 ? innerWidth : "735px",
          paddingTop: "0px",
        }}
      >
        <Link to="/" style={{ height: "24px", marginRight: "8px" }}>
          <BackImg style={{ transform: "rotate(-90deg)" }} />
        </Link>
        <h1
          style={{
            fontSize: "16px",
            color: "#262626",
            textAlign: "center",
            fontWeight: "500",
            lineHeight: "18px",
          }}
        >
          New Post
        </h1>
        <div style={{ height: "24px", color: "#0095ef", fontWeight: "600" }}>
          Share
        </div>
      </div>
    </div>
  );
};

export default CreatePostHeader;
