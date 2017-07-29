import { Grid, Navbar } from 'react-bootstrap';
import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../images/logo.svg'

const Topbar = () => (
  <Navbar inverse fixedTop>
    <Grid>
      <Navbar.Header>

        <Navbar.Brand>
          <Link to="/">
            <img src = {logo} alt = {'failed to load'} className = 'image--small' />
          </Link>

        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>


      <Navbar.Header>

        <Navbar.Brand>
          <Link to="/searchjobs">
            Job Search
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
          <Link to="/about">
            About
          </Link>

        </Navbar.Brand>
        <Navbar.Toggle />

      </Navbar.Header>
    </Grid>
   </Navbar>
 )

export default Topbar
