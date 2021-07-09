import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProfileNavM.css";
//svg
import { ReactComponent as Posts } from "../../../Images/posts-grey.svg";
import { ReactComponent as Igtv } from "../../../Images/igtv-grey.svg";
import { ReactComponent as Saved } from "../../../Images/savedM.svg";
import { ReactComponent as Tagged } from "../../../Images/tagged-grey.svg";

const ProfileNavM = ({
  PostsImg = Posts,
  IgtvImg = Igtv,
  SavedImg = Saved,
  TaggedImg = Tagged,
  SelectPost,
  SelectIgtv,
  SelectSaved,
  SelectTagged,
  innerWidth,
}) => {
  return (
    <div
      className="nav-container"
      style={{
        width: innerWidth,
      }}
    >
      <Link
        to="/profile"
        style={{
          textDecoration: "none",
          width: 183.75 - (735 - innerWidth) * 0.25,
        }}
        className="nav-sec"
      >
        <PostsImg style={{ width: "24px", height: "24px", fill: SelectPost }} />
      </Link>
      <Link
        to="/profile/channel"
        style={{
          textDecoration: "none",
          width: 183.75 - (735 - innerWidth) * 0.25,
        }}
        className="nav-sec"
      >
        <IgtvImg style={{ width: "24px", height: "24px", fill: SelectIgtv }} />
      </Link>
      <Link
        to="/profile/saved"
        style={{
          textDecoration: "none",
          width: 183.75 - (735 - innerWidth) * 0.25,
        }}
        className="nav-sec"
      >
        <SavedImg
          style={{ width: "24px", height: "24px", fill: SelectSaved }}
        />
      </Link>
      <Link
        to="/profile/tagged"
        style={{
          textDecoration: "none",
          width: 183.75 - (735 - innerWidth) * 0.25,
        }}
        className="nav-sec"
      >
        <TaggedImg
          style={{ width: "24px", height: "24px", fill: SelectTagged }}
        />
      </Link>
    </div>
  );
};

export default ProfileNavM;
