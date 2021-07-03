import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//image
import { ReactComponent as MessageImg } from "../../Images/message.svg";
import { ReactComponent as CameraImg } from "../../Images/Header/camera.svg";

const HomeHeader = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <div className="header-wrapper">
      <div
        className="header-mobile-container"
        style={{
          width: innerWidth < 735 ? innerWidth : "735px",
        }}
      >
        <Link to="/" className="header-icon-container-img">
          <CameraImg />
        </Link>
        <div className="header-logo">
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
            style={{ height: "29px", width: "103px" }}
            alt="home icon"
          />
        </div>
        <Link to="/direct/inbox" className="header-icon-container-img">
          <MessageImg style={{ width: "24px", height: "24px" }} />
        </Link>
      </div>
    </div>
  );
};

export default HomeHeader;
