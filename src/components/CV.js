import React, { useState } from 'react';
import './CV.scss';

const CV = () => {

  const [show, setShow] = useState(false);

  return (
    <section id="resume">
      <a href="#" onClick={() => setShow(!show)}>
        <div className="recommendations btn">
          <i class="fas fa-thumbs-up fa-4x"></i>
          <h1>recommendations</h1>
        </div>
      </a>
      {show &&
        <div className="description">
          <p>"I mentored Lee during his time through Lighthouse Labs' intensive web development bootcamp. He is extremely hard-working and consistently put in the work needed to finish the curriculum, even when the going was tough. Lee quickly transformed from being uncertain about his work to fearlessly tackling difficult challenges head-on. I believe that he has the tenacity, persistence, and dedication to both excel as a junior developer and grow into a valuable member of any software team."</p>
          <i>-David Neuman, Mentor for Lighthouse Labs</i>
          <br />
          <br />
          <p>"It was impressive to observe Lee's progress, dedication, and persistence through the course. Lee showed to be curious, thoughtful, constructive in approaching the high workloads, as well as a great team player."</p>
          <i>
            -Max Kay, Mentor for Lighthouse Labs</i>
        </div>
      }
      <a href="#" onClick={() => setShow(!show)}>
        <div className="summary btn">
          <i class="fas fa-ellipsis-h fa-4x"></i>
          <h1>summary</h1>
        </div>
      </a>
      {show &&
        <div className="description">
          <p>Pharmacy tech turned full-stack web developer, eager to contribute to a team, sharpen & add new skills. I transformed my hobby for coding into a passion and took the leap to make it a career. I left my job with a partial scholarship from Lighthouse Labs to get the foundation I needed and am now excited about the new challenges awaiting.</p>
        </div>
      }
      <a href="#" onClick={() => setShow(!show)}>
        <div className="skills btn">
          <i class="fas fa-check fa-4x"></i>
          <h1>skills</h1>
        </div>
      </a>
      {show &&
        <div className="description">
          <h1>Skills</h1>
          <ul>
            <li><span className="strong">Languages:</span> HTML, CSS, JavaScript, SQL, & Ruby</li>
            <li><span className="strong">Frameworks & Libraries:</span> ReactJS, NodeJS, Express, Rails, jQuery, Bootstrap, Jest, Cypress, Mocha, Chai</li>
            <li><span className="strong">Database:</span> PostgresSQL</li>
          </ul>
        </div>
      }
      <a href="#" onClick={() => setShow(!show)}>
        <div className="education btn">
          <i class="fas fa-university fa-4x"></i>
          <h1>education</h1>
        </div>

      </a>
      {show &&
        <div className="description">
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
      }
      <a href="#" onClick={() => setShow(!show)}>
        <div className="employment btn">
          <i class="fas fa-building fa-4x"></i>
          <h1>employment</h1>
        </div>
      </a>
      {show &&
        <div className="description">
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
      }
    </section>
  )
}

export default CV;