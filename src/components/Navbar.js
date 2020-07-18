import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/"><i className="fas fa-code fa-2x"></i></a>
      <div className="links">
        <ul>
          <li><Link to="/coverLetter">Cover Letter</Link></li>
          <li><Link to="/cv">Résumé</Link></li>
          <li><Link to="/projects">projects</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;