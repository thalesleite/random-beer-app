import React from 'react';

import RandomBeer from '../../components/RandomBeer/RandomBeer';
import BeerDetails from '../../components/BeerDetails/BeerDetails';

import './Home.scss';

function Home({ beer }) {
    return (
        <div className="container">
          <RandomBeer />
          <BeerDetails beer={beer} />
        </div>
    );
}

export default Home;