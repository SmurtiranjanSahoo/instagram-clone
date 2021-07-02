import React from "react";
//components
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import HomeRightside from "../Components/Home/HomeRightside";
import StoryContainer from "../Components/Home/StoryContainer";
import HomePostCard from "../Components/Home/HomePostCard";
//images
import { ReactComponent as HomeS } from "../Images/home-select.svg";
import userImg from "../Images/profileimg.jpg";

const Home = () => {
  const a = [1, 1, 1, 1, 1];
  return (
    <div style={{ width: "100%" }}>
      <Header ImgHome={HomeS} />
      <div style={{ marginTop: "54px" }} className="home-wrapper">
        <div className="home-left">
          <StoryContainer />
          <div>
            {a.map((i) => {
              return <HomePostCard />;
            })}
          </div>
        </div>
        <HomeRightside />
      </div>
      {/* <Footer /> */}
      {/* temp message */}
      <div className="mobile-message">
        <h3>
          Mobile Instagram Clone is under development, <br /> try desktop site.
        </h3>
      </div>
    </div>
  );
};

export default Home;
