import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { signin, authenticate, isAutheticated } from "../auth/auth";
//images
import InstaLogo from "../Images/Instagram-written-logo.svg";
import FbLogo from "../Images/fb-icon.png";
//componets
import DownloadBtn from "../Components/DownloadBtn";
import Footer from "../Components/Footer";

const Login = () => {
  const [values, setValues] = useState({
    email: "test1@gmail.com",
    password: "test1@gmail.com",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const { email, password, error, loading, didRedirect } = values;
  const { user } = isAutheticated();

  const handleChange = (val) => (event) => {
    setValues({ ...values, error: false, [val]: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        authenticate(data, () => {
          setValues({
            ...values,
            didRedirect: true,
          });
        });
      }
    });
  };
  //redirect
  const performRedirect = () => {
    if (isAutheticated()) {
      return <Redirect to="/" />;
    }
  };

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
            <form onSubmit={onSubmit} className="login-form">
              <div style={{ marginTop: "-12px" }} className="input-div">
                <span className="blocking-span">
                  <input
                    onChange={handleChange("email")}
                    value={email}
                    type="text"
                    className=" login-input"
                    required
                  />
                  <span className="floating-label">
                    Phone number, username, or email
                  </span>
                </span>
              </div>
              <div className="input-div">
                <span className="blocking-span">
                  <input
                    onChange={handleChange("password")}
                    value={password}
                    type="password"
                    className=" login-input"
                    required
                  />
                  <span className="floating-label">Password</span>
                </span>
              </div>
              <button className="login-button">Log In</button>
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
              <Link
                to="/accounts/emailsignup"
                style={{
                  color: "#0095f6",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                Sign up
              </Link>
            </div>
          </div>
          <DownloadBtn />
        </div>
      </div>
      {performRedirect()}
      <Footer />
    </div>
  );
};

export default Login;
