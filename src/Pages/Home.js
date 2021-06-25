import React from "react";
//components
import Header from "../Components/Header";
import HomeRightside from "../Components/HomeRightside";
import StoryContainer from "../Components/StoryContainer";
//images
import homeS from "../Images/home-select.svg";
import userImg from "../Images/profileimg.jpg";

const Home = () => {
  return (
    <div>
      <Header imgHome={homeS} />
      <div style={{ marginTop: "54px" }} className="home-wrapper">
        <div className="home-left">
          <StoryContainer />
        </div>
        <HomeRightside />
      </div>
    </div>
  );
};

export default Home;
