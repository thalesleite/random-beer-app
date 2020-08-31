import React from 'react';

import { Grid } from '@material-ui/core';

import './BeerDetails.scss';

function BeerDetails({ beer }) {
    console.log(beer);

    return (
        <div>
          <section className="beer-details">
            <Grid container spacing={4}>
              <Grid item sm={5} xs={12}>
                some picture
              </Grid>
              <Grid item sm={7} xs={12}>
                <h1>{ beer?.name }</h1>

                <p>
                  { beer?.style?.description }
                </p>
              </Grid>
            </Grid>
          </section>
        </div>
    );
}

export default BeerDetails;