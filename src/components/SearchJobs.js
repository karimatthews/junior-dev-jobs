import React, {Component} from 'react'
import uniq from 'lodash/uniq'
import includes from 'lodash/includes'
import JobFetcher from './JobFetcher'
import JobList from './JobList'

const JOB_TYPES = {
  internship: 'Internship',
  fulltime: 'Full time',
  parttime: 'Part time',
  contract: 'Contract',
  casual: 'Casual',
  unknown: 'Unknown'
}

class FilterJobs extends Component {
  constructor() {
    super()
    this.state = {
      search: "",
      workTypes: Object.keys(JOB_TYPES).reduce((acc, val) => {acc[val] = true; return acc}, {}),
      suburb: "All suburbs"
    }
  }

  onCheckboxChecked = checkboxName => event => {
    this.setState({
      workTypes: { 
        ...this.state.workTypes, 
        [checkboxName]: event.target.checked
      }
    })
  }

  onSearchInput = event => {
    this.setState({search: event.target.value})
  }

  onSelectSuburb = event => {
    this.setState({suburb: event.target.value})
  }

  getUniqueSuburbs() {
    if (!this.props.jobs) return []
    return uniq(this.props.jobs.map(job => job.suburb))
      .filter(suburb => suburb)
  }

  render() {
    let filteredJobs
    if (this.props.jobs == null) {
      filteredJobs = []
    } else {
     filteredJobs = this.props.jobs.filter((job) => {
        const matchesSearch = includes(JSON.stringify(job).toLowerCase(), this.state.search.toLowerCase())
        const matchesWorkType = this.state.workTypes[job.work_type.split(' ').join('')]
        const matchesSuburb = (this.state.suburb === 'All suburbs' || includes(this.state.suburb, job.suburb))
        return matchesWorkType && matchesSearch && matchesSuburb
      })
    }
    return (
      <div className = 'wrapper'>
        <div className = ' container container--vertical filter'>
          <h3>Search Jobs</h3>
          <br/>

          <div className = 'flex-row' >
            <input type="text" 
              className="form-control search form-control--narrow" 
              placeholder="Search" value = {this.state.search} 
              onChange={this.onSearchInput} 
            />
          </div>
          <br/>

          <strong> Work type: </strong>
          {Object.entries(JOB_TYPES).map(([key, title]) => (
            <div className="checkbox" key={key}>
              <label>
                <input type="checkbox" 
                  checked={this.state.workTypes[key]} 
                  onChange={this.onCheckboxChecked(key)}
                />
                {title}
              </label>
            </div>
          ))}
          <br/>

          <div className="form-group">
            <label>Suburb:</label>
            <select className="form-control suburb" 
              value={this.state.suburb} 
              onChange={this.onSelectSuburb}>
              <option> All suburbs </option>
              {this.getUniqueSuburbs().map(
                suburb => <option key={suburb}> {suburb} </option>
              )}
            </select>
          </div>
        </div>

        {this.props.jobs ? <JobList jobs={filteredJobs} /> : <div> Loading... </div> }
      </div>
  )
}}


const SearchJobs = () => (
    <JobFetcher>
      <FilterJobs />
    </JobFetcher>
)

export default SearchJobs
