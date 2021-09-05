import React, { useState, useRef } from "react";
import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";

import { isAutheticated } from "../../auth/auth";
//images
import { ReactComponent as GearImg } from "../../Images/Header/gear.svg";
import { ReactComponent as PeopleImg } from "../../Images/Header/people.svg";
import { ReactComponent as BackImg } from "../../Images/Header/back.svg";
import LogoutModal from "../LogoutModal/LogoutModal";

const ProfileHeader = ({ innerWidth, username }) => {
  const { user } = isAutheticated();
  const [isModal, setIsModal] = useState(false);
  const ref = useRef();

  return (
    <div ref={ref} className="header-wrapper-m">
      <div
        className="header-mobile-container"
        style={{
          width: innerWidth < 735 ? innerWidth : "735px",
          paddingTop: "0px",
        }}
      >
        <div style={{ height: "24px" }}>
          {user.username === username ? (
            <div
              onClick={() => {
                setIsModal(true);
                disableBodyScroll(ref);
              }}
            >
              <GearImg />
            </div>
          ) : (
            <div
              onClick={() => {
                window.history.back();
              }}
            >
              <BackImg style={{ transform: "rotate(-90deg)" }} />
            </div>
          )}
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
        {user.username === username ? (
          <div style={{ height: "24px" }}>
            <PeopleImg />
          </div>
        ) : (
          <span style={{ width: "24px" }}></span>
        )}
      </div>
      {isModal && (
        <LogoutModal
          setCloseModal={() => {
            setIsModal(false);
            enableBodyScroll(ref);
          }}
        />
      )}
    </div>
  );
};

export default ProfileHeader;
