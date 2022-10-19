import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
// import movieData from '../../movie-data';
import Header from '../Header/Header';
import MovieCard from '../MovieCard/MovieCard';
import Moviebox from "../Moviebox/Moviebox";
import NavBar from "../Navbar/NavBar";
import Error from "../Error/Error";

import { getMovies, getSingleMovie } from '../../apiCalls/apiCalls';

import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [currentResults, setSearchResults] = useState([])
  const [error, setError] = useState('')
  const [searchInput, setInput] = useState("")
  useEffect(() => {
    getMovies()
      .then((movieData) => {
        setMovies(movieData.movies);
      })
      .catch((error) => setError(error));
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
  const handleInput = (event) => {
    const results = movies.filter((movie) =>
      movie.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setInput(event.target.value)
    setSearchResults(results)
  };

  const clearSelection = () => {
    setSelectedMovie({});
    setInput('');
  }

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() =>
          error ? (
            <Error />
          ) : searchInput ? (
            < div className="App">
              <Header />
              <NavBar
                className="Search-Bar"
                handleInput={handleInput}
                movies={movies}
              />
              {currentResults.length ? (
                <div>
                  <h2>seach results for '{searchInput}'</h2>
                  <Moviebox movies={currentResults} handleSelection={handleSelection} />
                </div>
              ) : (
                <h2>no matching results. . .</h2>
              )}
            </div>
          ) : (
            <div className="App">
              <Header />
              <NavBar
                className="Search-Bar"
                handleInput={handleInput}
                movies={movies}
              />
              <Moviebox movies={movies} handleSelection={handleSelection} className="MovieBox" />
            </div>
          )
        }
      />
      < Route
        exact
        path="/movie/:id"
        render={() => <div className="Movie-Description">
          <Header />
          <MovieCard selectedMovie={selectedMovie} clearSelection={clearSelection} />
        </div>} />
    </Switch >
  );
}

export default App;