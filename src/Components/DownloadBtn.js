import React from "react";

const DownloadBtn = () => {
  return (
    <div
      style={{
        width: "350px",
        height: "102px",
        margin: "20px 0",
      }}
    >
      <div
        style={{
          margin: "10px",
          textAlign: "center",
          fontSize: "14px",
        }}
      >
        Get the app.
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: "20px 0",
        }}
      >
        <img
          style={{ height: "40px", marginRight: "4px" }}
          src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
          alt="download on appstore"
        />
        <img
          style={{ height: "40px", marginLeft: "4px" }}
          src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
          alt="download on playstore"
        />
      </div>
    </div>
  );
};

export default DownloadBtn;
