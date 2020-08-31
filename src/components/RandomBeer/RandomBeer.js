import React from 'react';

import { Grid, Button } from '@material-ui/core';

import './RandomBeer.scss';

function RandomBeer() {
    return (
        <div>
          <section className="random-beer">
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Button
                    className="btn-beer"
                    type="button"
                  >
                    Try another beer
                </Button>
              </Grid>
            </Grid>
          </section>
        </div>
    );
}

export default RandomBeer;