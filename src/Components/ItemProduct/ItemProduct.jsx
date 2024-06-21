// import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import {ShopContext} from '../../Context/ShopContext';
import './ItemProduct.css';

const ItemProduct = (props) => {
    const {addToCart} = useContext(ShopContext);

const hanldeClick = () => {
    window.location.href = `/Product/${props.id}`;
    window.scrollTo(0, 0);
}

    return (
        <>
                <div className="pro">
                <Link to={`/Product/${props.id}`}><img src={props.image} onClick={hanldeClick} alt=""/></Link>
                    <div className="des">
                        <span>{props.Brand}</span>
                        <Link to={`/Product/${props.id}`} style={{textDecoration: 'none'}}><h5 onClick={hanldeClick}>{props.name}</h5></Link>
                        <h4>₱{props.price}</h4>
                    </div>
                    <FontAwesomeIcon icon={faShoppingCart} className='cart' onClick={()=>{addToCart(props.id)}}/>
                </div>
        </>
    )
};

ItemProduct.propTypes ={
    name: PropTypes.string.isRequired,
    Brand : PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    product: PropTypes.string.isRequired,
};

export default ItemProduct;