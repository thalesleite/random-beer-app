import React from 'react';

import { Grid } from '@material-ui/core';

import './BeerDetails.scss';

function BeerDetails() {
    return (
        <div>
          <section className="beer-details">
            <Grid container spacing={4}>
              <Grid item xs={7}>
                some picture
              </Grid>
              <Grid item xs={5}>
                <h1>Title</h1>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, molestias error. 
                  Recusandae cumque quam incidunt est odit quod earum delectus modi! Dignissimos, magni. 
                  Consectetur a inventore impedit dolore quos saepe.
                </p>
              </Grid>
            </Grid>
          </section>
        </div>
    );
}

export default BeerDetails;