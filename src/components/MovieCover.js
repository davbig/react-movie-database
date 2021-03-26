import Rating from "./Rating";

const MovieCover = (props) => {

    const { title, duration, genre, director, rate, year } = props;

    return ( 
        <div className="movie-cover">
            <h4>{ title }</h4>
            <div>{ year }</div>
            <div>{ duration }</div>
            <div>{ director }</div>
            <Rating rating={rate} />
            <ul className="genres">{ genre.map((item, index) => <li key={index}>{item}</li>) }</ul>
        </div>
    );
}
 
export default MovieCover;