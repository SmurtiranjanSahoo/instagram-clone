import React from "react";

const Footer = () => {
  return (
    <div
      className="footer-wrapper"
      style={{
        height: "110px",
        width: "100%",
        // marginTop: "auto",
        // marginBottom: "520px",
        backgroundColor: "#fafafa",
        textAlign: "center",
        color: "#8e8e8e",
        fontSize: "12px",
      }}
    >
      <div
        style={{
          //   width: "736px",
          height: "21px",
          textAlign: "center",
        }}
      >
        <span
          style={{
            marginRight: "12px",
          }}
        >
          About{" "}
        </span>
        <span
          style={{
            marginRight: "12px",
          }}
        >
          Blog{" "}
        </span>
        <span
          style={{
            marginRight: "15px",
          }}
        >
          Jobs{" "}
        </span>
        <span
          style={{
            marginRight: "12px",
          }}
        >
          Help{" "}
        </span>
        <span
          style={{
            marginRight: "12px",
          }}
        >
          API{" "}
        </span>
        <span
          style={{
            marginRight: "12px",
          }}
        >
          Privacy{" "}
        </span>
        <span
          style={{
            marginRight: "12px",
          }}
        >
          Terms{" "}
        </span>
        <span
          style={{
            marginRight: "12px",
          }}
        >
          Top Accounts{" "}
        </span>
        <span
          style={{
            marginRight: "12px",
          }}
        >
          Hashtags{" "}
        </span>
        <span
          style={
            {
              // marginRight: "5px",
            }
          }
        >
          Locations{" "}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "13px",
        }}
      >
        <div style={{ marginRight: "20px" }}>English</div>
        <div>© 2021 Instagram from Facebook</div>
      </div>
    </div>
  );
};

export default Footer;
