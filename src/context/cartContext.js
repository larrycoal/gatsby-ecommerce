import React,{useState,createContext} from 'react';


const CartContext = createContext()
const CartContextProvider = (props) => {
    const [cartItems,setCartItems] = useState([])
    const windowCartItems = window.localStorage

    const addToCart = (prdct)=>{
        setCartItems(()=>[...cartItems,prdct])
        windowCartItems.setItem('product',JSON.stringify({...cartItems,prdct}))

    }
    return (
        <CartContext.Provider  value={{cartItems,addToCart:addToCart}}>
            {props.children}
        </CartContext.Provider>
    );
};

export { CartContextProvider, CartContext};