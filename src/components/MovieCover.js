import Rating from "./Rating";

const MovieCover = (props) => {

    const { title, duration, genre, director, rate } = props;

    return ( 
        <div className="movie-cover">
            <h4>{ title }</h4>
            <div>{ duration }</div>
            <div>{ director }</div>

            <Rating rating={rate} />

            <div>{ genre.map(item => item) }</div>
        </div>
    );
}
 
export default MovieCover;