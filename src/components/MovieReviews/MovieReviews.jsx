import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesIdReviews } from '../../themoviedbAPI';
import css from './MovieReviews.module.css';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const data = await fetchMoviesIdReviews(movieId);
      setReviews(data);
    };
    getReviews();
  }, [movieId]);

  return (
    <>
      <ul className={css.list}>
        {reviews.length > 0 &&
          reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default MovieReviews;
