import React from "react";
import InstaLogo from "../Images/Instagram-written-logo.svg";
import FbLogo from "../Images/fb-icon.png";
import DownloadBtn from "../Components/DownloadBtn";
import Footer from "../Components/Footer";

const Login = () => {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <div className="login-wrapper-main">
        <div>
          <div className="login-card-1">
            <div className="insta-written-logo">
              <img src={InstaLogo} alt="Instagram logo" />
            </div>
            <form className="login-form">
              <div style={{ marginTop: "-12px" }} className="input-div">
                <span className="blocking-span">
                  <input type="text" className=" login-input" required />
                  <span className="floating-label">
                    Phone number, username, or email
                  </span>
                </span>
              </div>
              <div className="input-div">
                <span className="blocking-span">
                  <input type="password" className=" login-input" required />
                  <span className="floating-label">Password</span>
                </span>
              </div>
              <button disabled className="login-button">
                Log In
              </button>
              <div className="login-or-wrapper">
                <div className="login-or-line"></div>
                <div className="login-or">OR</div>
                <div className="login-or-line"></div>
              </div>
              <div className="login-fb">
                <img
                  style={{
                    height: "15px",
                    width: "15px",
                    alignSelf: "center",
                    margin: "0 8px",
                    borderRadius: "1px",
                  }}
                  src={FbLogo}
                  alt="fb icon"
                />
                <p className="login-fb-text"> Log in with Facebook</p>
              </div>
              <div className="login-forget-pass">Forgot password?</div>
            </form>
          </div>
          <div className="login-card-2">
            <div className="login-card-2-text">
              Don't have an account?{" "}
              <a
                style={{
                  color: "#0095f6",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
                href=""
              >
                Sign up
              </a>
            </div>
          </div>
          <DownloadBtn />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
