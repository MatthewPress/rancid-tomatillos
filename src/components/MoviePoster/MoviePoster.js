import './MoviePoster.css';

function MoviePoster({ movie, handleSelection }) {
  return (
    <article key={movie.id}>
      <img
        src={movie.poster_path}
        alt={movie.title}
        id={movie.id}
        className="movie-poster--display"
        onClick={(event) => handleSelection(event)}
      />

    </article>
  );
}

export default MoviePoster;