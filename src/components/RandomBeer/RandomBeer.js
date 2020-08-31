import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Grid, Button } from '@material-ui/core';

import { getRandomBeer } from '../../services/api';

import { setBeer } from '../../redux/beer/beer.actions';

import './RandomBeer.scss';

class RandomBeer extends Component {

  async handleRandomBeer(event) {
    event.preventDefault();

    const { setBeer } = this.props;
    const radomBeer = await getRandomBeer();

    setBeer(radomBeer);
  }

  render() {
    return (
        <div>
          <section className="random-beer">
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Button
                    className="btn-beer"
                    type="button"
                    onClick={event => { this.handleRandomBeer(event) }}
                  >
                    Try another beer
                </Button>
              </Grid>
            </Grid>
          </section>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  beer: state.beer
});

const mapDispatchToProps = dispatch => {
  return {
    setBeer: beer => dispatch(setBeer(beer))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RandomBeer);