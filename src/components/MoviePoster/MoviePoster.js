import './MoviePoster.css';

function MoviePoster({ movieData, handleSelection }) {
  return (
    <article key={movieData.id}>
      <img 
        src={movieData.poster_path} 
        alt={movieData.title}
        id={movieData.id} 
        className="movie-poster--display"
        onClick={(event) => handleSelection(event)} 
      />
    </article>
  );
}

export default MoviePoster;