import { Grid, Jumbotron, Button } from 'react-bootstrap';
import React from 'react'
import { Link } from 'react-router-dom'

import running from '../images/running.svg' // relative path to image

const Home = () => (

  <div className = 'container container--vertical wrapper'>

    <h1> Melbourne Junior Dev Jobs </h1>



    <div className = ''>
      <Link to="/searchjobs">
        <Button
          bsSize="large"
          className = "btn--main"
          // target="_blank"
          >
          I want to get paid to code
        </Button>
      </Link>
    </div>

    <div className = ''>
      <Link to = "/submitjob">
        <Button
          bsSize="large"
          className = "btn--main"
          // target="_blank"
          >
          I want to hire a junior dev
          </Button>
        </Link>
      </div>

    <img src = {running} alt = {'failed to load'} className = 'image' />
  </div>
)

export default Home
