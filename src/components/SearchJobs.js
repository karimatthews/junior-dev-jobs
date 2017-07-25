import { Grid, Jumbotron} from 'react-bootstrap';
import React, {Component} from 'react'

class SearchJobs extends Component{

  constructor() {
    super()
    this.state = {
      jobs: []
    }
  }

  componentWillMount() {
    fetch('http://localhost:3000/jobs').then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({ jobs: json })
    })
  }

  render() {
  return (
  <div>
    <Jumbotron>
      <Grid>
        <h2>Job Search</h2>

      </Grid>
    </Jumbotron>


    {/* Display Jobs */}
    <div className = 'container container--vertical'>
      {
          this.state.jobs.reverse().map((job) => (
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
  </div>
)}}

export default SearchJobs
