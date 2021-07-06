import React, { useEffect, useState } from "react";
import CommentsHeader from "../Components/HeaderNav/CommentsHeader";
import AddComment from "../Components/GenericComponents/Comments/AddComment/AddComment";
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
      <div style={{ marginTop: "44px" }}>
        <AddComment innerWidth={innerWidth} />
      </div>
    </div>
  );
};

export default Comments;
