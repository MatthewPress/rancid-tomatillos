import { useState, useEffect } from "react";

// import movieData from '../../movie-data';
import Header from '../Header/Header';
import MovieDisplay from '../MovieDisplay/MovieDisplay';
import Moviebox from "../Moviebox/Moviebox";

import { getMovies } from '../../apiCalls/apiCalls';

import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState([]);

  useEffect(() => {
    getMovies()
      .then((movieData) => {
        setMovies(movieData.movies);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSelection = (event) => {
    const movieSelection = movies.filter((movie) => {
      return movie.id === parseInt(event.target.id)
    });

    setSelectedMovie(movieSelection);
  }

  const clearSelection = () => {
    setSelectedMovie([]);
  }

  return (
    <>
      <Header />
        { 
          selectedMovie.length 
            ? <MovieDisplay selectedMovie={selectedMovie} clearSelection={clearSelection} />
            : <Moviebox movies={movies} handleSelection={handleSelection} />
        }
    </>
  );
}

export default App;