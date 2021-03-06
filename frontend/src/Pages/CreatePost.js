import React, { useState, useEffect } from "react";
import imageCompression from "browser-image-compression";

import { isAutheticated } from "../auth/auth";
import { connect } from "react-redux";
import { postCreate } from "../actions/postActions";
//svg
import { ReactComponent as Spinner } from "../Images/spinner.svg";
import ProfileImg from "../Images/profileimg.jpg";
//components
import CreatePostHeader from "../Components/HeaderNav/CreatePostHeader";
import UserPhotoHelper from "../helper/UserPhotoHelper";
import Toast from "../Components/Toast/Toast";

const CreatePost = ({ history, postCreate, postState, userState }) => {
  const { user } = isAutheticated();
  const { userDetails } = userState;

  const initialState = {
    postAuthor: user._id,
    photo: "",
    caption: "",
    formData: new FormData(),
  };
  const [values, setValues] = useState(initialState);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [toast, setToast] = useState(false);
  const [message, setMessage] = useState(false);

  const { caption, formData, photo } = values;

  useEffect(() => {
    const updateWindowDimensions = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  function handleImageUpload(event) {
    var imageFile = event.target.files[0];
    var options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    imageCompression(imageFile, options)
      .then(function (compressedFile) {
        setValues({ ...values, photo: compressedFile });
        formData.set("photo", compressedFile);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setValues({ ...values, photo: "" });
    formData.set(name, value);
    formData.set("postAuthor", user._id);
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (photo) {
      if (caption.length > 200) {
        setMessage("Caption length shouldn't excceed 200 char");
        setToast(true);
        setTimeout(() => {
          setToast(false);
        }, 3000);
        return;
      }
      postCreate(formData);
      history.push(`/${user.username}`);
    } else {
      setMessage("Select Photo!");
      setToast(true);
      setTimeout(() => {
        setToast(false);
      }, 3000);
    }
  };

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <CreatePostHeader innerWidth={innerWidth} submit={onSubmit} />
      <div
        style={{
          width: "100%",
          padding: "16px",
          marginTop: "44px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          borderBottom: "1px solid #dbdbdb",
        }}
      >
        <div>
          {userDetails?.photo ? (
            <UserPhotoHelper
              user={userDetails}
              className="createpost-user-img"
            />
          ) : (
            <img className="createpost-user-img" src={ProfileImg} alt="" />
          )}
        </div>
        <div style={{ width: "calc(100% - 83px )" }}>
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={(e) => {
              handleImageUpload(e);
            }}
          />
          <textarea
            className="createPost-input"
            style={{
              width: "100%",
              marginTop: "5px",
              fontSize: "14px",
              border: "none",
              color: "#262626",
              outline: "none",
              padding: "2px",
              resize: "none",
            }}
            name="caption"
            onChange={handleChange("caption")}
            value={caption}
            type="text"
            placeholder="Write a caption..."
          />
        </div>
        <div style={{ width: "48px", height: "48px" }}>
          {photo !== "" ? (
            <img
              style={{ width: "48px", height: "48px", objectFit: "cover" }}
              src={URL.createObjectURL(photo)}
              alt=""
            />
          ) : (
            <h2></h2>
          )}
        </div>
      </div>
      {postState.isPostCreating && (
        <div
          style={{
            width: "100%",
            height: "100vh",
            position: "absolute",
            inset: "0",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner width="50px" height="50px" />
        </div>
      )}
      <Toast message={message} Toast={toast} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  postState: state.PostReducer,
  userState: state.UserReducer,
});

const mapDispatchToProps = (dispatch) => ({
  postCreate: (post) => dispatch(postCreate(post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
