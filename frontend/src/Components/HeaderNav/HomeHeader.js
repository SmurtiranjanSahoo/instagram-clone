import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setCreateStoryDetails } from "../../actions/storyActions";
import { isAutheticated } from "../../auth/auth";
//image
import { ReactComponent as MessageImg } from "../../Images/message.svg";
import { ReactComponent as CameraImg } from "../../Images/Header/camera.svg";

const HomeHeader = ({ setCreateStoryDetails, createStoryDetails }) => {
  const { user } = isAutheticated();
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  if (createStoryDetails.photo) {
    return <Redirect to="/create/story" />;
  }

  return (
    <div className="header-wrapper-m">
      <div
        className="header-mobile-container"
        style={{
          width: innerWidth < 735 ? innerWidth : "735px",
        }}
      >
        {/* <label for="image" className="header-icon-container-img">
          <input
            type="file"
            name="image"
            id="image"
            style={{
              display: "none",
            }}
            multiple="false"
            onChange={(e) => {
              setCreateStoryDetails({
                storyAuthor: user._id,
                photo: e.target.files[0],
              });
            }}
          />
        </label> */}
        <CameraImg />
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

const mapStateToProps = (state) => ({
  createStoryDetails: state.StoryReducer.createStoryDetails,
});

const mapDispatchToProps = (dispatch) => ({
  setCreateStoryDetails: (story) => dispatch(setCreateStoryDetails(story)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
