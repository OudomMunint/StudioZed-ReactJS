import React, { useState, useEffect, useCallback } from "react";

function AlertComponent() {

  const [animateAlert, setAnimateAlert] = useState(false);
  
  const hideAlert = () => {
    const alertElement = document.querySelector(".alert-container");
    if (alertElement) {
      alertElement.classList.add("hidden");
    }
  };

  return (
    <AlertComponent>
      {/* Alert Message */}
      <div className={`alert-container ${animateAlert ? "" : "hidden"}`} id="alert">
            <p style={{ margin: "0" }}>
              This website serves as a showcase of my development work. The source code is hosted on GitHub and deployed via my personal Netlify account.
              Therefore, all emails sent through this form will be directed to me. For inquiries related to
              <strong className="purple"> Studio Zed</strong>, please contact
              <a href="https://www.newcastle.edu.au/profile/simone-ocallaghan"> Dr. Simone O'Callaghan</a>.
            </p>
            <button onClick={hideAlert}
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "#721c24",
                cursor: "pointer",
                float: "right",
              }}>
              &#x2715;
            </button>
          </div>
    </AlertComponent>
  );
}

export default AlertComponent;