import axios from 'axios';

const URL = `https://maps.googleapis.com/maps/api/geocode/json?address`;

export const CITY_TO_COORDS = 'CITY_TO_COORDS';

export function cityToCoords(city) {
  const data = axios.get(`${URL}=${city}`);
  return {
    type: CITY_TO_COORDS,
    payload: data
  }
}
