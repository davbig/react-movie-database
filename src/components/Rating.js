import StarFull from './assets/star_full.svg'
import StarHalf from './assets/star_half.svg'
import StarEmpty from './assets/star_empty.svg'

const Rating = (props) => {

    const hasHalfStar = (props.rating % 1 !== 0);
    const rating = parseInt(props.rating);
    
    const stars = [];

    for (let i = 0; i < 10; i++) {

        let star = StarFull;

        if (i == rating && hasHalfStar) {
            star = StarHalf;    
        } else if (i > rating - 1) {
            star = StarEmpty;
        }

        stars.push(<img key={i} src={star} />)
    }

    return ( 
        <div className="rating">
            { stars.map(item => item )}
        </div>

    );
}
 
export default Rating;