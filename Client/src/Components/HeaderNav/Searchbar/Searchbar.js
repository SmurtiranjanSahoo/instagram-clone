import React, { useState } from "react";
import "./Searchbar.css";
import { Link } from "react-router-dom";

import { BiSearch } from "react-icons/bi";
import { MdClear } from "react-icons/md";

const Searchbar = ({ innerWidth }) => {
  const [searchtext, setSearchtext] = useState("");
  const [searchIcon, setSearchIcon] = useState("hidden");

  return (
    <div className="header-wrapper-m">
      <div
        className="header-search-m"
        style={{
          width: innerWidth < 735 ? innerWidth : "735px",
        }}
      >
        <Link to="/explore/search" className="blocking-span-m">
          <input
            style={{
              width: innerWidth < 735 ? innerWidth - 32 : "703px",
            }}
          />

          <span className="floating-searchicon-mx">
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
            className="floating-searchlabel-mx"
          >
            {searchtext ? searchtext : "Search"}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Searchbar;
