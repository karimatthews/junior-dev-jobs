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
        <h2>Search Jobs</h2>

      </Grid>
    </Jumbotron>


    {/* Display Jobs */}
    <div className = 'container container--vertical'>
      {
          this.state.jobs.reverse().map((job, i) => (
            <div key={i} className = 'job'>
              <h3>{ job.title }</h3>
              <strong>{ job.company }</strong>
              <p>{ job.suburb}</p>
              <p>{ job.work_type}</p>
              <p>${ job.formatted_salary}</p>
              <p>{ job.description}</p>
            </div>
          ))
      }
    </div>
  </div>
)}}

export default SearchJobs
