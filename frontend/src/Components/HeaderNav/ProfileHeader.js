import React from "react";

//images
import { ReactComponent as GearImg } from "../../Images/Header/gear.svg";
import { ReactComponent as PeopleImg } from "../../Images/Header/people.svg";

const ProfileHeader = ({ innerWidth, username }) => {
  return (
    <div className="header-wrapper-m">
      <div
        className="header-mobile-container"
        style={{
          width: innerWidth < 735 ? innerWidth : "735px",
          paddingTop: "0px",
        }}
      >
        <div style={{ height: "24px" }}>
          <GearImg />
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
          {username}
        </h1>
        <div style={{ height: "24px" }}>
          <PeopleImg />
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
