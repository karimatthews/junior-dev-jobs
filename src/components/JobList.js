import React from 'react'

const JobList = ({ jobs: jobs }) => (
  <div className = 'container container--vertical'>

    <span>Your search has returned {jobs.length} job{(jobs.length !== 1) && 's'}.</span>

    <br />

    {
        jobs.map((job) => (
          <div key={job.id} className = 'job container container--vertical'>

            <div className = 'toprow'>
              <p className = 'title'>{ job.title }</p>
              <p className = "topright"> { job.work_type}</p>
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
