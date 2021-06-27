import React, { useRef, useState } from "react";
import StoryHome from "./StoryHome";
import StoryNavImg from "../Images/story-nav.png";

const StoryContainer = () => {
  const [prevBtn, setPrevBtn] = useState("hidden");
  const [nextBtn, setNextBtn] = useState("visible");

  const storyWrapper = useRef("");
  // console.log(storyWrapper.current);

  const arr = [2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 66, 6, 6, 3, 33, 3, 3, 3, 3, 3];
  var j = 1;

  return (
    <>
      <div ref={storyWrapper} className="story-wrapper">
        <div className="story-wrapper-li">
          <li></li>
        </div>

        {arr.map((x, i) => {
          if (j === i) {
            j = j + 3;
            return (
              <>
                <StoryHome username="smurtiranjan_sahoo" />
                <StoryHome username="gelvix.tech" />
              </>
            );
          } else {
            return <StoryHome username="trtechlesson" />;
          }
        })}
      </div>
      <div
        style={{ visibility: prevBtn }}
        className="story-wrapper-button-prev"
      >
        <button
          onClick={() => {
            storyWrapper.current.scrollBy(-400, 0);
            // console.log(storyWrapper.current.scrollLeft - 400);
            if (storyWrapper.current.scrollLeft - 400 <= 0) {
              setPrevBtn("hidden");
            }
            if (
              storyWrapper.current.scrollWidth -
                storyWrapper.current.clientWidth ===
              storyWrapper.current.scrollLeft
            ) {
              setNextBtn("visible");
            }
          }}
          className="story-prev"
        >
          <img
            style={{
              height: "25p",
              width: "25px",
              transform: "scaleX(-1)",
            }}
            src={StoryNavImg}
            alt=""
          />
        </button>
      </div>
      <div
        style={{ visibility: nextBtn }}
        className="story-wrapper-button-next"
      >
        <button
          onClick={() => {
            let x = 400;

            storyWrapper.current.scrollBy(x, 0);
            // console.log(storyWrapper.current.scrollLeft);
            if (x !== 0) {
              setPrevBtn("visible");
            } else {
              setPrevBtn("hidden");
            }
            if (
              storyWrapper.current.scrollWidth -
                storyWrapper.current.clientWidth <=
              storyWrapper.current.scrollLeft + 400
            ) {
              setNextBtn("hidden");
            } else {
              setNextBtn("visible");
            }
            // console.log(
            //   storyWrapper.current.scrollWidth -
            //     storyWrapper.current.clientWidth
            // );
            // console.log(storyWrapper.current.scrollLeft + 400);
          }}
          className="story-next"
        >
          <img
            style={{
              height: "25p",
              width: "25px",
            }}
            src={StoryNavImg}
            alt=""
          />
        </button>
      </div>
    </>
  );
};

export default StoryContainer;
