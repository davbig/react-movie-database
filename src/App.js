import "./App.css";
import MyHeader from "./components/MyHeader";
import Section from "./components/Section";
import Welcome from "./components/Welcome";
import ImageBox from "./components/ImageBox"
import movies from "./movies";
import MoviesList from "./components/MoviesList";

function App() {

  const log = () => {
    console.log('Hello World');
  }

  return (
    <div className="App">
      <MyHeader />
      <Welcome name={'Super-Code'} age={24} />

      <MoviesList movies={movies} />

      <button onClick={log}>Click me!</button>
    </div>
  );
}

export default App;
