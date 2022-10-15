// import { useState, useEffect } from "react";
import React, { Component } from 'react';

import movieData from '../../movie-data';
import Header from '../Header/Header';
import MovieDisplay from '../MovieDisplay/MovieDisplay';
import Moviebox from "../Moviebox/Moviebox";

// import { getMovies } from '../../apiCalls/apiCalls';

import './App.css';

class App extends Component {
  state = {
    movies: movieData.movies,
    selectedMovie: [],
  }

  // getMovies()
  //   .then((movieData) => {
  //     this.setState({ movies: movieData.movies })
  //   });

  handleSelection = (event) => {
    const movieSelection = this.state.movies.filter((movie) => {
      return movie.id === parseInt(event.target.id)
    });

    this.setState({ selectedMovie: movieSelection });
  }

  clearSelection = () => {
    this.setState({ selectedMovie: [] })
  }

  render() {
    return (
      <>
        <Header />
          { 
            this.state.selectedMovie.length 
              ? <MovieDisplay selectedMovie={this.state.selectedMovie} clearSelection={this.clearSelection} />
              : <Moviebox movies={this.state.movies} handleSelection={this.handleSelection} />
          }
      </>
    );
  }
}

export default App;