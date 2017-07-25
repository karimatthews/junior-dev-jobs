import { Grid, Jumbotron, Button } from 'react-bootstrap';
import React from 'react'

class SubmitJob extends React.Component {

  constructor(props) {
    super(props);
    this.state = {title: '', company: '', suburb: '', salary: '', work_type: '', description:'', source_link:''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('A job was submitted: ');
    event.preventDefault();

    const payload = JSON.stringify(this.state)

    fetch("http://localhost:3000/jobs", {
      method: "POST",
      body: payload
    })
  }

  render() {

    console.log(this.state)
    return (

      <div>
        <Jumbotron>
          <Grid>
            <h2>Submit Job</h2>
          </Grid>
        </Jumbotron>


      <form className = "form" onSubmit = {this.handleSubmit}>

        <div className="form-group">
          <label>Job Title:
            <input type="text" value = {this.state.title} onChange = {(event) => {this.setState({title: event.target.value})}}
              className="form-control" name="title" />
          </label>
        </div>

        <div className="form-group">
          <label>Company:
          <input type="text" value = {this.state.company} onChange = {(event) => {this.setState({company: event.target.value})}}
            className="form-control" name="company" />
          </label>
        </div>

        <input type="submit" value = "Submit" />

      </form>

      </div>
    )
  }
}

export default SubmitJob
