import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { isAutheticated } from "../../auth/auth";

import AccountSuggetion from "./AccountSuggetion";
import userImg from "../../Images/profileimg.jpg";
import UserPhotoHelper from "../../helper/UserPhotoHelper";

const HomeRightside = ({ userState }) => {
  const { userDetails, allUsers } = userState;
  const { user } = isAutheticated();

  return (
    <div className="home-right">
      <div className="home-right-user-profile">
        <Link to={`/${userDetails.username}`}>
          {userDetails?.photo ? (
            <UserPhotoHelper user={userDetails} />
          ) : (
            <img src={userImg} alt="User image" />
          )}
        </Link>
        <Link
          style={{
            textDecoration: "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          to={`/${userDetails.username}`}
        >
          <p style={{ fontSize: "14px", fontWeight: "600", color: "#262626" }}>
            {userDetails.name}
          </p>
          <p style={{ fontSize: "14px", color: "#8e8e8e" }}>
            {userDetails.username}
          </p>
        </Link>
        <h5
          style={{
            fontSize: "12px",
            color: "#0095f6",
            marginLeft: "auto",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          Switch
        </h5>
      </div>
      <div className="home-right-suggestion">
        <div className="home-right-suggestion-div">
          <p
            style={{
              fontSize: "14px",
              color: "#8e8e8e",
              fontWeight: "600",
            }}
          >
            Suggestions For You
          </p>
          <p style={{ fontSize: "12px", fontWeight: "600" }}>See All</p>
        </div>
        <div style={{ padding: "8px 0" }}>
          {allUsers
            .filter((data) => data._id !== user._id)
            .map((user, i) => {
              return <AccountSuggetion key={i} user={user} />;
            })}
        </div>
      </div>
      <div className="home-right-copyright">
        <ul>
          <a href="#">About</a>
          <a href="#">Help</a>
          <a href="#">Press</a>
          <a href="#">API</a>
          <a href="#">Jobs</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Locations</a>
          <a href="#"> Top Accounts</a>
          <a href="#">Hashtags</a>
          <a href="#">Terms</a>
          <span>Language</span>
        </ul>
        <div>© 2021 INSTAGRAM FROM FACEBOOK</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userState: state.UserReducer,
});

export default connect(mapStateToProps)(HomeRightside);
