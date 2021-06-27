import React from "react";
import Header from "../Components/Header";
import exploreS from "../Images/explore-select.svg";
//component
import ProfilePost from "../Components/ProfilePost";

const Explore = () => {
  const arr = [2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 66, 6, 6, 3, 33, 3, 3, 3, 3, 3];
  var j = 1;

  return (
    <div>
      <Header imgExplore={exploreS} />

      <div className="explore-post-wrapper">
        <div className="profile-post-container">
          {arr.map((x, i) => {
            if (j === i) {
              j = j + 3;
              return <ProfilePost className={"profile-post-margin"} />;
            } else {
              return <ProfilePost />;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Explore;
