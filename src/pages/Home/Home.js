import React from 'react';

import RandomBeer from '../../components/RandomBeer/RandomBeer';
import BeerDetails from '../../components/BeerDetails/BeerDetails';

import './Home.scss';

function Home() {
    return (
        <div>
          <RandomBeer />
          <BeerDetails />
        </div>
    );
}

export default Home;