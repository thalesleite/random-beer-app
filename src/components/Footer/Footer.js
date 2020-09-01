import React from 'react';

import { Grid } from '@material-ui/core';
//import { Link } from 'react-router-dom';

import './Footer.scss';

function Footer() {
  let newDate = new Date()
  let year = newDate.getFullYear();

  return (
    <footer className="footer">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <span>Copyright © {year} The Random Beer</span>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;