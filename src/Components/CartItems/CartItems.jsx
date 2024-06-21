
import { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';

const CartItems = () => {

    const promobox ={
        border: "none",
        outline: "none",
        background: "#eaeaea",
        fontsize: "16px",
        width: "330px",
        height: "50px",
        padding : "10px"
    }
    const button ={
        width : "170px",
        height : "58px",
        fontsize: "16px",
        background : "#006669",
        border : "none",
        color : "white",
        cursor : "pointer"
    }

    const breakword = {
        overflowWrap: "break-word", // Corrected to camelCase
        overflow: "hidden",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical", // Corrected to camelCase with Webkit prefix
        WebkitLineClamp: "2" // Corrected to camelCase with Webkit prefix
    };

    const {getTotalCartAmount,all_product,cartItems,RemoveFromCart} = useContext(ShopContext);

    return (
        <>
        <div className='cartitems'>
            <div className='cartitems-format-main'>
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr/>
            {all_product.map((e, index)=>{
                if(cartItems[e.id] > 0){
                    return(
                        <div key={index}>
                        <div className='cartitems-format cartitems-format-main'>
                            <img src={e.image} alt='' className='carticon-product-icon'/>
                            <p style={breakword}>{e.name}</p>
                            <p>₱{Number(e.price)}</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p>₱{e.price*cartItems[e.id]}</p>
                            <FontAwesomeIcon icon={faRemove} onClick={()=>{RemoveFromCart(e.id)}} className='cartitem-remove-icon' style={{cursor: "pointer", width: 15, margin: "0 40"}}/>
                        </div>
                        <hr/>
                    </div>
                    )
                }
                return null;
            })}
            <div className='cartitems-down'>
                <div className='cartitems-total'>
                    <h1 style={{fontSize: 20}}>Cart Totals</h1>
                    <div>
                        <div className='cartitems-total-item'>
                            <p>Subtotal</p>
                            <p>₱{getTotalCartAmount()}</p>
                        </div>
                        <hr/>
                        <div className='cartitems-total-item'>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr/>
                        <div className='cartitems-total-item'>
                            <h3 style={{fontSize: 20}}>Total</h3>
                            <h3 style={{fontSize: 20}}>₱{getTotalCartAmount()}</h3>
                        </div>
                        <button>PROCEED TO CHECKOUT</button>
                    </div>
                </div>
                <div className='cartitems-promocode'>
                    <p>If you have a promo code, Enter it here</p>
                    <div className='cartitem-promobox'>
                        <input type='text' placeholder='promo code' style={promobox}/>
                        <button style={button}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default CartItems