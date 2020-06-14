import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="logo"><i class="fas fa-code fa-2x"></i></a>
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