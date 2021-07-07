import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as BackImg } from "../../Images/Header/back.svg";

const PostHeader = ({ innerWidth }) => {
  return (
    <div className="header-wrapper-m">
      <div
        className="header-mobile-container"
        style={{
          width: innerWidth < 735 ? innerWidth : "735px",
          paddingTop: "0px",
        }}
      >
        <div onClick={() => window.history.back()} style={{ height: "24px" }}>
          <BackImg style={{ transform: "rotate(-90deg)" }} />
        </div>
        <h1
          style={{
            fontSize: "16px",
            color: "#262626",
            textAlign: "center",
            fontWeight: "500",
            lineHeight: "18px",
          }}
        >
          Post
        </h1>
        <div style={{ height: "24px", width: "24px" }}>
          {/* <NewMsgImg /> */}
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
