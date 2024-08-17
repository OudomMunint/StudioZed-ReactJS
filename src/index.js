import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Main component
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

const isDevelopment = process.env.NODE_ENV === "development";

// Web Vitals
// TODO: Send metrics to an analytics endpoint
// if (isDevelopment) {
//   reportWebVitals(console.log);
// } else {
//   reportWebVitals(metric => {
//     fetch('/api/analytics', {
//       method: 'POST',
//       body: JSON.stringify(metric),
//       headers: { 'Content-Type': 'application/json' }
//     }).catch(err => console.error('Error reporting Web Vitals:', err));
//   });
// }

// Web Vitals
if (isDevelopment) {
  reportWebVitals(console.log);
}
else {
  reportWebVitals(metric => {
    console.log('Web Vitals metric:', metric);
  });
}