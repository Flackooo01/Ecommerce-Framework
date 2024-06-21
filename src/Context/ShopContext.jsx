import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import all_product from '../Components/Assets/All_Products';


export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) =>{
    const [cartItems, setCartItems] = useState(getDefaultCart());
    
    //add to cart button 
    const addToCart = (itemId) => {
        setCartItems((prev) =>({...prev,[itemId]:prev[itemId]+ 1}))
        console.log("Successfully add to cart");
        console.log(cartItems);
    };

    //Remove add to cart
    const RemoveFromCart = (itemId) => {
        setCartItems((prev) =>({...prev,[itemId]:prev[itemId]-1}))
    };

    //Getting the total value of the product added
    const getTotalCartAmount = () => {
        let totalAmount = 0;
    
        for (const itemProduct in cartItems) {
            if (cartItems[itemProduct] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(itemProduct));
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[itemProduct];
                }
            }
        }
        return totalAmount;
    };

    //Counting the number of add 
    const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = {getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,RemoveFromCart};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

ShopContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ShopContextProvider;