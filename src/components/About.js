
import React from 'react'

const UsefulLinks = () => (

  <div className = 'wrapper'>

    <p>
      Here are some resources gathered through the experience of other junior developers.
      Chances are you will have seen many of these, but this pages is intended as a unique one-stop-shop for junior developers.
      This site is not intended as a stand-alone source. Go to meet-ups. Use LinkedIn. Talk to your friends. Good luck.

    </p>

    <p>
      Feel free to help improve this site. You can raise an issue or submit a pull request via
      <a href = 'https://github.com/karimatthews/junior-dev-jobs' target = '_blank' rel="noopener noreferrer"> GitHub</a>.
    </p>


    <h3> Genuinely useful tech specific sources </h3>

    <div className = 'useful-links'>
      <a href = 'https://stackoverflow.com/jobs?sort=i&q=junior&l=Melbourne%2C+Australia&d=20&u=Km' target= '_blank' rel="noopener noreferrer"> Stack Overflow Jobs </a>
    </div>



    <h3> Aimed at women </h3>

    <div className = 'useful-links'>
      <a href = 'https://codelikeagirl.org/job-seekers' target= '_blank' rel="noopener noreferrer"> Code Like a Girl Mailing List </a>
    </div>

    <h3> Meetups </h3>

    <div className = 'useful-links'>
      <a href = 'https://www.meetup.com/Junior-Developers-Melbourne/' target= '_blank' rel="noopener noreferrer"> Junior Developers Melbourne </a>
    </div>

    <div className = 'useful-links'>
      <a href = 'https://www.meetup.com/Ruby-On-Rails-Oceania-Melbourne/' target= '_blank' rel="noopener noreferrer"> Ruby and Rails Melbourne </a>
    </div>



    <h3> The classics </h3>

    <div className = 'useful-links'>
      <a href = 'https://www.seek.com.au/junior-jobs-in-information-communication-technology/in-All-Melbourne-VIC?subclassification=6287%2C6290%2C6302' target= '_blank' rel="noopener noreferrer"> Seek </a>
    </div>

    <div className = 'useful-links'>
      <a href = 'https://au.indeed.com/jobs?q=junior+developer+&l=Melbourne+VIC' target= '_blank' rel="noopener noreferrer"> Indeed</a>
    </div>

  </div>
)

export default UsefulLinks
