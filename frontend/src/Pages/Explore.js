import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

const Explore = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const arr = [2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 66, 6, 6, 3, 33, 3, 3, 3, 3, 3];
  var j = 1;

  const loadAllPost = () => {
    const { user, token } = isAutheticated();
    getAllPosts(user._id, token).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setPosts(data);
      }
    });
  };

  useEffect(() => {
    loadAllPost();

    const updateWindowDimensions = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

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

export default Explore;
