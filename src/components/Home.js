import { Grid, Jumbotron, Button } from 'react-bootstrap';
import React from 'react'

import running from '../images/running.svg' // relative path to image

const Home = () => (
  <div>
    <Jumbotron>
      <Grid>
        <h1 className = 'heading'>Welcome to Junior Dev Jobs</h1>
      </Grid>
    </Jumbotron>

    <div className = 'container container--vertical'>

      <Button
        bsStyle="success"
        bsSize="large"
        href="/searchjobs"
        className = "btn--main"
        // target="_blank"
        >
        I want to get paid to code
      </Button>

      <Button
        bsStyle="success"
        bsSize="large"
        href="/submitjob"
        className = "btn--main"
        // target="_blank"
        >
        I want to hire a junior dev
        </Button>

      <img src = {running} alt = {'logo'} className = 'image' />
    </div>
  </div>
)

export default Home
