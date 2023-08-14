import React, { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="formFlex">
      <div className="form">
        <div className="top-bar">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="title">Get in touch!</div>
        <form name="contact" method="POST" data-netlify="true" onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you for reaching out! I will get back to you soon.");
            setName("");
            setEmail("");
            setMessage("");
          }}>

          <input type="hidden" name="form-name" value="contact" />

          {/* Name */}
          <div className="input-container ic1">
            <label className="form-label" htmlFor="name"></label>
            <input className="form-control" class="input" type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required />
          </div>

          {/* Email */}
          <div className="input-container ic2">
            <label className="form-label" htmlFor="email"></label>
            <input className="form-control" class="input" type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required/>
          </div>

          {/* Message */}
          <div className="input-container ic2">
            <label className="form-label" htmlFor="message"></label>
            <textarea className="form-control" class="input from-textarea" id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            required />
          </div>
          <button className="btn btn-danger submit" type="submit" style={{ position: "relative", marginTop: "68px" }}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;