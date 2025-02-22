// import React, { useState, useEffect, useCallback } from "react";

const hideAlert = () => {
  const alertElement = document.querySelector(".alert-container");
  if (alertElement) {
    alertElement.classList.add("hidden");
  }
};

const AlertComponent = ({ message, animateAlert }) => {
  return (
    <div className={`alert-container ${animateAlert ? "" : "hidden"}`} id="alert">
      <p className="alert-text" style={{ margin: "0" }}>
        {message}
      </p>
      <button
        onClick={hideAlert}
        style={{
          backgroundColor: "transparent",
          border: "none",
          color: "#721c24",
          cursor: "pointer",
          float: "right",
        }}
      >
        &#x2715;
      </button>
    </div>
  );
};

export default AlertComponent;