import axios from 'axios';
import config from '../../config.dist';

const API_KEY = config.tmdb.apiKey;
const BASE_URL = 'https://api.themoviedb.org/3';

export const getMovie = (id, type) => axios
  .get(`${BASE_URL}/${type}/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos`)
  .then(movie => movie.data)
  .catch(err => new Error(err));

export const getSeason = (id, seasonNum) => axios
  .get(`${BASE_URL}/tv/${id}/season/${seasonNum}?api_key=${API_KEY}&language=en-US`)
  .then(season => season.data)
  .catch(err => new Error(err));

export const getMovies = query => axios
  .get(`${BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`)
  .then(movies => (movies.data.results))
  .catch(err => new Error(err));

export const getSimilarMovies = (id, type) => axios
  .get(`${BASE_URL}/${type}/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`)
  .then(movies => movies.data.results)
  .catch(err => new Error(err));
