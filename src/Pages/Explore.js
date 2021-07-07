import React, { useEffect, useState } from "react";
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

  const arr = [2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 66, 6, 6, 3, 33, 3, 3, 3, 3, 3];
  var j = 1;

  useEffect(() => {
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
        {/* <div
          style={{
            width: innerWidth < 975 ? innerWidth : "975px",
          }}
          className="profile-post-container"
        > */}
        {arr.map((x, i) => {
          if (j === i) {
            j = j + 3;
            return <ProfilePost className={"profile-post-margin"} />;
          } else {
            return <ProfilePost />;
          }
        })}
        {/* </div> */}
      </div>
      <Footer />
      <NavigaitionBottom ImgSearch={SearchS} />
    </div>
  );
};

export default Explore;
