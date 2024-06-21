// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import './ProductDisplay.css';
import PropTypes from 'prop-types';
import { ShopContext } from '../../Context/ShopContext';

// import FeaturedProduct from '../Featured Product/FeaturedProduct';

const ProductDisplay = (props) => {
    const { product } = props;
    const [mainImg, setMainImg] = useState(product.image);
    const [value, setvalue] = useState(1);
    const {addToCart} = useContext(ShopContext);

    const HandleSetValue = (e) =>{
        setvalue(e.target.value);
    }

    const HandleImageClick = (imgsrc) =>{
        setMainImg(imgsrc);
    }
    
    return (
        <>
        <section id="prodetails" className="section-p1">
                <div className="single-pro-image">
                    <img src={mainImg} width="100%" id="MainImg" alt="" style={{marginBottom:10}}/>

                    <div className="small-img-group">
                        <div className="small-img-col">
                            <img src={product.image} width="100%" onClick={() => HandleImageClick(product.image)} className="small-img" alt=""/>
                        </div>

                        <div className="small-img-col">
                            <img src={product.imageSlide2} width="100%" onClick={() => HandleImageClick(product.imageSlide2)} className="small-img" alt=""/>
                        </div>

                        <div className="small-img-col">
                            <img src={product.imageSlide3} width="100%" onClick={() => HandleImageClick(product.imageSlide3)} className="small-img" alt=""/>
                        </div>

                        <div className="small-img-col">
                            <img src={product.imageSlide4} width="100%" onClick={() => HandleImageClick(product.imageSlide4)} className="small-img" alt=""/>
                        </div>

                    </div>
                </div>

                <div className="single-pro-details">
                        <h6>{`Gaming / ${product.category}`}</h6>
                        <h4>{product.name}</h4>
                        <h2>₱{product.price}</h2>
                        <select>
                            <option>Select Color</option>
                            <option>White</option>
                            <option>Black</option>
                        </select>
                        <input type="Number" value={value} onChange={HandleSetValue}/>
                        <button className="normal" onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
                        <button className="normal">Buy</button>

                        <h4>Product Details</h4>
                        <span>{product.details}</span>
                </div>
            </section>
            
        </>
    );
}

ProductDisplay.propTypes = {
    product:PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        details:PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        imageSlide2: PropTypes.string.isRequired,
        imageSlide3: PropTypes.string.isRequired,
        imageSlide4: PropTypes.string.isRequired,
};

export default ProductDisplay