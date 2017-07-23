import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'



const Topbar = () => (
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
 )

export default Topbar
