import MoviePoster from '../MoviePoster/MoviePoster';

import './Moviebox.css';

function Moviebox({ movies, handleSelection }) {
  const movieCards = movies.map((movie) => {
    return <MoviePoster movie={movie} handleSelection={handleSelection} />
  })

  return (
    <section className="movie-box--display">
      {movieCards}
    </section>
  );
}

export default Moviebox;