import React from 'react';
import greenThumb from '../img/greenThumb.png';
import scheduler from '../img/scheduler.png';
import tinyapp from '../img/tinyapp.png';
import tweeter from '../img/tweeter.png';
import jungleapp from '../img/jungleapp.png';
import './Projects.scss';

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="title">Projects</h1>
      <div className="container">
        <div className="project">
          <h3 className="project-title">Green Thumb</h3>
          <img src={greenThumb} alt="greenThumb" className="image" />
          <p>
            A gardening app co-created from scratch. Users can create, edit or remove a virtual garden with with gardening tips for their plants.  Calls made to weather API fetch current weather for the location of each garden.  React, Materialize CSS, backend by Rails & PostgresSQL.
          </p>
          <br />
          <a href="https://github.com/notayogilee/green-thumb" target="_blank" rel="noopener noreferrer" className="github-link">View Code on GitHub</a>
        </div>
        <div className="project">
          <h3 className="project-title">Jungle App</h3>
          <img src={jungleapp} alt="jungleapp" className="image" />

          <p>
            A mock eCommece app used to practice Ruby on Rails. We were given a variety of improvements to make in the form of 'tickets', from frontend styling to Active Records search.
          </p>
          <br />
          <a href="https://github.com/notayogilee/jungle-rails-app" target="_blank" rel="noopener noreferrer" className="github-link">View Code on GitHub</a>
        </div>
        <div className="project">
          <h3 className="project-title">Scheduler</h3>
          <img src={scheduler} alt="scheduler" className="image" />

          <p>An appointment app for scheduling meetings with mentors using React (with hooks),  PostgresSQL, Axios, Classnames,  Storybook and tested with Jest and Cypress.</p>
          <br />
          <a href="https://github.com/notayogilee/scheduler" target="_blank" rel="noopener noreferrer" className="github-link">View Code on GitHub</a>
        </div>
        <div className="project">
          <h3 className="project-title">Tiny App</h3>
          <img src={tinyapp} alt="tinyapp" className="image" />

          <p>URL shortening app inspired by TinyURL using Express and Node.js.</p>
          <br />
          <a href="https://github.com/notayogilee/tinyapp" target="_blank" rel="noopener noreferrer" className="github-link">View Code on GitHub</a>
        </div>
        <div className="project">
          <h3 className="project-title">Tweeter</h3>
          <img src={tweeter} alt="tweeter" className="image" />

          <p>A chat app copy of Twitter powered by Express, jQuery, and Node.js.</p>
          <br />
          <a href="https://github.com/notayogilee/tweeter" target="_blank" rel="noopener noreferrer" className="github-link">View Code on GitHub</a>
        </div>
      </div>
    </section>
  )
}

export default Projects;
