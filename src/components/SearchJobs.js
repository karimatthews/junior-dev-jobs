import { Grid, Jumbotron, Button } from 'react-bootstrap';
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
        {
            this.state.jobs.map((job, i) => (
              <h3 key={i}>{ job.title }</h3>
            ))
        }
      </Grid>
    </Jumbotron>
  </div>
)}}

export default SearchJobs
