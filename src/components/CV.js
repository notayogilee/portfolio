import React from 'react'

const CV = () => {
  return (
    <section id="resume">
      <div className="summary">
        <h1>summary</h1>
        <p>Pharmacy tech turned full-stack web developer, eager to contribute to a team, sharpen & add new skills. I transformed my hobby for coding into a passion and took the leap to make it a career. I left my job with a partial scholarship from Lighthouse Labs to get the foundation I needed and am now excited about the new challenges awaiting.</p>
      </div>

      <div className="education">
        <h1>Education</h1>
        <div className="dates">
          <h3>Lighthouse Labs</h3>
          <h4>Feb 2020 - May 2020</h4>
        </div>
        <p>Condensed immersion based learning of languages, libraries, frameworks, databases and testing. Development techniques such as debugging, pair programming, and team version control.</p>
        <div className="dates">
          <h3>Cegep John Abbott College</h3>
          <h4>1998 - 2001</h4>
        </div>
        <p>DEC Natural Science</p>
      </div>

      <div className="employment">
        <h1>Employment</h1>
        <div className="dates">
          <h3>McGill University Health Center</h3>
          <h4>2008 - 2020</h4>
        </div>
        <ul>
          <li>Worked in various departments; main pharmacy, I.C.U., O.R., and oncology.</li>
          <li>Specializing in oncology,  part of a team that processed and prepared medications and chemotherapy.</li>
          <li>Adapted to constantly changing protocols, norms and  procedures.</li>
          <li>Involved in relocating and setting up pharmacy in new hospital.</li>
        </ul>
      </div>

      <div className="skills">
        <h1>Skills</h1>
        <ul>
          <li>Languages: HTML, CSS, JavaScript, SQL, & Ruby</li>
          <li>Frameworks & Libraries: ReactJS, NodeJS, Express, Rails, jQuery, Bootstrap, Jest, Cypress, Mocha, Chai</li>
          <li>Database: PostgresSQL</li>
        </ul>
      </div>

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
    </section>
  )
}

export default CV;
