import React, { useState, useEffect } from "react";
import { createPost } from "../helper/apicalls";
import { isAutheticated } from "../auth/auth";
import CreatePostHeader from "../Components/HeaderNav/CreatePostHeader";

const CreatePost = () => {
  const { user, token } = isAutheticated();
  const initialState = {
    postAuthor: user._id,
    photo: "",
    caption: "",
    loading: false,
    error: "",
    getaRedirect: false,
    formData: new FormData(),
    createdPost: "",
  };
  const [values, setValues] = useState(initialState);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const { photo, caption, loading, error, getaRedirect, formData } = values;

  useEffect(() => {
    const updateWindowDimensions = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    formData.set("postAuthor", user._id);

    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, error: "", loading: true });
    createPost(user._id, token, formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,

          loading: false,
          createdPost: data.name,
          photo: "",
          caption: "",
        });
      }
    });
    // console.log(...formData);
  };

  return (
    <div>
      <CreatePostHeader innerWidth={innerWidth} submit={onSubmit} />
      <div
        style={{
          width: "100%",
          // height: "81px",
          padding: "16px",
          marginTop: "44px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          borderBottom: "1px solid #dbdbdb",
        }}
      >
        <div>
          <img
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              marginRight: "5px",
            }}
            src="https://avatars.githubusercontent.com/u/43810530?v=4"
            alt=""
          />
        </div>
        <div style={{ width: "calc(100% - 83px )" }}>
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleChange("photo")}
          />
          <textarea
            className="createPost-input"
            style={{
              width: "100%",
              // height: "100%",
              //temp
              marginTop: "5px",
              //
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
        <div>
          <img
            style={{ width: "48px", height: "48px" }}
            src="https://avatars.githubusercontent.com/u/43810530?v=4"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
