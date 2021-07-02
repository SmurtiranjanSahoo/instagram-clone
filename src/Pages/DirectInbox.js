import React from "react";
import Header from "../Components/Header";
import { ReactComponent as MessageS } from "../Images/message-select.svg";

const DirectInbox = () => {
  return (
    <div>
      <Header ImgMessage={MessageS} />
    </div>
  );
};

export default DirectInbox;
