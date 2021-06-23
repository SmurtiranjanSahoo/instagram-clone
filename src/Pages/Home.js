import React from "react";
//components
import Header from "../Components/Header";
import AccountSuggetion from "../Components/AccountSuggetion";
//images
import homeS from "../Images/home-select.svg";
import userImg from "../Images/profileimg.jpg";

const Home = () => {
  return (
    <div>
      <Header imgHome={homeS} />
      <div style={{ marginTop: "54px" }}></div>
      <div className="home-wrapper">
        <div className="home-left"></div>
        <div className="home-right">
          <div className="home-right-user-profile">
            <img src={userImg} alt="user image" />
            <div>
              <p style={{ fontSize: "14px", fontWeight: "600" }}>
                smurtiranjan_sahoo
              </p>
              <p style={{ fontSize: "14px", color: "#8e8e8e" }}>
                Smurtiranjan Sahoo
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
              Switch
            </h5>
          </div>
          <div className="home-right-suggestion">
            <div className="home-right-suggestion-div">
              <p
                style={{
                  fontSize: "14px",
                  color: "#8e8e8e",
                  fontWeight: "600",
                }}
              >
                Suggestions For You
              </p>
              <p style={{ fontSize: "12px", fontWeight: "600" }}>See All</p>
            </div>
            <div style={{ padding: "8px 0" }}>
              <AccountSuggetion
                userImg={userImg}
                suggestionMessage="Follows You"
                username="mantuvishwa04"
              />
              <AccountSuggetion userImg={userImg} username="sa_rita7119" />
              <AccountSuggetion
                userImg={userImg}
                suggestionMessage="Suggested by You"
                username="vidyachimanpure"
              />
              <AccountSuggetion
                userImg={userImg}
                suggestionMessage="Followed by trtechlesson"
                username="gelvix.tech"
              />
              <AccountSuggetion userImg={userImg} username="anita.bag.587" />
            </div>
          </div>
          <div className="home-right-copyright">
            <ul>
              <a href="">About</a>
              <a href="">Help</a>
              <a href="">Press</a>
              <a href="">API</a>
              <a href="">Jobs</a>
              <a href="">Privacy</a>
              <a href="">Terms</a>
              <a href="">Locations</a>
              <a href=""> Top Accounts</a>
              <a href="">Hashtags</a>
              <a href="">Terms</a>
              <span>Language</span>
            </ul>
            <div>© 2021 INSTAGRAM FROM FACEBOOK</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
