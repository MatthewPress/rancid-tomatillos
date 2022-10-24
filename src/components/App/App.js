import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import Header from '../Header/Header';
import MovieCard from '../MovieCard/MovieCard';
import MovieContainer from "../MovieContainer/MovieContainer";
import NavBar from "../NavBar/NavBar";
import Error from "../Error/Error";

import { getMovies, getSingleMovie } from '../../apiCalls/apiCalls';

import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getMovies()
      .then((movieData) => {
        setMovies(movieData.movies);
        setErrorMessage("");
      })
      .catch((error) => setErrorMessage(error.message));
  }, []);

  const handleSelection = (event) => {
    const movieID = parseInt(event.target.id);

    getSingleMovie(movieID)
      .then((movie) => {
        setSelectedMovie(movie.movie);
        setErrorMessage("");
      })
      .catch((error) => setErrorMessage(error.message));
  };

  const handleInput = (event) => {
    const results = movies.filter((movie) =>
      movie.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchInput(event.target.value);
    setSearchResults(results);
  };

  const clearSelection = () => {
    setSelectedMovie({});
    setSearchInput("");
    setSearchResults([]);
  };

  return (
    <Switch>
      <Route
        exact path="/"
        render={() =>
          <>
            <Header />
            {
              errorMessage
                ? <Error errorMessage={errorMessage} /> 
                : <>
                    <NavBar
                      handleInput={handleInput}
                      movies={movies}
                    />
                    <MovieContainer 
                      movies={movies} 
                      handleSelection={handleSelection}
                      searchResults={searchResults}
                      searchInput={searchInput}
                    />
                  </>
            }
          </>
        }
      />
      <Route
        exact path="/movie/:id"
        render={() => 
          <>
            <Header />
            {
              errorMessage
                ? <Error errorMessage={errorMessage} /> 
                : <>
                    <MovieCard 
                      selectedMovie={selectedMovie} 
                      clearSelection={clearSelection} 
                    />
                  </>
            }
          </>
        } 
      />
    </Switch >
  );
}

export default App;