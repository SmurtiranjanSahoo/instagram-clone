import React from "react";
//components
import Header from "../Components/Header";
import HomeRightside from "../Components/HomeRightside";
import StoryContainer from "../Components/StoryContainer";
import HomePostCard from "../Components/HomePostCard";
//images
import homeS from "../Images/home-select.svg";
import userImg from "../Images/profileimg.jpg";

const Home = () => {
  const a = [1, 1, 1, 1, 1];
  return (
    <div>
      <Header imgHome={homeS} />
      <div style={{ marginTop: "54px" }} className="home-wrapper">
        <div className="home-left">
          <StoryContainer />
          <ul style={{ listStyle: "none" }}>
            {a.map((i) => {
              return (
                <li>
                  <HomePostCard />
                </li>
              );
            })}
          </ul>
        </div>
        <HomeRightside />
      </div>
    </div>
  );
};

export default Home;
