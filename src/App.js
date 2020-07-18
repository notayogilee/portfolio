import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
import CoverLetter from './components/CoverLetter';
import CV from './components/CV';
import Projects from './components/Projects';

import './App.scss';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/coverLetter" component={CoverLetter} />
        <Route exact path="/cv" component={CV} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
