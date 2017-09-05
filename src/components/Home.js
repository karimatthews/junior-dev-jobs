import { Button } from 'react-bootstrap';
import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => (

  <div className="wrapper">


    <div className = 'landing-background'>

    <div className = 'centered'>
      <h1 className = 'landing-title'> Melbourne Junior Dev Jobs </h1>

      <div className = 'button-container'>
        <Link to="/searchjobs">
          <Button
            bsSize="large"
            className = "btn btn--home"
            // target="_blank"
            >
            I want to get paid to code
          </Button>
        </Link>
      </div>

      <div className = 'button-container'>
        <Link to = "/submitjob">
          <Button
            bsSize="large"
            className = "btn btn--home"
            // target="_blank"
            >
            I want to hire a junior developer
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default Home
