import React, { useState } from 'react';
import axios from 'axios';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { name, email, message };
    try {
      const response = await axios.post('/send-email', data);
      console.log('Form submission successful:', response.data);
      // clear form inputs
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <div className="formFlex">
      <div className="form">
        <div className="top-bar">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="title">Get in touch!</div>
        <form onSubmit={handleSubmit}>
          <div className="input-container ic1" >
            <label className="form-label" htmlFor="name">
              
            </label>
            <input className="form-control" class="input" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' required />
          </div>
          <div className="input-container ic2" >
            <label className="form-label" htmlFor="email">
              
            </label>
            <input className="form-control" class="input" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
          </div>
          <div className="input-container ic2">
            <label className="form-label" htmlFor="message">
              
            </label>
            <textarea className="form-control" class="input from-textarea" id="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message' required />
          </div>
          <button className="btn btn-danger submit" type="submit" style={{ position: 'relative', marginTop: '68px' }}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default ContactForm