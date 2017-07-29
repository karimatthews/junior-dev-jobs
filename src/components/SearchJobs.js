import { Grid, Jumbotron} from 'react-bootstrap';
import React, {Component} from 'react'
import uniq from 'lodash/uniq'
import includes from 'lodash/includes'
import JobFetcher from './JobFetcher'
import JobList from './JobList'

class FilterJobs extends Component{

  constructor() {
    super()
    this.state = {
      search: "",
      work_types: {internship: true, fulltime: true, parttime: true, casual: true, contract: true},
      suburb: "All suburbs"
    }
  }



  render() {

    const filteredJobs = this.props.jobs.filter((job) => {
        const matchesSearch = includes(JSON.stringify(job).toLowerCase(), this.state.search.toLowerCase())
        const matchesWorkType = this.state.work_types[job.work_type.split(' ').join('')]
        const matchesSuburb = (this.state.suburb === 'All suburbs' || includes(this.state.suburb, job.suburb))

        return matchesWorkType && matchesSearch && matchesSuburb
      })



    return (

      <div className = 'container'>
        <div className = 'container container--vertical filter'>
          <h3>Filter and refine</h3>

          <br/>

          <div className = 'flex-row'>
            <input type="text" className="form-control search" placeholder="Search" value = {this.state.search} onChange = {
              (event) => {
                this.setState({search: event.target.value})
              }
            } />
          </div>

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
            <label>Suburb:</label>
            <select className="form-control" value = {this.state.suburb} onChange = {
              (event) => {
                this.setState({suburb: event.target.value})
              }
            }>
              <option> All suburbs </option>
              {
                uniq(this.props.jobs.map((job) => (
                  job.suburb
                ))).map((suburb) => (
                  <option key= {suburb}> {suburb} </option>
                ))
              }
            </select>
          </div>

        </div>

        <JobList jobs={filteredJobs} />

      </div>
  )
}}



const SearchJobs = () => (
  <div className = 'wrapper'>
    <JobFetcher>
      <FilterJobs />
    </JobFetcher>
  </div>
)

export default SearchJobs
