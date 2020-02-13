import React from 'react';
import MoodsFn from '../containers/MoodsFn';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import LandingPage from './landing/LandingPage';

export default function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/faceyface' component={MoodsFn} />
      </Switch>
    </Router>
    </>
    ) 
};
