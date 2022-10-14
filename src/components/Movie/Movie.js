import './Movie.css';

function Movie({ movieData }) {
  return (
    <article key={movieData.id}>
      <img src={movieData.poster_path} alt={movieData.title} />
    </article>
  );
}

export default Movie;