import React from 'react'
import TimeStamp from 'react-timestamp'

const JobList = ({ jobs }) => (
  <div className = 'container container--vertical'>

    <span className = 'count-jobs'>Your search has returned {jobs.length} job{(jobs.length !== 1) && 's'}.</span>

    <br />

    {
        jobs.map((job) => (
          <div key={job.id} className = 'job container container--vertical'>

            {/* <div className = 'toprow'>
              <p className = 'title'>{ job.title }</p>
              <p className = "topright"> { job.work_type}</p>
            </div> */}

            <div className = 'toprow'>
              <p className = 'title'>{ job.title }</p>
              <p className = "topright">  <TimeStamp time = {job.created_at}  /></p>

            </div>

            <p> <strong>{ job.company }</strong> - { job.suburb}</p>
            {
              job.formatted_salary && <p>Salary: ${ job.formatted_salary}</p>
            }
            <p>{ job.description}</p>
          </div>
        ))
    }
  </div>

)

export default JobList
