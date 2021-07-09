import React from "react";

const AccountSuggetion = ({
  userImg,
  username,
  suggestionMessage = "New to Instagram",
}) => {
  return (
    <div
      style={{
        width: "100%",
        height: "48px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <img
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          marginRight: "15px",
          marginLeft: "5px",
        }}
        src={userImg}
        alt="user image"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p style={{ fontSize: "14px", fontWeight: "600" }}>{username}</p>
        <p style={{ fontSize: "12px", color: "#8e8e8e" }}>
          {suggestionMessage}
        </p>
      </div>
      <h5
        style={{
          fontSize: "12px",
          color: "#0095f6",
          marginLeft: "auto",
          marginTop: "auto",
          marginBottom: "auto",
        }}
      >
        Follow
      </h5>
    </div>
  );
};

export default AccountSuggetion;
