import { Grid, Jumbotron, Button } from 'react-bootstrap';
import React from 'react'
import { Link } from 'react-router-dom'

import running from '../images/running.svg' // relative path to image

const Home = () => (
  <div>
    <Jumbotron>
      <Grid>
        <h1 className = 'heading'>Welcome to Junior Dev Jobs</h1>
      </Grid>
    </Jumbotron>

    <div className = 'container container--vertical'>

      <Link to="/searchjobs">
        <Button
          bsSize="large"
          className = "btn--main"
          // target="_blank"
          >
          I want to get paid to code
        </Button>
      </Link>

      <Link to = "/submitjob">
        <Button
          bsSize="large"
          className = "btn--main"
          // target="_blank"
          >
          I want to hire a junior dev
          </Button>
        </Link>

      <img src = {running} alt = {'failed to load'} className = 'image' />
    </div>
  </div>
)

export default Home
