import React from 'react';
import { shallow } from 'enzyme';
import JobItem from '../components/JobItem';

describe( 'JobItem Component', () => {
  // define a job we can work with (this could be extracted later with factorygirl)
  let job
  beforeEach(() => {
    job = {
      "id":1,
      "title":"Junior Software (Graduate) Developers",
      "company":"Dialog",
      "formatted_salary":100000,
      "description":"This is a job.",
      "suburb":"Melbourne CBD",
      "source_link":"https://www.dialog.com.au/careers/current-vacancies/melbourne/junior-software-graduate-developers/",
      "work_type":"full time",
      "created_at":"2017-07-30T05:16:16.308Z"
    }
  })
  it('renders a container div', () => {
    const wrapper =  shallow(<JobItem  job={job}/>);
    const container =   <div key = '1' className = 'job container container--vertical'></div>
  })

  describe('when the job item is not expanded', () => {
    describe('when the description is less than 20 words', () => {
      it('renders the whole description', () => {
        const wrapper =  shallow(<JobItem  job={job}/>);
        const description = <p>This is a job.</p>;
        expect(wrapper).toContainReact(description)
      })
    })

    describe('when the description is greater than 20 words', () => {
      beforeEach(() => {
        job.description = "q w e r t y u i o p a s d f g h j k l z x cv b n m"
      })
      it('renders 20 words of the description', () => {
        const wrapper =  shallow(<JobItem  job={job}/>);
        const description = <p>q w e r t y u i o p a s d f g h j k l z...</p>;
        expect(wrapper).toContainReact(description)
      })
    })
  })

  describe('when the job item is expanded', () => {
    describe('when the description is less than 20 words', () => {
      it('renders the whole description', () => {
        const wrapper = shallow(<JobItem  job={job}/>);
        wrapper.setState({expanded: true});
        const description = <p>This is a job.</p>;
        expect(wrapper).toContainReact(description)
      })
    })

    describe('when the description is greater than 20 words', () => {
      // set the description to be greater than 20 words
      beforeEach(() => {
        job.description = "q w e r t y u i o p a s d f g h j k l z x cv b n m"
      })
      it('renders the whole description', () => {
        const wrapper = shallow(<JobItem  job={job}/>);
        wrapper.setState({expanded: true});
        const description = <p>q w e r t y u i o p a s d f g h j k l z x cv b n m</p>;
        expect(wrapper).toContainReact(description)
      })
    })
  })
})
