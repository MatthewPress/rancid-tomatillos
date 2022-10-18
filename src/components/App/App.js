import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
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
    <Switch>
      <Route
        exact
        path="/"
        render={() =>
          <div className="App">
            <Header />
            <Moviebox movies={movies} handleSelection={handleSelection} className="MovieBox" />
          </div>

        }
      />
      <Route
        exact
        path="/movie/:id"
        render={() => <div className="Movie-Description">
          <Header />
          <MovieCard selectedMovie={selectedMovie} clearSelection={clearSelection} />
        </div>} />
    </Switch>
  );
}

export default App;