import React, { useState } from "react";
import { Link } from "react-router-dom";
import onClickOutside from "react-onclickoutside";
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
import Saved from "../Images/saved.svg";
import Settings from "../Images/settings.svg";
import Switch from "../Images/switch.svg";
import Profile from "../Images/profile.svg";

import { BiSearch } from "react-icons/bi";
import { MdClear } from "react-icons/md";

const Header = () => {
  const [searchtext, setSearchtext] = useState("");
  const [searchIcon, setSearchIcon] = useState("hidden");
  const [showProfileDropD, setShowProfileDropD] = useState(false);

  const profileDrowndown = () => {
    return (
      <div
        className="profile-drowndown-container"
        style={{
          width: "975px",
          // background: "#000",
          marginTop: "53px",
          marginLeft: "auto",
          marginRight: "auto",
          position: "absolute",
          left: 50,
          right: 50,
        }}
      >
        <div
          className="profile-drowndown"
          style={{
            width: "230px",
            height: "194px",
            marginLeft: "auto",
            backgroundColor: "#ffffff",
            // boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            boxShadow: "0 0 5px 1px rgb(0 0 0 / 10%)",
            borderRadius: "6px",
            position: "relative",
            // zIndex: "-4",
            // transition: "height .2s ease-in-out",
          }}
        >
          <div
            className="profile-drowndown-tip"
            style={{
              width: "13.8px",
              height: "13.8px",
              border: "none",
              backgroundColor: "#ffffff",
              // boxShadow: "0 0 5px 1px rgb(0 0 0 / 10%)",
              boxShadow: "-3px -3px 5px 0px rgb(0 0 0 / 10%)",
              transform: "rotate(45deg)",
              WebkitTransform: "rotate(45deg)",
              position: "absolute",
              right: "0",
              top: "-7px",
              right: "25px",
              // zIndex: "-1",
            }}
          ></div>
          <Link
            style={{ textDecoration: "none", color: "#262626" }}
            to="/profile"
            className="profile-drowndown-sec profile-drowndown-sec1"
          >
            <img style={{ marginRight: "12px" }} src={Profile} alt="profile" />
            Profile
          </Link>

          <Link
            style={{ textDecoration: "none", color: "#262626" }}
            to="/profile"
            className="profile-drowndown-sec"
          >
            <img style={{ marginRight: "12px" }} src={Saved} alt="saved" />{" "}
            Saved
          </Link>
          <Link
            style={{ textDecoration: "none", color: "#262626" }}
            to="/profile"
            className="profile-drowndown-sec"
          >
            <img
              style={{ marginRight: "12px" }}
              src={Settings}
              alt="settings"
            />{" "}
            Settings
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "#262626",
              marginBottom: "4px",
            }}
            to="/profile"
            className="profile-drowndown-sec"
          >
            <img style={{ marginRight: "12px" }} src={Switch} alt="switch" />{" "}
            Switch Accounts
          </Link>
          <hr />
          <Link
            style={{
              textDecoration: "none",
              color: "#262626",
              marginBottom: "4px",
            }}
            to="/profile"
            className="profile-drowndown-sec"
          >
            Log Out
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div>
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
            <div
              onClick={() => {
                setShowProfileDropD(!showProfileDropD);
              }}
              className="header-profile-img"
            ></div>
          </div>
        </div>
      </div>
      {showProfileDropD ? profileDrowndown() : <></>}
    </div>
  );
};

export default Header;
