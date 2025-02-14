import React, { useState, useEffect, useCallback } from "react";
import AlertComponent from "./AlertComponent";

function ContactForm() {
  const isDevelopment = process.env.NODE_ENV === "development";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [animateAlert, setAnimateAlert] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateAlert(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      let data = { name, email, message };
      try {
        setName("");
        setEmail("");
        setMessage("");
        if (isDevelopment) {
          data = {
            name: "testUser1",
            email: "test@test.com",
            message: "Hello, this is a test message.",
          };
        }
        console.log("Form submission successful:", data);
      } catch (error) {
        console.error("Form submission error:", error);
      }
    },
    [name, email, message, isDevelopment]
  );

  useEffect(() => {
    if (isDevelopment) {
      const button = document.querySelector(".submit");
      if (button) {
        button.addEventListener("click", handleSubmit);
      }
      return () => {
        if (button) {
          button.removeEventListener("click", handleSubmit);
        }
      };
    }
  }, [isDevelopment, handleSubmit]);

  return (
    <>
    <form name="contact" netlify="true" netlify-honeypot="bot-field" data-netlify-recaptcha="true" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>

      <div className="formFlex">

        {/* Alert Message */}
          <AlertComponent message={
            <>
              This website serves as a showcase of my development work. The source code is hosted on GitHub and deployed via my personal Netlify account.
              Therefore, all emails sent through this form will be directed to me. For inquiries related to
              <strong className="purple"> Studio Zed</strong>, please contact
              <a href="https://www.newcastle.edu.au/profile/simone-ocallaghan"> Dr. Simone O'Callaghan</a>.
            </>
          }
          animateAlert={animateAlert} />

        {/* Form */}
        <div className="form">
          <div className="top-bar">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="title">Get in touch!</div>
          <form name="contact" method="POST" data-netlify-recaptcha="true">
            <input type="hidden" name="form-name" value="contact" />
            <div className="input-container ic1">
              <input className="form-control input" type="text" id="name" name="name" value={name}
                     onChange={(e) => setName(e.target.value)} placeholder="Name" required/>
            </div>
            <div className="input-container ic2">
              <input className="form-control input" type="email" id="email" name="email" value={email}
                     onChange={(e) => setEmail(e.target.value)} placeholder="Email"
                     required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                     title="Please enter a valid email address"/>
            </div>
            <div className="input-container ic2">
              <textarea className="form-control input from-textarea" id="message" name="message"
                        value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" required/>
            </div>
            <div data-netlify-recaptcha="true" className="reCaptcha"></div>
            <button title="submit" className="btn-submit submit" type="submit" style={{ position: "relative", marginTop: "68px" }}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactForm;