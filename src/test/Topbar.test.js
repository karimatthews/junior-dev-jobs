import React from 'react';
import { shallow } from 'enzyme';
import Topbar from '../components/Topbar';
import { Grid, Navbar } from 'react-bootstrap';

describe('Topbar Component', () => {
  it('renders without crashing', () => {
    shallow(<Topbar />)
  })

  describe('check for toggle', () => {
    it('does the topbar contain a toggle button', () => {
      const wrapper = shallow(<Topbar />);
      const toggle = <Navbar.Toggle />
      expect(wrapper).toContainReact(toggle)
    })
  })
})
