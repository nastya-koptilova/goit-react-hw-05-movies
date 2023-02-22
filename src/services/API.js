import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '24bdb15dbc109e85ecedc1baa3876895';

export async function getTrending() {
  const { data } = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${KEY}`
  );
  return data;
}

export async function getSearchMovies(query) {
  const { data } = await axios.get(
    `${BASE_URL}search/movie?query=${query}&api_key=${KEY}&language=en-US&page=1&include_adult=false`
  );
  return data;
}

export async function getMovieDetails(id) {
  const { data } = await axios.get(
    `${BASE_URL}movie/${id}?api_key=${KEY}&language=en-US`
  );
  return data;
}

export async function getMovieCredits(id) {
  const { data } = await axios.get(
    `${BASE_URL}movie/${id}/credits?api_key=${KEY}&language=en-US`
  );
  return data;
}

export async function getMovieReviews(id) {
  const { data } = await axios.get(
    `${BASE_URL}movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
  return data;
}
