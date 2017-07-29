import React, {Component} from 'react'


class JobFetcher extends Component {

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
