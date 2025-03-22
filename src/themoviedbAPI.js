import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDc2Nzg3ZjM5ZGMwYTM5YzUxMWU2YzliZTcwMGI5NiIsIm5iZiI6MTc0MjI0MDY1Mi40MzgwMDAyLCJzdWIiOiI2N2Q4N2I4YzMxNjc4Y2MzZjgwMWM3OTIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.vmz8GbOX47OwmqKCWFIBBbdOuOD7skBGmq1HlL4arjo';

const options = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export const trendingMovies = async page => {
  const { data } = await axios.get(
    `trending/movie/week?page=${page}&language=en-US`,
    options
  );

  return data.results;
};

export const fetchMovies = async query => {
  const { data } = await axios.get(
    `search/movie?include_adult=false&language=en-US&page=1&query=${query}`,
    options
  );
  return data.results;
};

export const fetchMoviesId = async movieId => {
  const { data } = await axios.get(`movie/${movieId}?language=en-US`, options);
  return data;
};

export const fetchMoviesIdCast = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}/credits?language=en-US`,
    options
  );
  return data.cast;
};

export const fetchMoviesIdReviews = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}/reviews?language=en-US`,
    options
  );
  return data.results;
};
