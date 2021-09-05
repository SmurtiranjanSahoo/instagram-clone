import React from "react";
import "./LogoutModal.css";
import { signout } from "../../auth/auth";
import { useHistory } from "react-router-dom";

const LogoutModal = ({ setCloseModal }) => {
  const history = useHistory();

  return (
    <div className="modal-wrapper">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal"
      >
        <button
          onClick={() => {
            signout(() => {
              history.push("/accounts/login");
            });
            setCloseModal();
          }}
        >
          Log out
        </button>
        <button onClick={setCloseModal}>Cancel</button>
      </div>
    </div>
  );
};

export default LogoutModal;
