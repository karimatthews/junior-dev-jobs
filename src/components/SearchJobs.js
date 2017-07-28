import { Grid, Jumbotron} from 'react-bootstrap';
import React, {Component} from 'react'

class SearchJobs extends Component{

  constructor() {
    super()
    this.state = {
      jobs: [],
      work_types: {internship: true, fulltime: true, parttime: true, casual: true, contract: true}
    }
  }

  componentWillMount() {
    fetch('http://localhost:3000/jobs').then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({ jobs: json.reverse() })
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

    <div className = 'container'>
      <div className = 'container container--vertical filter'>
        <h3>Filter and refine</h3>
        <p> Search </p>
        <p> Work type: </p>

        <div className="checkbox">
          <label><input type="checkbox" checked={this.state.work_types.internship} onChange = {
            (event) => {
              this.setState({work_types: { ...this.state.work_types, internship: event.target.checked}})
            }
          }/> Internship</label>
        </div>

        <div className="checkbox">
          <label><input type="checkbox" checked={this.state.work_types.fulltime} onChange = {
            (event) => {
              this.setState({work_types: { ...this.state.work_types, fulltime: event.target.checked}})
            }
          }/> Full Time</label>
        </div>

        <div className="checkbox">
          <label><input type="checkbox" checked={this.state.work_types.parttime} onChange = {
            (event) => {
              this.setState({work_types: { ...this.state.work_types, parttime: event.target.checked}})
            }
          }/> Part Time</label>
        </div>

        <div className="checkbox">
          <label><input type="checkbox" checked={this.state.work_types.contract} onChange = {
            (event) => {
              this.setState({work_types: { ...this.state.work_types, contract: event.target.checked}})
            }
          }/> Contract</label>
        </div>

        <div className="checkbox">
          <label><input type="checkbox" checked={this.state.work_types.casual} onChange = {
            (event) => {
              this.setState({work_types: { ...this.state.work_types, casual: event.target.checked}})
            }
          }/> Casual</label>
        </div>

        <p> Salary range </p>
        <p> Location </p>
        <p>Suburb </p>

      </div>

      <div className = 'container container--vertical'>
        {
            this.state.jobs.filter((job) => {
              return this.state.work_types[job.work_type.split(' ').join('')]
            }).map((job) => (
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
  </div>
)}}

export default SearchJobs
