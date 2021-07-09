import React from "react";

const ActivityHeader = ({ innerWidth }) => {
  return (
    <div className="header-wrapper-m">
      <div
        className="header-mobile-container"
        style={{
          width: innerWidth < 735 ? innerWidth : "735px",
          paddingTop: "0px",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            fontSize: "16px",
            color: "#262626",
            textAlign: "center",
            fontWeight: "500",
            lineHeight: "18px",
          }}
        >
          Activity
        </h1>
      </div>
    </div>
  );
};

export default ActivityHeader;
