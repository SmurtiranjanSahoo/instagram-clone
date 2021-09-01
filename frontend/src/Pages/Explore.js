import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchAllPost } from "../actions/postActions";
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

const Explore = ({ fetchAllPost, post }) => {
  const { isGettingAllPost, allPosts } = post;
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  var j = 1;

  useEffect(() => {
    fetchAllPost();

    const updateWindowDimensions = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  if (isGettingAllPost) {
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
        {allPosts.map((post, i) => {
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

const mapStateToProps = (state) => ({
  post: state.PostReducer,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllPost: () => dispatch(fetchAllPost()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Explore));
