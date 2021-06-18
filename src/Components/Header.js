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
import { MdClear } from "react-icons/md";

const Header = () => {
  const [searchtext, setSearchtext] = useState("");
  const [searchIcon, setSearchIcon] = useState("hidden");

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
              onBlur={(e) => {
                e.target.value = "";
              }}
              onFocus={(e) => {
                e.target.value = searchtext;
                setSearchIcon("visible");
              }}
              onBlurCapture={() => {
                setSearchIcon("hidden");
              }}
            />
            <span
              className="search-clear"
              style={{
                position: "absolute",
                margin: "7px 0 0 -22px",
              }}
              onClick={() => {
                setSearchtext("");
              }}
            >
              <div
                style={{
                  width: "14px",
                  height: "14px",
                  backgroundColor: "#c7c7c7",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  visibility: searchIcon,
                }}
              >
                <MdClear
                  style={{
                    color: "#ffffff",
                    width: "12px",
                    height: "12px",
                  }}
                />
              </div>
            </span>
            <span className="floating-searchicon">
              <BiSearch
                style={{
                  margin: "4px 5px 0 -3px",
                  height: "13px",
                  width: "13px",
                }}
              />
            </span>
            <span
              style={{ fontSize: "14px", marginLeft: "13.5px" }}
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
