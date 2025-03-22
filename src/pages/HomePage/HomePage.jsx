import { useEffect, useState } from 'react';
import { trendingMovies } from '../../themoviedbAPI';
import MovieList from '../../components/MovieList/MovieList';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Loader from '../../components/Loader/Loader';
import css from './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const results = await trendingMovies(page);
        setMovies(() => [...results]);
        setIsLoading(true);
        setError(false);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, [page]);

  const isNotFound = !isLoading && !movies.length;

  return (
    <div>
      <h2 className={css.title}>Popular movies today</h2>
      <MovieList movies={movies} />
      {error && <p>Sorry, an error occurred. Please reload the page...</p>}
      {isLoading && <Loader />}
      {isNotFound && <NotFoundPage />}
    </div>
  );
};

export default HomePage;
