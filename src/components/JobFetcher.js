import React, {Component} from 'react'


class JobFetcher extends Component {

  constructor() {
    super()
    this.state = {
      jobs: null
    }
  }

  componentWillMount() {
    fetch('https://junior-dev-jobs-backend.herokuapp.com/jobs').then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({ jobs: json.reverse() })
    })
  }

  render() {
    // Give all children of Jobfetcher a jobs prop (this.state.props)
    return (
      <div>

        { React.Children.map(this.props.children, (child) =>
          (React.cloneElement(child,
            {jobs: this.state.jobs}
          )))
        }
      </div>
    )
  }
}

export default JobFetcher
