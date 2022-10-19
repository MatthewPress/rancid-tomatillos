import { Link } from 'react-router-dom';

import './MoviePoster.css';

function MoviePoster({ movie, handleSelection }) {
  return (
    <Link to={`/movie/${movie.id}`}>
      <article key={movie.id}>
        <img
          src={movie.poster_path}
          alt={movie.title}
          id={movie.id}
          className="movie-poster--display"
          onClick={(event) => handleSelection(event)}
        />
      </article>
    </Link>
  );
}

export default MoviePoster;