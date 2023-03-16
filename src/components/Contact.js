import React from 'react'
import { Container } from 'react-bootstrap'
const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div class="formFlex">
    <div class="form">
    <div class="top-bar">
          <span></span>
          <span></span>
          <span></span>
    </div>
      <div class="title">Get in touch!</div>

      <form onSubmit={onSubmit}>
        <div class="input-container ic1" >
          <label className="form-label" class="Formplaceholder" htmlFor="name">
            Name
          </label>
          <input className="form-control" class="input" type="text" id="name" required />
        </div>
        <div class="input-container ic2" >
          <label className="form-label" class="Formplaceholder" htmlFor="email">
            Email
          </label>
          <input className="form-control" class="input" type="email" id="email" required />
        </div>
        <div class="input-container ic2">
          <label className="form-label" class="Formplaceholder" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" class="input" id="message" required />
        </div>
        <button className="btn btn-danger" class="submit" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
    </div>
  )
}
export default ContactForm