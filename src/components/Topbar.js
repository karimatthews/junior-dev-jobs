import { Navbar, Nav, NavItem} from 'react-bootstrap';
import React from 'react'
import { LinkContainer } from 'react-router-bootstrap';

import logo from '../images/logo.svg'

const Topbar = () => (
  <Navbar inverse fixedTop fluid collapseOnSelect>
    <div className = 'margin-set'>
      <Navbar.Header>
        <LinkContainer to="/">
          <NavItem id = 'logo'>
            <img src = {logo} alt = {'failed to load'} className = 'image--topbar' />
          </NavItem>
        </LinkContainer>

        <Navbar.Toggle />
      </Navbar.Header>

      <Navbar.Collapse>
        <Nav pullRight>
          <LinkContainer to="/searchjobs">
            <NavItem className = 'navbar-item'>
                Job Search
            </NavItem>
          </LinkContainer>

          <LinkContainer to="/submitjob">
            <NavItem className = 'navbar-item'>
                Submit Job
            </NavItem>
          </LinkContainer>

          <LinkContainer to="/about">
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
