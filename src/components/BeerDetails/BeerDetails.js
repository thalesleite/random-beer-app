import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CircularProgress from '@material-ui/core/CircularProgress';

import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { getBrewery } from '../../services/api';

import { setBrewery } from '../../redux/brewery/brewery.actions';
import { selectBeer } from '../../redux/beer/beer.selectors';
import { isLoading } from '../../redux/loading/loading.selectors';

import './BeerDetails.scss';

function BeerDetails({ beer, setBrewery, loading }) {
  return (
    <div>
      <section className="beer details">
        <Grid container spacing={4}>
          <Grid item sm={5} xs={12} className={beer?.length === 0 || loading ? 'hide' : ''}>
            <div className="details--box">
              <img src={beer?.labels?.large} alt=""/>
            </div>
          </Grid>
          <Grid item sm={7} xs={12} className={beer?.length === 0 || loading ? 'hide' : ''}>
            <div className="details--box">
              <h1 className="bottom-line">{ beer?.name }</h1>
              <p>
                { beer?.style?.description }
              </p>

              <h4 className="bottom-line">Breweries:</h4>
              {
                beer?.breweries ?
                  beer?.breweries.map( brewery => (
                    <div key={brewery?.id}>
                      <Link
                        className="brewery-link"
                        to="/brewery-details"
                        onClick={
                          async () => {
                            setBrewery(
                              await getBrewery(brewery?.id)
                            );
                        }}
                      >
                        { brewery?.name }
                      </Link>
                    </div>
                  )) : ''
              }
            </div>
          </Grid>
          <Grid item sm={12} xs={12} className={`loader ${loading ? '' : 'hide'}`}>
            <CircularProgress/>
          </Grid>
        </Grid>
      </section>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  beer: selectBeer,
  loading: isLoading
});

const mapDispatchToProps = dispatch => {
  return {
    setBrewery: brewery => dispatch(setBrewery(brewery))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BeerDetails);