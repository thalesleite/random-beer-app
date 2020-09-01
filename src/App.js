import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import HomePage from './pages/Home/Home';
import BreweryDetailsPage from './pages/BreweryDetails/BreweryDetails';

import { getRandomBeer } from './services/api';

import { setBeer } from './redux/beer/beer.actions';

import './App.scss';

class App extends React.Component {

  async componentDidMount() {
    const { setBeer } = this.props;
    const radomBeer = await getRandomBeer();

    setBeer(radomBeer);
  }

  render() {
    return (
      <Router>
        <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/brewery-details' component={BreweryDetailsPage} />
          </Switch>
        <Footer />
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  beer: state.beer
});

const mapDispatchToProps = dispatch => {
  return {
    setBeer: beer => dispatch(setBeer(beer))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
