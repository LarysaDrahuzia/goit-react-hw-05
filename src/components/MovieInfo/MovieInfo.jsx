import css from './MovieInfo.module.css';

const MovieInfo = ({ movie }) => {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <p>{movie.release_date}</p>
      <h3>Genres</h3>
      {movie.genres?.map(genre => (
        <li key={genre.id}>{genre.name}</li>
      ))}
      <p>User Score: {movie.popularity}</p>
      <div className="movie_overview">
        <h3>Overview</h3>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieInfo;
