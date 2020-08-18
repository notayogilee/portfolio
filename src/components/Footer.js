import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="tag">
        <a href="/contact"> Contact me anytime!</a>
      </div>
      <div className="icons">
        <ul className="contact-tag">
          <li><a href="https://github.com/notayogilee" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square fa-2x"></i></a></li>
          <li><a href="https://www.linkedin.com/in/lee-castelani-40bba31a5/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-2x"></i></a></li>
          <li className="phone"><i className="fas fa-phone-alt"></i>{" "}514-552-6031</li>
          <li className="email"><i className="fas fa-at"></i>{" "}notayogilee@gmail.com</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
