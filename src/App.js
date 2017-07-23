
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import running from './images/running.svg' // relative path to image

const Home = () => (
  <div>
    <Jumbotron>
      <Grid>



        <h1>Welcome to Junior Dev Jobs</h1>


        <p>
          <Button
            bsStyle="success"
            bsSize="large"
            href="/searchjobs"
            // target="_blank"
            >
            I want to get paid to code
          </Button>
        </p>

        <p>
          <Button
            bsStyle="success"
            bsSize="large"
            href="/submitjob"
            // target="_blank"
            >
            I want to hire a junior dev
          </Button>
        </p>

        <img src = {running} alt = {'logo'} className="img-responsive"/>

        
      </Grid>
    </Jumbotron>
  </div>
)

const About = () => (
  <div>
    <Jumbotron>
      <Grid>
        <h2>About</h2>
      </Grid>
    </Jumbotron>
  </div>
)

const SearchJobs = () => (
  <div>
    <Jumbotron>
      <Grid>
        <h2>Search Jobs</h2>
      </Grid>
    </Jumbotron>
  </div>
)

const SubmitJob = () => (
  <div>
    <Jumbotron>
      <Grid>
        <h2>Submit Job</h2>
      </Grid>
    </Jumbotron>
  </div>
)

const UsefulLinks = () => (
  <div>
    <Jumbotron>
      <Grid>
        <h2>Useful Links</h2>
      </Grid>
    </Jumbotron>
  </div>
)





const App = () => (
  <Router>
    <div>
      <Navbar inverse fixedTop>
        <Grid>
          <Navbar.Header>

            <Navbar.Brand>
              <Link to="/">
                Home
              </Link>

            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Header>

            <Navbar.Brand>
              <Link to="/about">
                About
              </Link>

            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Header>

            <Navbar.Brand>
              <Link to="/searchjobs">
                Search Jobs
              </Link>

            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Header>

            <Navbar.Brand>
              <Link to="/submitjob">
                Submit Job
              </Link>

            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Header>

            <Navbar.Brand>
              <Link to="/usefullinks">
                Useful Links
              </Link>

            </Navbar.Brand>
            <Navbar.Toggle />

          </Navbar.Header>
        </Grid>
       </Navbar>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/searchjobs" component={SearchJobs}/>
      <Route path="/submitjob" component={SubmitJob}/>
      <Route path="/usefullinks" component={UsefulLinks}/>

    </div>
  </Router>
)
export default App
