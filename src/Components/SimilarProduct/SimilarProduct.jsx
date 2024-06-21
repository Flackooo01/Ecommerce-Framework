

import { useContext } from 'react';
import PropTypes from 'prop-types';
import ItemProduct from '../ItemProduct/ItemProduct';
import './SimilarProduct.css';
import { ShopContext } from '../../Context/ShopContext';

export const SimilarProduct = (props) => {
    const { product } = props;
    const {all_product} = useContext(ShopContext);

    return (
        <section id="product1" className="section-p2">
        <h2>{product.category}</h2>
            <div className="pro-container2">
                {all_product.map((item, index)=>{
                    if(product.category===item.category){
                        return <ItemProduct key={index} id={item.id} image={item.image} name={item.name} brand={item.brand}  price={item.price}/>
                    }
                })}
            </div>
            </section>
    )
}

SimilarProduct.propTypes ={
    category: PropTypes.node.isRequired,
    product: PropTypes.string.isRequired,
};

export default SimilarProduct;
