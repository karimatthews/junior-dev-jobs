import { Grid, Jumbotron} from 'react-bootstrap';
import React from 'react'

const About = () => (
  <div>
    <Jumbotron>
      <Grid>
        <h2>About</h2>
      </Grid>
    </Jumbotron>

    <div className = "container container__feature">
      Whether you're looking to make a start in the Tech industry, or wanting to tap into
      the talent pool of junior developers, this app exists to make your life easier.
    </div>
  </div>
)

export default About
