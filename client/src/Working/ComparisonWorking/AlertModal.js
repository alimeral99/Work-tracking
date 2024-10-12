import React from "react";
import "./AlertModal.css";
import { Link } from "react-router-dom";

const Modal = ({ onClose }) => {
  return (
    <div className="overlay">
      <div className="modal">
        <h2 className="modal-title">Worning</h2>
        <p className="modal-paragraph">Only premium users can use it</p>

        <div className="modalButton-container">
          <Link className="modal-link" to={"/upgradeform"}>
            Click to Premium
          </Link>

          <button className="modalClose-button" onClick={onClose}>
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
