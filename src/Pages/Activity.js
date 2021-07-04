import React, { useEffect, useState } from "react";
import ActivityHeader from "../Components/HeaderNav/ActivityHeader";
import NavigaitionBottom from "../Components/NavigationBottom/NavigaitionBottom";

const Activity = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>
      <ActivityHeader innerWidth={innerWidth} />
      <div className="home-wrapper"></div>
      <NavigaitionBottom />
    </div>
  );
};

export default Activity;
