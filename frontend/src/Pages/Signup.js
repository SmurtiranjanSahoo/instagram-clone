import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signup } from "../auth/auth";

//images
import InstaLogo from "../Images/Instagram-written-logo.svg";
import FbLogo from "../Images/facebook logo_icon.svg";
//components
import DownloadBtn from "../Components/DownloadBtn";
import Footer from "../Components/Footer";
import Toast from "../Components/Toast/Toast";

const Signup = ({ history }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    error: "",
    success: false,
  });
  const [toast, setToast] = useState(false);

  const { name, email, username, password, error } = values;

  const handleChange = (val) => (e) => {
    setValues({ ...values, error: false, [val]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, username, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
        setToast(true);
        setTimeout(() => {
          setToast(false);
        }, 3000);
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
        setToast(true);
        setTimeout(() => {
          setToast(false);
          history.push("/accounts/login");
        }, 3000);
      }
    });
  };

  return (
    <div
      className="signup-signin-wrapper"
      style={{
        height: "100vh",
      }}
    >
      <div className="login-wrapper-main">
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
            <Link
              to="/accounts/login"
              style={{
                color: "#0095f6",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              Log in
            </Link>
          </div>
        </div>
        <DownloadBtn />
      </div>
      <Footer />
      <Toast
        message={error ? error : "Account created! Now Login"}
        Toast={toast}
      />
    </div>
  );
};

export default Signup;
