import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signup } from "../auth/auth";

//images
import InstaLogo from "../Images/Instagram-written-logo.svg";
import FbLogo from "../Images/facebook logo_icon.svg";
//components
import DownloadBtn from "../Components/DownloadBtn";
import Footer from "../Components/Footer";

const Signup = () => {
  const [values, setValues] = useState({
    name: "test1",
    email: "test1@gmail.com",
    username: "test1",
    password: "test1@gmail.com",
    error: "",
    success: false,
  });

  const { name, email, username, password, error, success } = values;

  const handleChange = (val) => (e) => {
    setValues({ ...values, error: false, [val]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, username, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          username: "",
          password: "",
          error: "",
          success: true,
        });
      }
    });
  };

  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <div className="login-wrapper-main">
        <div>
          <div className="signup-card-1">
            <div className="insta-written-logo">
              <img src={InstaLogo} alt="Instagram logo" />
            </div>
            <div className="signup-text1">
              Sign up to see photos and videos from your friends.
            </div>
            <div className="signup-fb">
              <img
                style={{
                  height: "16px",
                  width: "16px",
                  alignSelf: "center",
                  margin: "0 8px",
                  borderRadius: "1px",
                }}
                src={FbLogo}
                alt="fb icon"
              />
              <p className="signup-fb-text"> Log in with Facebook</p>
            </div>
            <div
              style={{ marginTop: "5px", marginBottom: "-4px" }}
              className="login-or-wrapper"
            >
              <div className="login-or-line"></div>
              <div className="login-or">OR</div>
              <div className="login-or-line"></div>
            </div>
            <form onSubmit={onSubmit} className="login-form">
              <div className="input-div">
                <span className="blocking-span">
                  <input
                    value={email}
                    onChange={handleChange("email")}
                    type="email"
                    className=" login-input"
                    required
                  />
                  <span className="floating-label">Mobile Number or Email</span>
                </span>
              </div>
              <div className="input-div">
                <span className="blocking-span">
                  <input
                    value={name}
                    onChange={handleChange("name")}
                    type="text"
                    className=" login-input"
                    required
                  />
                  <span className="floating-label">Full Name</span>
                </span>
              </div>
              <div className="input-div">
                <span className="blocking-span">
                  <input
                    value={username}
                    onChange={handleChange("username")}
                    type="text"
                    className=" login-input"
                    required
                  />
                  <span className="floating-label">Username</span>
                </span>
              </div>
              <div className="input-div">
                <span className="blocking-span">
                  <input
                    value={password}
                    onChange={handleChange("password")}
                    type="password"
                    className=" login-input"
                    required
                  />
                  <span className="floating-label">Password</span>
                </span>
              </div>
              <button className="login-button">Sign up</button>
            </form>
            <div className="signup-tc">
              By signing up, you agree to our{" "}
              <span className="signup-tc-bold"> Terms</span> ,
              <span className="signup-tc-bold"> Data Policy</span> and{" "}
              <span className="signup-tc-bold"> Cookies Policy</span> .
            </div>
          </div>
          <div className="login-card-2">
            <div className="login-card-2-text">
              Have an account?{" "}
              <a
                style={{
                  color: "#0095f6",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
                href=""
              >
                Log in
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

export default Signup;
