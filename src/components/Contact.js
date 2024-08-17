import React, { useState, useEffect, useCallback } from "react";

function ContactForm() {
  const isDevelopment = process.env.NODE_ENV === "development";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    let data = { name, email, message };
    try {
      // clear form
      setName('');
      setEmail('');
      setMessage('');
      if (isDevelopment) {
        data = {
          name: "testUser1",
          email: "test@test.com",
          message: "Hello, this is a test message."
        };
      }
      console.log('Form submission successful:', data);
    } catch (error) {
      console.error('Form submission error:', error);
      console.log('Error caught');
    }
  }, [name, email, message, isDevelopment]);

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
        <div className="form">
          <div className="top-bar">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="title">Get in touch!</div>
          <form name="contact" method="POST" data-netlify-recaptcha="true">
            <input type="hidden" name="form-name" value="contact" />

            {/* Name */}
            <div className="input-container ic1">
              <label className="form-label" htmlFor="name"></label>
              <input className="form-control input" type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required />
            </div>

            {/* Email */}
            <div className="input-container ic2">
              <label className="form-label" htmlFor="email"></label>
              <input className="form-control input" type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required />
            </div>

            {/* Message */}
            <div className="input-container ic2">
              <label className="form-label" htmlFor="message"></label>
              <textarea className="form-control input from-textarea" id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                required />
            </div>
            <div data-netlify-recaptcha="true" className="reCaptcha"></div>
            {/* Submit */}
            <button title="submit" className="btn btn-danger submit" type="submit" style={{ position: "relative", marginTop: "68px" }}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactForm;