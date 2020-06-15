import React from 'react'

const Footer = () => {
  return (
    <footer id="footer">
      <div className="tag">
        Contact me anytime!
    </div>
      <div className="icons">
        <ul className="tag">
          <li><a href="https://github.com/notayogilee" target="_blank" rel="noopener noreferrer"><i class="fab fa-github-square fa-2x"></i></a></li>
          <li><a href="https://www.linkedin.com/in/lee-castelani-40bba31a5/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin fa-2x"></i></a></li>
          <li className="border"><i class="fas fa-phone-alt"></i>{" "}514-552-6031</li>
          <li className="border"><i class="fas fa-at"></i>{" "}notayogilee@gmail.com</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
