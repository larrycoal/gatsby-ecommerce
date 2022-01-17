import React,{useState,createContext} from 'react';


const CartContext = createContext()
const CartContextProvider = (props) => {
    const [cartItems,setCartItems] = useState([])

    const addToCart = (prdct)=>{
        setCartItems(()=>[...cartItems,prdct])
    }
    return (
        <CartContext.Provider  value={{cartItems,addToCart:addToCart}}>
            {props.children}
        </CartContext.Provider>
    );
};

export { CartContextProvider, CartContext};