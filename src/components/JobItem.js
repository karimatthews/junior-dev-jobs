import React, {Component}  from 'react'
import TimeStamp from 'react-timestamp'

class JobItem extends Component {

  constructor() {
    super()
    this.state = {
      expanded: false
    }
  }

  render() {

    const job = this.props.job

    return(
      <div key={ job.id } className = 'job container container--vertical'>
        <div className = 'toprow'>
          <p className = 'title'>{ job.title }</p>
          <p className = "topright">  <TimeStamp time = { job.created_at }  /></p>

        </div>

        <p>
          <strong> { job.company } </strong>

          {job.suburb ? <span> - { job.suburb } </span> : ""}

          { job.work_type === "unknown" ? "" : <span style = { {textTransform: 'capitalize'} }>- { job.work_type }</span>}
        </p>

        { job.formatted_salary && <p>Salary: ${ job.formatted_salary}</p> }

        { this.state.expanded ?
          <div>
            <p>{ job.description }</p>
            <a href = { job.source_link } target = '_blank' rel = 'noopener noreferrer'> See original listing</a>
          </div> :
          <div>
            <p>{ job.description.length > 20 ? job.description.split(' ').slice(0, 20).join(' ') + "..." : job.description }</p>

          </div>
        }

        <span className = 'show-more' onClick = { () => { this.setState({ expanded: !this.state.expanded }) } }>
          { this.state.expanded ? '- read less' : '+ read more' }
        </span>

      </div>
    )
  }
}

export default JobItem
