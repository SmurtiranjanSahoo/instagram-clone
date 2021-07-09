import React, { useEffect, useState } from "react";
//components
import ActivityHeader from "../Components/HeaderNav/ActivityHeader";
import NavigaitionBottom from "../Components/NavigationBottom/NavigaitionBottom";
//image
import { ReactComponent as LikeS } from "../Images/like-select.svg";

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

      <div
        style={{
          marginTop: "204px",
          textAlign: "center",
          color: "#262626",
          fontWeight: "500",
        }}
      >
        <p>No activity to show</p>
      </div>

      <NavigaitionBottom ImgLike={LikeS} />
    </div>
  );
};

export default Activity;
