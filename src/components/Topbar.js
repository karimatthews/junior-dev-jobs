import { Navbar, Nav, NavItem} from 'react-bootstrap';
import React from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom'

import logo from '../images/logo.svg'

const Topbar = () => (
  <Navbar inverse fixedTop fluid collapseOnSelect>
    <div className = 'margin-set'>
      <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <img src = {logo} alt = {'failed to load'} className = 'image--topbar' />
            </Link>
          </Navbar.Brand>

        <Navbar.Toggle />
      </Navbar.Header>

      <Navbar.Collapse>
        <Nav pullRight>
          <LinkContainer className = 'navbar-link'  to="/searchjobs">
            <NavItem className = 'navbar-item'>
                Job Search
            </NavItem>
          </LinkContainer>

          <LinkContainer className = 'navbar-link' to="/submitjob">
            <NavItem className = 'navbar-item'>
                Submit Job
            </NavItem>
          </LinkContainer>

          <LinkContainer className = 'navbar-link'  to="/about">
            <NavItem className = 'navbar-item'>
                About
            </NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </div>
   </Navbar>
 )

export default Topbar
