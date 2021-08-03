import React, { useEffect, useState, useRef } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { getUser, isAutheticated, getAllUsers } from "../auth/auth";

//components
import Header from "../Components/Header";
import HomeHeader from "../Components/HeaderNav/HomeHeader";
import Footer from "../Components/Footer";
import HomeRightside from "../Components/Home/HomeRightside";
import StoryContainer from "../Components/Home/StoryContainer";
import HomePostCard from "../Components/Home/HomePostCard";
import NavigaitionBottom from "../Components/NavigationBottom/NavigaitionBottom";
import PostOptionModal from "../Components/GenericComponents/PostOptionModal/PostOptionModal";
import UserAccount from "../Components/Home/UserAccount";
//images
import { ReactComponent as HomeS } from "../Images/home-select.svg";
import userImg from "../Images/profileimg.jpg";

const Home = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [option, setOption] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  const HomeRef = useRef("");
  const { user, token } = isAutheticated();
  const a = [1, 1, 1, 1, 1];

  const getCurrentUser = async (token, userId) => {
    await getUser(token, userId).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCurrentUser(data);
        // console.log(data);
      }
    });
  };

  const loadAllUsers = async (token, userId) => {
    await getAllUsers(token, userId).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setAllUsers(data);
        // console.log(data);
      }
    });
  };

  useEffect(() => {
    getCurrentUser(token, user._id);
    loadAllUsers(token, user._id);
    const updateWindowDimensions = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  if (currentUser.followings?.length === 0) {
    return (
      <div style={{ width: "100%", overflowX: "hidden" }}>
        <Header ImgHome={HomeS} />
        <HomeHeader />
        <div
          style={{
            marginTop: "54px",
            width: innerWidth < 600 ? innerWidth : "600px",
            marginLeft: "auto",
            marginRight: "auto",
            paddingTop: "30px",
          }}
        >
          <div
            style={{
              fontWeight: "600",
              color: "#262626",
              marginLeft: innerWidth < 600 ? "25px" : "0",
            }}
          >
            Suggestions For You
          </div>
          <div
            style={{
              marginTop: "16px",
              padding: "8px 0",
              width: "100%",
              border: innerWidth < 600 ? "none" : "1px solid #dbdbdb",
              borderRadius: "3px",
            }}
            className="account-suggestion-container"
          >
            {allUsers.map((user, i) => {
              return <UserAccount key={i} user={user} />;
            })}
          </div>
        </div>

        <NavigaitionBottom ImgHome={HomeS} />
      </div>
    );
  } else {
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
  }
};

export default Home;
