import React, { useState, useEffect } from "react";
import "./ProfileNavM.css";
import { Link, useParams } from "react-router-dom";
import { isAutheticated } from "../../../auth/auth";
//svg
import { ReactComponent as Posts } from "../../../Images/posts-grey.svg";
import { ReactComponent as Igtv } from "../../../Images/igtv-grey.svg";
import { ReactComponent as Saved } from "../../../Images/savedM.svg";
import { BsChevronExpand } from "react-icons/bs";

const ProfileNavM = ({
  PostsImg = Posts,
  IgtvImg = Igtv,
  SavedImg = Saved,
  SelectPost,
  SelectIgtv,
  SelectSaved,
  SelectTagged,
  innerWidth,
  currentUserId,
}) => {
  const { user } = isAutheticated();
  const { profileid } = useParams();

  return (
    <div
      className="nav-container"
      style={{
        width: innerWidth,
      }}
    >
      <Link
        to={`/${profileid}`}
        style={{
          textDecoration: "none",
          width: 183.75 - (735 - innerWidth) * 0.25,
        }}
        className="nav-sec"
      >
        <PostsImg style={{ width: "24px", height: "24px", fill: SelectPost }} />
      </Link>
      <Link
        to={`/${profileid}/feed`}
        style={{
          textDecoration: "none",
          width: 183.75 - (735 - innerWidth) * 0.25,
        }}
        className="nav-sec"
      >
        <BsChevronExpand
          style={{
            width: "30px",
            height: "30px",
            fill: SelectTagged ? SelectTagged : "#8e8e8e",
          }}
        />
      </Link>

      <Link
        to={`/${profileid}/channel`}
        style={{
          textDecoration: "none",
          width: 183.75 - (735 - innerWidth) * 0.25,
        }}
        className="nav-sec"
      >
        <IgtvImg style={{ width: "24px", height: "24px", fill: SelectIgtv }} />
      </Link>

      {currentUserId === user._id && (
        <Link
          to={`/${profileid}/saved`}
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
      )}
    </div>
  );
};

export default ProfileNavM;
