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
            <img src = {logo} alt = {'failed to load'} className = 'image--topbar' />
          </Link>
        </Navbar.Brand>
      </Navbar.Header>


      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/searchjobs">
            Job Search
          </Link>
        </Navbar.Brand>
      </Navbar.Header>

      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/submitjob">
            Submit Job
          </Link>
        </Navbar.Brand>
      </Navbar.Header>

      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/about">
            About
          </Link>
        </Navbar.Brand>
      </Navbar.Header>

      <Navbar.Toggle />
    </Grid>
   </Navbar>
 )

export default Topbar
