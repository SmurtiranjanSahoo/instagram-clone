import React, { useEffect, useState } from "react";
import SearchExplore from "../Components/HeaderNav/Searchbar/SearchExplore";
import NavigationBottom from "../Components/NavigationBottom/NavigaitionBottom";
import SearchResult from "../Components/Explore/SearchResult";
import { ReactComponent as SearchS } from "../Images/Header/searchS.svg";

const ExploreSearch = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <div>
      <SearchExplore
        setSearchResult={setSearchResult}
        innerWidth={innerWidth}
      />
      <NavigationBottom ImgSearch={SearchS} />
      <div style={{ marginTop: "50px", height: "100%" }}>
        {searchResult.map((result, i) => (
          <SearchResult user={result} />
        ))}
      </div>
    </div>
  );
};

export default ExploreSearch;
