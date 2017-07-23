import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>

              <Navbar.Brand>
                <a href="/">Home</a>
              </Navbar.Brand>
              <Navbar.Toggle />

              <Navbar.Brand>
                <a href="/about">About</a>
              </Navbar.Brand>
              <Navbar.Toggle />

              <Navbar.Brand>
                <a href="/about">Search Jobs</a>
              </Navbar.Brand>
              <Navbar.Toggle />

              <Navbar.Brand>
                <a href="/about">Useful Links</a>
              </Navbar.Brand>
              <Navbar.Toggle />

              <Navbar.Brand>
                <a href="/about">Submit Job</a>
              </Navbar.Brand>
              <Navbar.Toggle />

            </Navbar.Header>
          </Grid>
        </Navbar>

        <Jumbotron>
          <Grid>
            <h1>Welcome to Junior Dev Jobs</h1>
            <p>
              <Button
                bsStyle="success"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank">
                View React Bootstrap Docs
              </Button>
            </p>

            <p>
              <Button
                bsStyle="success"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank">
                I want to get paid to code
              </Button>
            </p>

            <p>
              <Button
                bsStyle="success"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank">
                I want to hire a junior dev
              </Button>
            </p>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
