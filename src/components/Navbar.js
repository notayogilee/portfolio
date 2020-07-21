import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {

  const [drop, setDrop] = useState(false);

  return (
    <Fragment>
      <nav className="navbar">
        <a href="/"><i className="fas fa-code fa-2x"></i></a>
        <div className="links">
          <ul>
            <li><Link to="/coverLetter">Cover Letter</Link></li>
            <li><Link to="/cv">Résumé</Link></li>
            <li><Link to="/projects">projects</Link></li>
            <li><Link to="/contact">contact</Link></li>
          </ul>
        </div>
      </nav>
      <div className="drop-down">
        <div className="drop-wrapper">
          <div className="drop-header">
            <button onClick={(() => setDrop(!drop))} className="drop-header-title"><i class="fas fa-bars fa-4x"></i></button>
          </div>

          {drop &&
            <div className="drop-list">
              <ul>

                <li className="drop-list-item"><Link onClick={(() => setDrop(!drop))} to="/">Home</Link></li>


                <li className="drop-list-item"><Link onClick={(() => setDrop(!drop))} to="/coverLetter">Cover Letter</Link></li>


                <li className="drop-list-item"><Link onClick={(() => setDrop(!drop))} to="/cv">Résumé</Link></li>


                <li className="drop-list-item"><Link onClick={(() => setDrop(!drop))} to="/projects">projects</Link></li>


                <li className="drop-list-item"><Link onClick={(() => setDrop(!drop))} to="/contact">contact</Link></li>

              </ul>
            </div>
          }
        </div>
      </div>

    </Fragment>

  )
}

export default Navbar;