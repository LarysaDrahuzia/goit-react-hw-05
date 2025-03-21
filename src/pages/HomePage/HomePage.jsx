import { useEffect, useState } from 'react';
import { trendingMovies } from '../../themoviedbAPI';
import MovieList from '../../components/MovieList/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await trendingMovies(page);
        setMovies(() => [...data.results]);
      } catch {
        setError(true);
      }
    };
    getMovies();
    console.log('getMovies', getMovies);
  }, [page]);

  return (
    <>
      <MovieList movies={movies} />
      {error && <p>Sorry, an error occurred. Please reload the page...</p>}
    </>
  );
};

export default HomePage;
