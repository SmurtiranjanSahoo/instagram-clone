import React from "react";
import Header from "../Components/Header";
import homeS from "../Images/home-select.svg";

const Home = () => {
  return (
    <div>
      <Header imgHome={homeS} />
      {/* <div
        style={{
          marginTop: "54px",
          background: "#fafafa",
          width: "100vw",
          height: "100vh",
          overflowY: "scroll",
        }}
      > */}
      {/* <div style={{ marginTop: "54px" }}></div> */}
      {/* <h1>Home</h1> */}
    </div>
    // </div>
  );
};

export default Home;
