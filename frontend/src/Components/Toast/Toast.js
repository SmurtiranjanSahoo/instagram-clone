import React from "react";
import "./Toast.css";
const Toast = ({ Toast, message }) => {
  if (Toast) {
    return (
      <div className="toast-container">
        <p>{message}</p>
      </div>
    );
  } else return null;
};

export default Toast;
