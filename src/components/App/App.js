import React, { Component } from 'react';

import movieData from '../../movie-data';
import Moviebox from "../Moviebox/Moviebox";

import './App.css';

class App extends Component {
  state = {
    movies: movieData.movies,
  }

  render() {
    return (
      <>
        <Moviebox movies={this.state.movies} />
      </>
    );
  }
}

export default App;