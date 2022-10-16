import './MovieCard.css';

function MovieCard({ selectedMovie, clearSelection }) {
  
  return (
    <article>
      <button onClick={() => clearSelection()}>Back</button>
      <img 
        src={selectedMovie[0].backdrop_path} 
        alt={selectedMovie[0].title} 
        className="selected-movie--display"
      />
    </article>
  );
}

export default MovieCard;