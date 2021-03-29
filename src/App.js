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

  randomMovie() {
    this.setState({
      moviesList: [movies[Math.floor(Math.random()*movies.length)-1]]
    })
  }

  render() {
    return (
      <div className="App">
        <MyHeader title={'Movie Database nicht von Bebi'} />
        <button onClick={e => this.random(e)}>Random</button>
        <FilterBar orderMovies={e => this.orderMovies(e)} searchByTitle={e => this.searchByTitle(e)} />
        <MoviesList movies={this.state.moviesList} />
        { this.state.moviesList.length === 0 && <p className="no-results">Leider keine Filme gefunden :(</p> }
      </div>
    );
  }

}

export default App;
