import axios from 'axios';

const corsUrl = 'https://cors-anywhere.herokuapp.com/';
const url = 'http://api.brewerydb.com/v2/beer/random/?withBreweries=Y&hasLabels=Y&key=a5c1b917e7ba62dcd79f434ed73bc72d&format=json';

export const getRandomBeer = async () => {
  try {
    const response = await axios.get(`${corsUrl + url}`);
    const resp = response.data;
    return resp.data;
  } catch (error) {
    return `ERROR: Unable to get beers!, ${error}`;
  }
}