import { Grid, Navbar, Nav, NavItem} from 'react-bootstrap';
import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../images/logo.svg'

const Topbar = () => (
  <Navbar inverse fixedTop fluid collapseOnSelect>
        <Navbar.Header>

            <Navbar.Brand>
              <Link to="/">
                <img src = {logo} alt = {'failed to load'} className = 'image--topbar' />
              </Link>
            </Navbar.Brand>

            <Navbar.Toggle />
        </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem className = 'navbar-item'>
            <Link to="/searchjobs">
              Job Search
            </Link>
          </NavItem>

          <NavItem className = 'navbar-item'>
            <Link to="/submitjob">
              Submit Job
            </Link>
          </NavItem>

          <NavItem className = 'navbar-item'>
            <Link to="/about">
              About
            </Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
   </Navbar>
 )

export default Topbar
