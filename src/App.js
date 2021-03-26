import "./App.css";
import React from 'react';
import MyHeader from "./components/MyHeader";
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
      default:
        break;
    }
  }

  searchByTitle(search) {
    this.setState({
      moviesList: movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()))
    })
  }

  render() {
    return (
      <div className="App">
        <MyHeader title={'Movie Database'} />
        <FilterBar orderMovies={e => this.orderMovies(e)} searchByTitle={e => this.searchByTitle(e)} />
        <MoviesList movies={this.state.moviesList} />
        { !this.state.moviesList.length && <p className="no-results">Leider keine Filme gefunden :(</p> }
      </div>
    );
  }

}

export default App;
