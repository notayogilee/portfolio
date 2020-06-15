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
        <p>Condensed immersion based learning of languages, libraries, frameworks, databases and testing. Development techniques such as debugging, pair programming, and team version control.</p>
      </div>
    </section>
  )
}

export default CV;
