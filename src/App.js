import "./App.css";
import React from 'react';
import MyHeader from "./components/MyHeader";
import Welcome from "./components/Welcome";
import movies from "./movies";
import MoviesList from "./components/MoviesList";
import FilterBar from "./components/FilterBar";


class App extends React.Component {

  state = {
    moviesList: movies
  }

  orderMovies(order) {
    switch(order) {
      case 'YEAR_OLD':
        this.setState({
          moviesList: movies.sort((a, b) => a.year - b.year)
        })
        break;
      case 'YEAR_NEW':
        this.setState({
          moviesList: movies.sort((a, b) => b.year - a.year)
        })
        break;
    }
  }

  render() {
    return (
      <div className="App">
        <MyHeader />
        <FilterBar orderMovies={e => this.orderMovies(e)} />
        <Welcome name={'Super-Code'} age={24} />
        <MoviesList movies={this.state.moviesList} />
      </div>
    );
  }

}

export default App;
