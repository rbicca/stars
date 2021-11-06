import StarRatingV2 from './StarRatingV2';
import { FaStar, FaTrash } from 'react-icons/fa';

const Color = ({ title, color, rating, id, onRemove = f => f , onRate = f => f}) => (
    <section>
        <h1>{title}</h1>
        <button onClick={ () => onRemove(id) } >
            <FaTrash />
        </button>
        <div style={{ height:50, backgroundColor: color }}  />
        <StarRatingV2  selectedStars={rating} onRate={rating => onRate(id, rating)} />
    </section>
);

const ColorList = ({colors = [], onRemoveColor = f => f , onRateColor = f => f }) => {
    if(!colors.length) return <div>Nenhuma cor para exibir.</div>;

    return (
        <div>
            { colors.map( c => <Color 
                                    key={c.id} {...c} 
                                    onRemove={onRemoveColor}
                                    onRate={onRateColor}
                                />) }
        </div>
    );
};


export default ColorList;