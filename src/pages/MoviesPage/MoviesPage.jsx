import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from 'use-debounce';
import { fetchMovies } from '../../themoviedbAPI';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [debouncedQuery] = useDebounce(query, 1000);

  const changeSearchText = event => {
    const nextParams = new URLSearchParams(searchParams);

    if (event.target.value !== '') {
      nextParams.set('query', event.target.value);
    } else {
      nextParams.delete('query');
    }
    setSearchParams(nextParams);
  };

  useEffect(() => {
    const getMoviesByQuery = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const moviesByQuery = await fetchMovies(debouncedQuery);
        setMovies(moviesByQuery);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getMoviesByQuery();
  }, [debouncedQuery]);

  return (
    <>
      <input type="text" value={query} onChange={changeSearchText} />
      {isLoading && <Loader />}
      {error && <p>Sorry, please wait a moment and try again....</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
};

export default MoviesPage;
