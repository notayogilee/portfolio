import React, { Fragment } from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <Fragment>
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

      {/* 
        <footer id="contact-footer">
          <div className="icons">
            <ul className="contact-tag">
              <div className="social">
                <li><a href="https://github.com/notayogilee" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square fa-2x"></i></a></li>
                <li><a href="https://www.linkedin.com/in/lee-castelani-40bba31a5/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-2x"></i></a></li>
              </div>
              <li className="phone"><i className="fas fa-phone-alt"></i>{" "}514-552-6031</li>
              <li className="email"><i className="fas fa-at"></i>{" "}notayogilee@gmail.com</li>
            </ul>
          </div>
        </footer> */}
    </Fragment>
  )
}

export default Contact;