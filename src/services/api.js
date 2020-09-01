import axios from 'axios';

const corsUrl = 'https://cors-anywhere.herokuapp.com/';
const key = 'a5c1b917e7ba62dcd79f434ed73bc72d';

export const getRandomBeer = async () => {
const url = `http://api.brewerydb.com/v2/beer/random/?withBreweries=Y&hasLabels=Y&format=json&key=${key}`;

  try {
    const response = await axios.get(`${corsUrl + url}`);
    const dataRandom = response?.data?.data;
    const dataBeer = await getBeerLabels(dataRandom?.id);
    const data = {...dataRandom, ...{labels: dataBeer?.labels}};

    return data;
  } catch (error) {
    return `ERROR: Unable to get a random beer!, ${error}`;
  }
}

const getBeerLabels = async (id) => {
  const urlBeer = `http://api.brewerydb.com/v2/beers/?beerId=${id}&format=json&key=${key}`;
  
  try {
    const response = await axios.get(`${corsUrl + urlBeer}`);
    const data = response?.data?.data;

    return data;
  } catch (error) {
    return `ERROR: Unable to get this beer!, ${error}`;
  }
}