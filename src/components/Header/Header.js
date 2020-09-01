import React from 'react';

import { Grid } from '@material-ui/core';

import './Header.scss';

function Header() {
    return (
      <div className="header">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <h1>the random beer</h1>
            <h3><i>"Be random: spend your time drinking!"</i></h3>
          </Grid>
        </Grid>
      </div>
    );
}

export default Header;