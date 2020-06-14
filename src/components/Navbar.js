import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="logo"></div>
      <div className="links">
        <ul>
          <li><Link to="/coverLetter">Cover Letter</Link></li>
          <li><Link to="/cv">CV</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;