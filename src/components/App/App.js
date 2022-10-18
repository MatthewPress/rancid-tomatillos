import { useState, useEffect } from "react";

// import movieData from '../../movie-data';
import Header from '../Header/Header';
import MovieCard from '../MovieCard/MovieCard';
import Moviebox from "../Moviebox/Moviebox";

import { getMovies, getSingleMovie } from '../../apiCalls/apiCalls';

import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});

  useEffect(() => {
    getMovies()
      .then((movieData) => {
        setMovies(movieData.movies);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSelection = (event) => {
    const movieID = parseInt(event.target.id);

    getSingleMovie(movieID)
      .then((movie) => {
        console.log(movie)
        setSelectedMovie(movie.movie);
      })
      .catch((error) => console.log(error));
  }

  const clearSelection = () => {
    setSelectedMovie({});
  }

  return (
    <div className="App">
      <Header />
      {
        selectedMovie.runtime
          ? <MovieCard selectedMovie={selectedMovie} clearSelection={clearSelection} />
          : <Moviebox movies={movies} handleSelection={handleSelection} className="MovieBox" />
      }
    </div>
  );
}

export default App;