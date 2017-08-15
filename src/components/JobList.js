import React from 'react'
import JobItem from './JobItem'


const JobList = ({ jobs=[] }) => (



  <div className = 'container container--vertical'>
    <span className = 'count-jobs'>Your search has returned { jobs.length } job{ (jobs.length !== 1) && 's' }.</span>
    <br />

    {
        jobs.map((job) => (
          <JobItem  key = { job.id } job = { job } />
        ))
    }
  </div>
)

export default JobList
