import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CircularProgress from '@material-ui/core/CircularProgress';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { selectBrewery } from '../../redux/brewery/brewery.selectors';
import { isLoading } from '../../redux/loading/loading.selectors';

import './BreweryDetails.scss';

function BreweryDetails({ brewery, loading }) {
    return (
      <div>
        <section className="brewery container details">
          <Grid container spacing={4}>
            <Grid item sm={12} xs={12}>
              <Link to="/">
                <ArrowBackIcon className="arrow-icon"/>
              </Link>
            </Grid>
            <Grid item sm={5} xs={12} className={brewery?.length === 0 || loading ? 'hide' : ''}>
                <div className="details--box">
                  <img src={brewery?.images?.large} />
                </div>
            </Grid>
            <Grid item sm={7} xs={12} className={brewery?.length === 0 || loading ? 'hide' : ''}>
                <div className="details--box">
                  <h1 className="bottom-line">{ brewery?.name }</h1>
                  <p>
                    { brewery?.description }
                  </p>

                  <h4 className="bottom-line">
                    Start Year: { brewery?.established }
                  </h4>
                </div>
            </Grid>
            <Grid item sm={12} xs={12} className={brewery?.length === 0 && !loading ? '' : 'hide'}>
              <h2>Go back and choose some brewery!</h2>
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
  brewery: selectBrewery,
  loading: isLoading
});

export default connect(mapStateToProps)(BreweryDetails);