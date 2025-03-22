import css from './MovieInfo.module.css';

const MovieInfo = ({ movie }) => {
  return (
    <div className={css.info}>
      <img
        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
        alt={movie.title}
      />
      <h2 className={css.title}>{movie.title}</h2>
      <p>{movie.release_date}</p>
      <h3 className={css.subtitle}>Genres</h3>
      {movie.genres?.map(genre => (
        <li key={genre.id}>{genre.name}</li>
      ))}
      <p>User Score: {movie.popularity}</p>
      <div className="movie_overview">
        <h3 className={css.subtitle}>Overview</h3>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieInfo;
