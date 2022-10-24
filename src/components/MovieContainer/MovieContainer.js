import MoviePoster from '../MoviePoster/MoviePoster';

import './MovieContainer.css';

function MovieContainer({ movies, handleSelection, searchResults, searchInput }) {
  let movieCards;
  
  if (!searchResults.length && searchInput) {
    movieCards = null;
  } else if (searchResults.length) {
    movieCards = searchResults.map((movie) => {
      return ( 
        <MoviePoster 
          movie={movie} 
          key={`${movie.id}`}
          handleSelection={handleSelection} 
        />
      )
    });
  } else {
    movieCards = movies.map((movie) => {
      return ( 
        <MoviePoster 
          movie={movie} 
          key={`${movie.id}`}
          handleSelection={handleSelection} 
        />
      )
    });
  }
  
  return (
    <section className="movie-box--display">
      {movieCards || <p>Sorry! No matches have been found</p>}
    </section>
  );
}

export default MovieContainer;