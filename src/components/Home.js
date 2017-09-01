import { Button } from 'react-bootstrap';
import React from 'react'
import { Link } from 'react-router-dom'
import MetaTags from 'react-meta-tags';

const Home = () => (

  <div className="wrapper">
    <MetaTags>
       <title>Junior Developer Jobs</title>
       <meta id="meta-description" name="description" content=
         "Melbourne Junior Dev Jobs exists to help local junior developers get thier start in the tech world."
       />
       <meta id="og-title" property="og:title" content="MyApp" />
       <meta id="og-image" property="og:image" content="images/logo.svg" />
    </MetaTags>

    <div id = 'landing-background'>

    <div className = 'centered'>
      <h1 className = 'landing-title'> Melbourne Junior Dev Jobs </h1>

      <div className = 'button-container'>
        <Link to="/searchjobs">
          <Button
            bsSize="large"
            className = "btn btn--home"
            // target="_blank"
            >
            I want to get paid to code
          </Button>
        </Link>
      </div>

      <div className = 'button-container'>
        <Link to = "/submitjob">
          <Button
            bsSize="large"
            className = "btn btn--home"
            // target="_blank"
            >
            I want to hire a junior developer
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default Home
