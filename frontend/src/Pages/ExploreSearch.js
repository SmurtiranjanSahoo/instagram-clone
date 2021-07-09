import React, { useEffect, useState } from "react";
import SearchExplore from "../Components/HeaderNav/Searchbar/SearchExplore";
import NavigationBottom from "../Components/NavigationBottom/NavigaitionBottom";
import { ReactComponent as SearchS } from "../Images/Header/searchS.svg";

const ExploreSearch = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <div>
      <SearchExplore innerWidth={innerWidth} />
      <NavigationBottom ImgSearch={SearchS} />
    </div>
  );
};

export default ExploreSearch;
