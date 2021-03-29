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

  searchByTitle(searchTerm) {
    this.setState({
      moviesList: movies.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
    })
  }

  render() {

    const warningClass = this.state.moviesList.length == 0 ? 'warning' : '';

    return (
      <div className="App">
        <MyHeader />
        <FilterBar orderMovies={e => this.orderMovies(e)} searchByTitle={e => this.searchByTitle(e) } />
        <div className={ warningClass }>Gesamt: { this.state.moviesList.length }</div>
        { (this.state.moviesList.length > 0) ? <MoviesList movies={this.state.moviesList} /> : <h2>Leide keine Treffer! :(</h2> }
      </div>
    );
  }
}

export default App;
