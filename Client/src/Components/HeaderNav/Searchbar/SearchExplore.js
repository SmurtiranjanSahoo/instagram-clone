import React, { useState, useRef, useEffect } from "react";
import "./Searchbar.css";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { MdClear } from "react-icons/md";

const SearchExplore = ({ innerWidth }) => {
  const [searchtext, setSearchtext] = useState("");
  const [searchIcon, setSearchIcon] = useState("hidden");

  const inputRef = useRef("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div
      className="header-wrapper-m"
      style={{
        padding: "0 16px",
      }}
    >
      <div
        className="header-search-m"
        style={{
          width: innerWidth < 735 ? innerWidth - 32 : "703px",
        }}
      >
        <span className="blocking-span-m">
          <input
            ref={inputRef}
            style={{
              width: innerWidth < 735 ? innerWidth - 86 : "649px",
            }}
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
            className="search-clear-m"
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
          <span className="floating-searchicon-m">
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
            className="floating-searchlabel-m"
          >
            {searchtext ? searchtext : "Search"}
          </span>
        </span>
        <Link to="/explore" className="cancel-btn">
          Cancel
        </Link>
      </div>
    </div>
  );
};

export default SearchExplore;
