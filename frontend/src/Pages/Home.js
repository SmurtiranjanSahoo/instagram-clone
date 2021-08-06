import React, { useEffect, useState, useRef } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { getUser, isAutheticated, getAllUsers } from "../auth/auth";
import { getAllPosts } from "../helper/apicalls";

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
import { ReactComponent as Loading } from "../Images/spinner.svg";
import userImg from "../Images/profileimg.jpg";

const Home = () => {
  const { user, token } = isAutheticated();
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [currentUser, setCurrentUser] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const HomeRef = useRef("");

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

  const loadAllPosts = async () => {
    setLoading(true);
    await getUser(token, user._id).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCurrentUser(data);
        // console.log(data);
      }
      getAllPosts(user._id, token).then((data2) => {
        if (data2.error) {
          console.log(data2.error);
        } else {
          data.followings?.map((user) => {
            setPosts(data2.filter((data) => data.postAuthor._id === user));
          });
        }
      });
      setLoading(false);
    });
  };

  useEffect(() => {
    getCurrentUser(token, user._id);
    loadAllUsers(token, user._id);
    loadAllPosts();
    const updateWindowDimensions = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  if (loading) {
    return (
      <div>
        {innerWidth < 735 ? <HomeHeader /> : <Header ImgHome={HomeS} />}
        <div
          style={{
            height: "100vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loading width="50px" height="50px" />
        </div>
      </div>
    );
  }

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
              {posts.map((post) => {
                return (
                  <HomePostCard
                    post={post}
                    innerWidth={innerWidth}
                    HomeRef={HomeRef}
                  />
                );
              })}
            </div>
          </div>
          <HomeRightside />
        </div>
        {/* <Footer /> */}

        <NavigaitionBottom ImgHome={HomeS} />
      </div>
    );
  }
};

export default Home;
