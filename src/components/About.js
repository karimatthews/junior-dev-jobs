
import React from 'react'

const UsefulLinks = () => (

  <div className = 'wrapper'>

    <div className = 'container container--vertical'>
      <h3>About</h3>

      <div className = 'block'>
        <p>
          This site is made by Junior Developers based in Melbourne Australia, specifically for the use of other local juniors.
          It aims to be a clear and user-friendly resource for job-seekers.
        </p>
        <br/>
        <p>
          We'd love your help improving the experience for everyone. You can raise an issue or submit a pull request via
          <span> </span>
          <a href = 'https://github.com/karimatthews/junior-dev-jobs' target = '_blank' rel="noopener noreferrer">GitHub</a>.
        </p>
      </div>

      <h3>Useful Links</h3>

      <div className = 'block'>
        <p>
          <a href = 'https://stackoverflow.com/jobs?sort=i&q=junior&l=Melbourne%2C+Australia&d=20&u=Km'
          target= '_blank' rel="noopener noreferrer"> Stack Overflow Jobs </a>
        </p>

        <p className = 'useful-links' >
          <a href = 'https://codelikeagirl.org/job-seekers'
          target= '_blank' rel="noopener noreferrer"> Code Like a Girl Mailing List </a>
        </p>

        <p className = 'useful-links'>
          <a href = 'https://www.meetup.com/Junior-Developers-Melbourne/'
          target= '_blank' rel="noopener noreferrer"> Junior Developers Melbourne </a>
        </p>

      </div>

    </div>
  </div>
)


export default UsefulLinks
