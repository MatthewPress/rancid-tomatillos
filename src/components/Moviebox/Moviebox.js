import MoviePoster from '../MoviePoster/MoviePoster';

import './Moviebox.css';

function Moviebox({ movies, handleSelection }) {
  const movieCards = movies.map((movie, index) => {
    return <MoviePoster movie={movie} key={`${movie.id}-${index}`} handleSelection={handleSelection} />
  })

  return (
    <section className="movie-box--display">
      {movieCards}
    </section>
  );
}

export default Moviebox;