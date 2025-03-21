import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesIdCast } from '../../themoviedbAPI';
import css from './MovieCast.module.css';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCasts = async () => {
      const data = await fetchMoviesIdCast(movieId);
      setCast(data);
    };
    getCasts();
  }, [movieId]);

  return (
    <>
      <ul className={css.list}>
        {cast.map(({ id, profile_path, original_name, character }) => {
          return (
            <li key={id} className={css.item}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                alt={`${original_name} portrait`}
              />
              <div>
                <p>Actor: {original_name}</p>
                <p>Character: {character}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MovieCast;
