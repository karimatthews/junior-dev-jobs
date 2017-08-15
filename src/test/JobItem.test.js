import React from 'react';
import { shallow } from 'enzyme';
import JobItem from '../components/JobItem';

// define a job we can work with (this could be extracted later with factorygirl)
const job = {
  "id":1,
  "title":"Junior Software (Graduate) Developers",
  "company":"Dialog",
  "formatted_salary":null,
  "description":"This is a job.",
  "suburb":"Melbourne CBD",
  "source_link":"https://www.dialog.com.au/careers/current-vacancies/melbourne/junior-software-graduate-developers/",
  "work_type":"full time",
  "created_at":"2017-07-30T05:16:16.308Z"
}

describe( 'JobItem Component', () => {
    it('renders without crashing', () => {
      shallow(<JobItem  job={job}/>);
    });
})
