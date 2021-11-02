
import { FaStar } from 'react-icons/fa';

const createArray = length => [...Array(length)];

const Star = ({ selected = false, onSelect = f => f }) => (
                    <FaStar 
                        color={selected ? 'green' : 'grey'} 
                        onClick={onSelect}
                    />);

const StarRatingV2 = ({ totalStars = 5, selectedStars = 1}) => {

    return (
        <>
            <div >
                {  createArray(totalStars).map((n,i) => (
                    <Star 
                        key={i} 
                        selected={selectedStars > i} 
                    />)  
                )}
            </div>
            <p>{selectedStars} de {totalStars} estrelas</p>
        </>
    );
}

export default StarRatingV2;