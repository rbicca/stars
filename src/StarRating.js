
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import classes from './StarRating.module.css';


const createArray = length => [...Array(length)];

const Star = ({ selected = false, onSelect = f => f }) => (
                    <FaStar 
                        color={selected ? 'green' : 'grey'} 
                        onClick={onSelect}
                    />);

const StarRating = ({ totalStars = 5, style={}, ...props }) => {

    const [stars, setStars] = useState(1);

    return (
        <>
            <div className={classes.contador}  style={{ ...style }} {...props} >
                {  createArray(5).map((n,i) => (
                    <Star 
                        key={i} 
                        selected={stars > i} 
                        onSelect={() => setStars(i+1)}
                    />)  
                )}
            </div>
            <p>{stars} de {totalStars} estrelas</p>
        </>
    );
}

export default StarRating;