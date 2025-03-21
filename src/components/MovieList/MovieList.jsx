import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map(({ id, original_title }) => (
        <li className={css.item} key={id}>
          <Link to={`/movies/${id}`} state={location} className={css.link}>
            {original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
