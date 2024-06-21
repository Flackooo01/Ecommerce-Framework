// import React from 'react'
import Featured_Product from '../Assets/Product.js';
// import Features from '../Features/Features';
import ItemProduct from '../ItemProduct/ItemProduct';
import './FeaturedProduct.css'

const FeaturedProduct = () => {
    return (
        <>
        <section id="product1" className="section-p2">
            <h2>Featured Product</h2>
            <p>Gaming Accessories Collection</p>
                <div className="pro-container2" >
                    {Featured_Product.map((item, index)=>{
                        return <ItemProduct key={index} id={item.id} image={item.image} brand={item.brand} name={item.name} price={item.price}/>
                    })}
                </div>
        </section>
        </>
    )
}

export default FeaturedProduct