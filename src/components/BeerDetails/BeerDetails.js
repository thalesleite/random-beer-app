import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectBeer } from '../../redux/beer/beer.selectors';
import { Grid } from '@material-ui/core';

import './BeerDetails.scss';

function BeerDetails({ beer }) {
    return (
        <div>
          <section className="beer-details">
            <Grid container spacing={4}>
              <Grid item sm={5} xs={12}>
                <div className="beer-details--box">
                 some picture
                </div>
              </Grid>
              <Grid item sm={7} xs={12}>
                <div className="beer-details--box">
                  <h1>{ beer?.name }</h1>

                  <p>
                    { beer?.style?.description }
                  </p>
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