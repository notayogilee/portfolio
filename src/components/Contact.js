import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <section id="contact-page">
      <div className="secret">
        <h2>contact me</h2>
      </div>
      <div className="contact-form">
        <form name="contact" method="post" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <div className="text-fields">
            <input type="text" name="name" className="text-input name-input" placeholder="Name" />
          </div>
          <div className="text-fields">
            <input type="email" name="email" className="text-input email-input" placeholder="Your email address" />
          </div>
          <div className="text-fields">
            <input type="text" name="subject" className="text-input subject-input" placeholder="Subject" />
          </div>
          <div className="text-fields">
            <textarea type="text" name="message" className="text-input message-input" placeholder="Enter message..."></textarea>
          </div>
          <button className="message-button" type="submit">submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;