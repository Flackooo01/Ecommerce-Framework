
import './Item.css';
import PropTypes from 'prop-types';

const Item = (props) => {
    return (
        <>
        <section id="feature" className="section-p1">
            <div className="fe-box">
                <img src={props.image} alt=""/>
                <h6>{props.name}</h6>
            </div>
        </section>
        </>
    )
}

Item.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

export default Item