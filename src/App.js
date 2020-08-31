import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import HomePage from './pages/Home/Home';
import BreweryDetailsPage from './pages/BreweryDetails/BreweryDetails';

import { getRandomBeer } from './services/api';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: []
    };
  }

  async componentDidMount() {
    const radomBeer = await getRandomBeer();

    this.setState({
      beer: radomBeer
    })
  }

  render() {
    const { beer } = this.state;

    return (
      <Router>
        <Header />
          <Switch>
            <Route exact path='/' component={() => <HomePage beer={beer} />} />
            <Route path='/details' component={() => <BreweryDetailsPage beer={beer} />} />
          </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
