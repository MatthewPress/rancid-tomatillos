import { Link } from 'react-router-dom';

import './MovieCard.css';

function MovieCard({ selectedMovie, clearSelection }) {
  return (
    <article>
      <Link to={'/'}>
        <button onClick={() => clearSelection()}>Back</button>
      </Link>
      <h2>{selectedMovie.title}</h2>
      <img
        src={selectedMovie.backdrop_path}
        alt={selectedMovie.title}
        className="selected-movie--img"
      />
      <div className='movie-info'>
        <h2>{selectedMovie.overview}</h2>
        <h4 className="runtime">Runtime: {selectedMovie.runtime} minutes</h4>
        <h4 className="date">Release Date: {selectedMovie.release_date}</h4>
        <p>{selectedMovie.genres}</p>
      </div>
    </article>
  );
}

export default MovieCard;