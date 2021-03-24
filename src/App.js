import "./App.css";
import React from 'react';
import MyHeader from "./components/MyHeader";
import Welcome from "./components/Welcome";
import movies from "./movies";
import MoviesList from "./components/MoviesList";


class App extends React.Component {

  state = {
    moviesList: []
  }

  fetch() {
    this.setState({
      moviesList: movies
    })
  }

  orderMovies(e) {
    const order = e.target.value;

    if (order === 'YEAR_OLD') {
      this.setState({
        moviesList: movies.sort((a, b) => a.year - b.year)
      })
    }

    if (order === 'YEAR_NEW') {
      this.setState({
        moviesList: movies.sort((a, b) => b.year - a.year)
      })
    }

  }

  render() {
    return (
      <div className="App">
        <MyHeader />
        <button onClick={e => this.fetch()}>Fetch Films!</button>

        <select onChange={e => this.orderMovies(e)}>
          <option value="YEAR_NEW">Neueste zuerst</option>
          <option value="YEAR_OLD">Ältere zuerst</option>
        </select>

        <Welcome name={'Super-Code'} age={24} />
        <MoviesList movies={this.state.moviesList} />
      </div>
    );
  }

}

export default App;
