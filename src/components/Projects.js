import React from 'react';
import greenThumb from '../img/greenThumb.png';
import scheduler from '../img/scheduler.png';
import tinyapp from '../img/tinyapp.png';
import tweeter from '../img/tweeter.png';
import jungleapp from '../img/jungleapp.png';
import yogiALunette from '../img/yogiALunette.png';
import './Projects.scss';

const Projects = () => {
  return (
    <section id="projects">
      <h1>OPERATIONS</h1>
      <div className="container">
        <div className="yogi-a-lunette">
          <div className="project">
            <img src={yogiALunette} alt="yogi-a-lunette" />
          </div>
          <div className="project-description">
            <h3>Yogi À Lunette</h3>
            <p>
              A website made for my yoga intructor wife who has a YouTube channel of instructional yoga videos. For now, there is no backend, React is on the front and I used all custom sass - no css libraries. Deployed with Netlify. I embeded the videos from YouTube. I added a live stream section, where I embeded the Twitch streaming platform and now a live class is given once a week. Along with a contact form which is pointed to specific emails.
          </p>
            <br />
            <a href="https://github.com/notayogilee/portfolio" target="_blank" rel="noopener noreferrer">View Code on GitHub</a>
            <a href="https://www.yogialunette.com" target="_blank" rel="noopener noreferrer">Deployed Website</a>
          </div>
        </div>
        <div className="green-thumb">
          <div className="project">
            <img src={greenThumb} alt="greenThumb" />
          </div>
          <div className="project-description">
            <h3>Green Thumb</h3>
            <p>
              A gardening app co-created from scratch. Users can create, edit or remove a virtual garden with with gardening tips for their plants.  Calls made to weather API fetch current weather for the location of each garden.  React, Materialize CSS, backend by Rails & PostgresSQL.
          </p>
            <br />
            <a href="https://github.com/notayogilee/green-thumb" target="_blank" rel="noopener noreferrer">View Code on GitHub</a>
          </div>
        </div>
        <div className="jungle-app">
          <div className="project">
            <img src={jungleapp} alt="jungleapp" />
          </div>
          <div className="project-description">
            <h3>Jungle App</h3>
            <p>
              A mock eCommece app used to practice Ruby on Rails. We were given a variety of improvements to make in the form of 'tickets', from frontend styling to Active Records search.
          </p>
            <br />
            <a href="https://github.com/notayogilee/jungle-rails-app" target="_blank" rel="noopener noreferrer">View Code on GitHub</a>
          </div>
        </div>

        <div className="scheduler">
          <div className="project">
            <img src={scheduler} alt="scheduler" />
          </div>
          <div className="project-description">
            <h3>Scheduler</h3>
            <p>An appointment app for scheduling meetings with mentors using React (with hooks),  PostgresSQL, Axios, Classnames,  Storybook and tested with Jest and Cypress.</p>
            <br />
            <a href="https://github.com/notayogilee/scheduler" target="_blank" rel="noopener noreferrer">View Code on GitHub</a>
          </div>
        </div>

        <div className="tiny-app">
          <div className="project">
            <img src={tinyapp} alt="tinyapp" />
          </div>
          <div className="project-description">
            <h3>Tiny App</h3>
            <p>URL shortening app inspired by TinyURL using Express and Node.js.</p>
            <br />
            <a href="https://really-tiny-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed App</a>
            <a href="https://github.com/notayogilee/tinyapp" target="_blank" rel="noopener noreferrer">View Code on GitHub</a>

          </div>
        </div>
        <div className="tweeter">
          <div className="project">
            <img src={tweeter} alt="tweeter" />
          </div>
          <div className="project-description">
            <h3>Tweeter</h3>
            <p>A chat app copy of Twitter powered by Express, jQuery, and Node.js.</p>
            <br />
            <a href="https://github.com/notayogilee/tweeter" target="_blank" rel="noopener noreferrer">View Code on GitHub</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects;
