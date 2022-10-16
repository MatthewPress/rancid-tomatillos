import './MovieCard.css';

function MovieCard({ selectedMovie, clearSelection }) {
  
  return (
    <article>
      <button onClick={() => clearSelection()}>Back</button>
      <h2>{selectedMovie.title}</h2>
      <img 
        src={selectedMovie.backdrop_path} 
        alt={selectedMovie.title} 
        className="selected-movie--display"
      />
    </article>
  );
}

export default MovieCard;