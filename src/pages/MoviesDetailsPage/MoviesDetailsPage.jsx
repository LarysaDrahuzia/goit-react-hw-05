import { Suspense, useEffect, useState, useRef } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { fetchMoviesId } from '../../themoviedbAPI';
import MovieInfo from '../../components/MovieInfo/MovieInfo';
import Loader from '../../components/Loader/Loader';

const MoviesDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  const backLinkRef = useRef(location.state);

  useEffect(() => {
    const getMovie = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchMoviesId(movieId);
        setMovie(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getMovie();
  }, [movieId]);

  return (
    <div>
      <Link to={backLinkRef.current}>Go back</Link>
      {isLoading && <Loader />}
      {error && <p>Error...</p>}
      {movie && <MovieInfo movie={movie} />}
      <h2>Learn more...</h2>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading casts or reviews</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MoviesDetailsPage;
