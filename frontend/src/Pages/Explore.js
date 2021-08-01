import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { getAllPosts } from "../helper/apicalls";
import { isAutheticated } from "../auth/auth";

//component
import Header from "../Components/Header";
import Searchbar from "../Components/HeaderNav/Searchbar/Searchbar";
import Footer from "../Components/Footer";
import ProfilePost from "../Components/Profile/ProfilePost";
import NavigaitionBottom from "../Components/NavigationBottom/NavigaitionBottom";

//images
import { ReactComponent as ExploreS } from "../Images/explore-select.svg";
import { ReactComponent as SearchS } from "../Images/Header/searchS.svg";
import LoadingGif from "../Images/loading.gif";

const Explore = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  var j = 1;

  const loadAllPost = async () => {
    const { user, token } = isAutheticated();
    setLoading(true);
    await getAllPosts(user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setPosts(data);
      }
    });
    setLoading(false);
  };

  useEffect(() => {
    loadAllPost();

    const updateWindowDimensions = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  if (loading) {
    return (
      <div>
        {innerWidth < 735 ? (
          <Searchbar innerWidth={innerWidth} />
        ) : (
          <Header ImgExplore={ExploreS} />
        )}
        <div
          style={{
            height: "100vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img width="50px" height="50px" src={LoadingGif} alt="loading" />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header ImgExplore={ExploreS} />
      <Searchbar innerWidth={innerWidth} />
      <div
        className="explore-post-wrapper"
        style={{
          width: innerWidth < 975 ? innerWidth : "975px",
        }}
      >
        {posts.map((post, i) => {
          if (j === i) {
            j = j + 3;
            return (
              <Link key={i} to={"/p/" + post._id}>
                <ProfilePost post={post} className={"profile-post-margin"} />
              </Link>
            );
          } else {
            return (
              <Link key={i} to={"/p/" + post._id}>
                <ProfilePost post={post} />
              </Link>
            );
          }
        })}
      </div>
      <Footer />
      <NavigaitionBottom ImgSearch={SearchS} />
    </div>
  );
};

export default withRouter(Explore);
