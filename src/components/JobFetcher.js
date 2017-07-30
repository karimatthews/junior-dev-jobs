import React, {Component} from 'react'


class JobFetcher extends Component {

  constructor() {
    super()
    this.state = {
      jobs: []
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
