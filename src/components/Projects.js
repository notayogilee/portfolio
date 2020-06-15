import React from 'react'

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <ul>
        <li><a href="https://github.com/notayogilee/green-thumb" target="_blank" rel="noopener noreferrer">Green Thumb</a>: A gardening app co-created from scratch. Users can create, edit or remove a virtual garden with with gardening tips for their plants.  Calls made to weather API fetch current weather for the location of each garden.  React, Materialize CSS, backend by Rails & PostgresSQL.  </li>
        <li><a href="https://github.com/notayogilee/jungle-rails-app" target="_blank" rel="noopener noreferrer">Jungle App</a>: A mock eCommece app used to practice Ruby on Rails. We were given a variety of improvements to make in the form of 'tickets', from frontend styling to Active Records search.  </li>
        <li><a href="https://github.com/notayogilee/scheduler" target="_blank" rel="noopener noreferrer">Scheduler</a>: An appointment app for scheduling meetings with mentors using React (with hooks),  PostgresSQL, Axios, Classnames,  Storybook and tested with Jest and Cypress.  </li>
        <li><a href="https://github.com/notayogilee/hooked" target="_blank" rel="noopener noreferrer">Hooked</a>: URL link storage app inspired by Pinterest.  In this collaborative project, users can add, remove, rate, like comment on added links.  This app is powered by Express, Node.js, Sass, and PostgresSQL.  </li>
        <li><a href="https://github.com/notayogilee/tweeter" target="_blank" rel="noopener noreferrer">Tweeter</a>: A chat app copy of Twitter powered by Express, jQuery, and Node.js.  </li>
        <li><a href="https://github.com/notayogilee/tinyapp" target="_blank" rel="noopener noreferrer">Tiny App</a>: URL shortening app inspired by TinyURL using Express and Node.js.  </li>
      </ul>
    </div>
  )
}

export default Projects;
