import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import CoverLetter from './components/CoverLetter';
import CV from './components/CV';
import Contact from './components/Contact';


import './App.css';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" />
        <Route exact path="/coverLetter" component={CoverLetter} />
        <Route exact path="/cv" component={CV} />
        <Route exact path="/contact" component={Contact} />
      </Fragment>
    </Router>
  );
}

export default App;
