import React, { useEffect, useState, useRef } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
//components
import Header from "../Components/Header";
import HomeHeader from "../Components/HeaderNav/HomeHeader";
import Footer from "../Components/Footer";
import HomeRightside from "../Components/Home/HomeRightside";
import StoryContainer from "../Components/Home/StoryContainer";
import HomePostCard from "../Components/Home/HomePostCard";
import NavigaitionBottom from "../Components/NavigationBottom/NavigaitionBottom";
import PostOptionModal from "../Components/GenericComponents/PostOptionModal/PostOptionModal";
//images
import { ReactComponent as HomeS } from "../Images/home-select.svg";
import userImg from "../Images/profileimg.jpg";

const Home = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [option, setOption] = useState(false);

  const HomeRef = useRef("");

  const a = [1, 1, 1, 1, 1];

  useEffect(() => {
    const updateWindowDimensions = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>
      <Header ImgHome={HomeS} />
      <HomeHeader />
      <div ref={HomeRef} className="home-wrapper">
        <div className="home-left">
          <StoryContainer innerWidth={innerWidth} />
          <div>
            {a.map((i) => {
              return (
                <HomePostCard
                  innerWidth={innerWidth}
                  setOptionBtn={() => {
                    setOption(!option);
                    disableBodyScroll(HomeRef.current);
                  }}
                />
              );
            })}
          </div>
        </div>
        <HomeRightside />
      </div>
      {/* <Footer /> */}
      {option ? (
        <PostOptionModal
          setCloseModal={() => {
            setOption(!option);
            enableBodyScroll(HomeRef.current);
          }}
        />
      ) : (
        <></>
      )}
      <NavigaitionBottom ImgHome={HomeS} />
    </div>
  );
};

export default Home;
