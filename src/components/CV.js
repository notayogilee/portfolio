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

      
    </section>
  )
}

export default CV;
