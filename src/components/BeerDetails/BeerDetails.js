import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectBeer } from '../../redux/beer/beer.selectors';
import { Grid } from '@material-ui/core';

import { Link } from 'react-router-dom';

import './BeerDetails.scss';

function BeerDetails({ beer }) {
    return (
        <div>
          <section className="beer-details">
            <Grid container spacing={4}>
              <Grid item sm={5} xs={12}>
                <div className="beer-details--box">
                 <img src={beer?.labels?.large} alt=""/>
                </div>
              </Grid>
              <Grid item sm={7} xs={12}>
                <div className="beer-details--box">
                  <h1 className="bottom-line">{ beer?.name }</h1>
                  <p>
                    { beer?.style?.description }
                  </p>

                  <h4 className="bottom-line">Breweries:</h4>
                  {
                    beer?.breweries ?
                      beer?.breweries.map( brewery => (
                        <div key={brewery.id}>
                          <Link
                            className="brewery-link"
                            to="/brewery-details"
                          >
                            { brewery?.name }
                          </Link>
                        </div>
                      )) : ''
                  }
                </div>
              </Grid>
            </Grid>
          </section>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
  beer: selectBeer
});

export default connect(mapStateToProps)(BeerDetails);