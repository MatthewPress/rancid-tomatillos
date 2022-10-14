import Movie from '../Movie/Movie';

import './Moviebox.css';

function Moviebox({ movies }) {
  const movieCards = movies.map((movieData) => {
    return <Movie movieData={movieData} />
  })

  return (
    <section>
      {movieCards}
    </section>
  );
}

export default Moviebox;