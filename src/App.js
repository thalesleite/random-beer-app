import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import HomePage from './pages/Home/Home';
import BreweryDetailsPage from './pages/BreweryDetails/BreweryDetails';

import './App.scss';

function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/details' component={BreweryDetailsPage} />
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
