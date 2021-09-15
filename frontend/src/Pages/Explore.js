import React, { useEffect, useState, useRef, useCallback } from "react";
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
import { ReactComponent as Loading } from "../Images/spinner.svg";
import LoadingGif from "../Images/loading.gif";

const Explore = ({ fetchAllPost, post }) => {
  const { isGettingAllPost, allPosts, totalPost } = post;
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [pageNum, setPageNum] = useState(1);
  const observer = useRef();
  var j = 1;

  const lastElementRef = useCallback(
    (node) => {
      if (isGettingAllPost) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPageNum((prevPageNum) => prevPageNum + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isGettingAllPost]
  );

  useEffect(() => {
    const updateWindowDimensions = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  useEffect(() => {
    if (totalPost > allPosts.length || totalPost == 0) {
      fetchAllPost(pageNum);
    }
  }, [pageNum]);

  if (allPosts.length === 0) {
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
              <Link ref={lastElementRef} key={i} to={"/p/" + post._id}>
                <ProfilePost post={post} className={"profile-post-margin"} />
              </Link>
            );
          } else {
            return (
              <Link ref={lastElementRef} key={i} to={"/p/" + post._id}>
                <ProfilePost post={post} />
              </Link>
            );
          }
        })}
      </div>
      {isGettingAllPost && <Loading width="50px" height="50px" />}
      <Footer />
      <NavigaitionBottom ImgSearch={SearchS} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  post: state.PostReducer,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllPost: (pageN) => dispatch(fetchAllPost(pageN)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Explore));
