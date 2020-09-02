import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import HomePage from './pages/Home/Home';
import DetailsPage from './pages/Details/Details';

import { getRandomBeer } from './services/api';

import { setBeer } from './redux/beer/beer.actions';
import { setLoading } from './redux/loading/loading.actions';

import './App.scss';

class App extends React.Component {

  async componentDidMount() {
    const { setBeer, setLoading } = this.props;
    setLoading(true);
    const radomBeer = await getRandomBeer();

    await setBeer(radomBeer);
    setLoading(false);
  }

  render() {
    return (
      <Router>
        <Header />
          <div className="container">
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/brewery-details' component={DetailsPage} />
            </Switch>
          </div>
        <Footer />
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setBeer: beer => dispatch(setBeer(beer)),
    setLoading: loading => dispatch(setLoading(loading))
  }
};

export default connect(null, mapDispatchToProps)(App);
