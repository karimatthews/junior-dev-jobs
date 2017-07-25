import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css';
import './SearchJobs.css';
import './SubmitJob.css';

//import components
import Topbar from './components/Topbar'

import Home from './components/Home'
import About from './components/About'
import SearchJobs from './components/SearchJobs'
import SubmitJob from './components/SubmitJob'
import UsefulLinks from './components/UsefulLinks'


const App = () => (
  <Router>
    <div>
      <Topbar />
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/searchjobs" component={SearchJobs}/>
      <Route path="/submitjob" component={SubmitJob}/>
      <Route path="/usefullinks" component={UsefulLinks}/>
    </div>
  </Router>
)
export default App
