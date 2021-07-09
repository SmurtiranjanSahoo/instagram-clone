import React, { useState, useEffect } from "react";
//components
import Header from "../Components/Header";
import DirectInboxHeader from "../Components/HeaderNav/DirectInboxHeader";
//images
import { ReactComponent as MessageS } from "../Images/message-select.svg";

const DirectInbox = () => {
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
      <Header ImgMessage={MessageS} />
      <DirectInboxHeader innerWidth={innerWidth} />

      <div
        style={{ marginTop: "104px", textAlign: "center", color: "#262626" }}
      >
        <h4>Under Development</h4>
      </div>
    </div>
  );
};

export default DirectInbox;
