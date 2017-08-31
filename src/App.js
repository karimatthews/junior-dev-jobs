import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'


import './App.css';
import './Topbar.css';
import './Home.css';
import './About.css';
import './SearchJobs.css';
import './SubmitJob.css';


//import components
import Topbar from './components/Topbar'

import Home from './components/Home'
import SearchJobs from './components/SearchJobs'
import SubmitJob from './components/SubmitJob'
import About from './components/About'


const App = () => (
  <Router>
    <div>
      <Topbar />
      <Route exact path="/" component={Home}/>
      <Route path="/searchjobs" component={SearchJobs}/>
      <Route path="/submitjob" component={SubmitJob}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
)
export default App
