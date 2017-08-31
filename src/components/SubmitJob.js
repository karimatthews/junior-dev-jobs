
import React from 'react'



class SubmitJob extends React.Component {

  constructor(props) {
    super(props);
    this.state = {title: '', company: '', suburb: '', salary: '', work_type: '', description:'', source_link:''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const payload = JSON.stringify(this.state)

    fetch("https://junior-dev-jobs-backend.herokuapp.com/jobs", {
      method: "POST",
      body: payload
    }).then(this.handleRedirect.bind(this))
  }

  handleRedirect(res){
    if( res.status === 200 ){
      // redirect here
      this.props.history.push('/searchjobs')
    }else {
      // Something went wrong here
    }
  }

  render() {
    return (
      <div className = 'wrapper '>


        <div className = 'container container--vertical'>

          <h3>Submit Job</h3>

          <br/>

          <form onSubmit = {this.handleSubmit}>

            <div className="form-group">
              <label className = 'col-4'>Job Title: *
                <input type="text" value = {this.state.title} onChange = {(event) => {this.setState({title: event.target.value})}}
                    className="form-control" name="title" required = "true" autoCorrect="off" autoCapitalize="words"/>
              </label>
            </div>


            <div className="form-group">
              <label>Company:
              <input type="text" value = {this.state.company} onChange = {(event) => {this.setState({company: event.target.value})}}
                className="form-control" name="company"  autoCorrect="off" autoCapitalize="words"/>
              </label>
            </div>

            <div className="form-group">
              <label>Annual Salary:
                <div className="left-inner-addon">
                  <span>$</span>
                    <input type="number" value = {this.state.salary} onChange = {(event) => {this.setState({salary: event.target.value})}}
                      className="form-control" name="salary" id = "salary" />
                      {/* // onKeyUp = {(event) => {event.target.value = event.target.value.replace(/ /g,""); */}
                      {/* // event.target.value = event.target.value.replace(/\B(?=(\d{3}))/g, " ");}}/ */}

                </div>
              </label>
            </div>

            <div className="form-group">
              <label>Work Type:
              <select value = {this.state.work_type} onChange = {(event) => {this.setState({work_type: event.target.value})}}
                className="form-control" name="work_type" min = "0" max = '200000'  >
                <option value ="" disabled > -- select an option -- </option>
                <option> Full Time </option>
                <option> Part Time </option>
                <option> Internship </option>
                <option> Contract </option>
                <option> Casual </option>
              </select>
              </label>
            </div>

            <div className="form-group">
              <label>Suburb:
              <input type="text" value = {this.state.suburb} onChange = {(event) => {this.setState({suburb: event.target.value})}}
                className="form-control" name="suburb" autoCorrect="off" autoCapitalize="words"/>
              </label>
            </div>

            <div className="form-group">
              <label>Description: *
              <textarea value = {this.state.description} onChange = {(event) => {this.setState({description: event.target.value})}}
                className="form-control" name="description"  required = "true" rows = '4'>
              </textarea>
              </label>
            </div>

            <div className="form-group">
              <label>Source Link: *
              <input type="text" value = {this.state.source_link} onChange = {(event) => {this.setState({source_link: event.target.value})}}
                className="form-control" name="source_link" required = "true"/>
              </label>
            </div>

            <input type="submit" value = "Submit" className = "btn btn-primary"/>

          </form>
        </div>
      </div>
    )
  }
}


export default SubmitJob
