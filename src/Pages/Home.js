import React from "react";
//components
import Header from "../Components/Header";
import HomeHeader from "../Components/HeaderNav/HomeHeader";
import Footer from "../Components/Footer";
import HomeRightside from "../Components/Home/HomeRightside";
import StoryContainer from "../Components/Home/StoryContainer";
import HomePostCard from "../Components/Home/HomePostCard";
import NavigaitionBottom from "../Components/NavigationBottom/NavigaitionBottom";
//images
import { ReactComponent as HomeS } from "../Images/home-select.svg";
import userImg from "../Images/profileimg.jpg";

const Home = () => {
  const a = [1, 1, 1, 1, 1];
  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>
      <Header ImgHome={HomeS} />
      <HomeHeader />
      <div className="home-wrapper">
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
      <NavigaitionBottom ImgHome={HomeS} />
    </div>
  );
};

export default Home;
