import MoviePoster from '../MoviePoster/MoviePoster';

import './Moviebox.css';

function Moviebox({ movies, handleSelection }) {
  const movieCards = movies.map((movieData) => {
    return <MoviePoster movieData={movieData} handleSelection={handleSelection} />
  })

  return (
    <section className="movie-box--display">
      {movieCards}
    </section>
  );
}

export default Moviebox;