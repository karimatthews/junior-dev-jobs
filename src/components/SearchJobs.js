import { Grid, Jumbotron} from 'react-bootstrap';
import React, {Component} from 'react'
import uniq from 'lodash/uniq'
import includes from 'lodash/includes'

class SearchJobs extends Component{

  constructor() {
    super()
    this.state = {
      search: "",
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

        <br/>


        <input type="text" className="form-control" placeholder="Search" value = {this.state.search} onChange = {
          (event) => {
            this.setState({search: event.target.value})
          }
        } />
      
        <br/>

        <strong> Work type: </strong>

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

        <br/>

        <div className="form-group">
          <label for="sel1">Suburb:</label>
          <select className="form-control" multiple>
            {
              uniq(this.state.jobs.map((job) => (
                job.suburb
              ))).map((suburb) => (
                <option> {suburb} </option>
              ))
            }
          </select>
        </div>

      </div>

      <div className = 'container container--vertical'>
        {
            this.state.jobs.filter((job) => {
              const matchesWorkType = this.state.work_types[job.work_type.split(' ').join('')]
              const matchesSearch = includes(JSON.stringify(job).toLowerCase(), this.state.search.toLowerCase())

              return matchesWorkType && matchesSearch
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
