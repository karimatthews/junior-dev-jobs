import React from 'react';
import { shallow } from 'enzyme';
import JobList from '../components/JobList';
import JobItem from '../components/JobItem';

describe( 'JobList Component', () => {
  describe( 'When there are no jobs', () => {
    it('renders zero jobs message', () => {
      const wrapper = shallow(<JobList />);
      const message = <span className = 'count-jobs'>Your search has returned 0 jobs.</span>;
      // expect(wrapper.contains(welcome)).to.equal(true);
      expect(wrapper.contains(message)).toEqual(true);
    });
  })

  describe( 'When there are jobs', () => {
    it('renders zero jobs message', () => {
      const wrapper = shallow(<JobList jobs={[{id: 1}]}/> );
      const message = <span className = 'count-jobs'>Your search has returned 1 job.</span>;
      const jobitem = <JobItem  key = '1' job = { {id: 1} } />
      // expect(wrapper.contains(welcome)).to.equal(true);
      expect(wrapper.contains(message)).toEqual(true);
      expect(wrapper.contains(jobitem)).toEqual(true);
    });
  })
})
