import React, { useEffect, useState } from "react";
import CommentsHeader from "../Components/HeaderNav/CommentsHeader";

const Comments = () => {
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
      <CommentsHeader innerWidth={innerWidth} />
    </div>
  );
};

export default Comments;
