import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <section id="showcase">
      <div className="dark-overlay">
        <div className="showcase-inner">
          <h1 className="x-large">Lee Castelani</h1>
          <p className="lead">Fresh Junior Software Developer</p>
          <div>
            <Link to="/coverLetter" className="btn">Cover Letter</Link>
            <Link to="/cv" className="btn">CV</Link>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Main;
