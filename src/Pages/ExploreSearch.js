import React, { useEffect, useState } from "react";
import SearchExplore from "../Components/HeaderNav/Searchbar/SearchExplore";

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
    </div>
  );
};

export default ExploreSearch;
