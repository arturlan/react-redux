import axios from 'axios';

const API_KEY = 'caaa498389e393edc00749624682e003';
const ROOT_URL = `https://api.darksky.net/forecast/${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(response) {
  const coordinats = response.data.results[0].geometry.location;
  const url = `${ROOT_URL}/${coordinats.lat}, ${coordinats.lng}`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
