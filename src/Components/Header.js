import React, { useState } from "react";

// svg
import homeS from "../Images/home-select.svg";
import home from "../Images/home.svg";
import message from "../Images/message.svg";
import messageS from "../Images/message-select.svg";
import explore from "../Images/explore.svg";
import exploreS from "../Images/explore-select.svg";
import like from "../Images/like.svg";
import likeS from "../Images/like-select.svg";
import InstaLogo from "../Images/Instagram-written-logo.svg";

import { BiSearch } from "react-icons/bi";

const Header = () => {
  const [searchtext, setSearchtext] = useState("Search");

  return (
    <div className="header-wrapper">
      <div className="header-container">
        <div className="header-logo">
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
            style={{ height: "29px", width: "103px" }}
            alt="home icon"
          />
        </div>
        <div className="header-search">
          <span className="blocking-span">
            <input
              type="search"
              value={searchtext}
              onChange={(e) => {
                setSearchtext(e.target.value);
              }}
              // onBlur={searchtext ? (value = "") : searchtext}
            />
            <span className="floating-searchicon">
              <BiSearch
                style={{
                  margin: "4px 5px 0 -10px",
                  height: "13px",
                  width: "13px",
                }}
              />
            </span>
            <span
              style={{ fontSize: "14px", marginLeft: "7px" }}
              className="floating-searchlabel"
            >
              {searchtext ? searchtext : "Search"}
            </span>
          </span>
        </div>
        <div className="header-icon-container">
          <img src={homeS} alt="home icon" />
          <img src={message} alt="message icon" />
          <img src={explore} alt="explore icon" />
          <img src={like} alt="like icon" />
          <div className="header-profile-img"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
