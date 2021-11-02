import StarRatingV2 from './StarRatingV2';


const Color = ({ title, color, rating }) => (
    <section>
        <h1>{title}</h1>
        <div style={{ height:50, backgroundColor: color }}  />
        <StarRatingV2  selectedStars={rating} />
    </section>
);

const ColorList = ({colors = []}) => {
    if(!colors.length) return <div>Nenhuma cor para exibir.</div>;

    return (
        <div>
            { colors.map( c => <Color key={c.id} {...c}/>) }
        </div>
    );
};


export default ColorList;