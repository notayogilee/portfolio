import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
import CoverLetter from './components/CoverLetter';
import CV from './components/CV';
import Projects from './components/Projects';

import './App.css';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Main} />
        <Route exact path="/coverLetter" component={CoverLetter} />
        <Route exact path="/cv" component={CV} />
        <Route exact path="/projects" component={Projects} />
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
