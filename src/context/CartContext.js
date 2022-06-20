import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartListItems, setCartListItems] = useState([])
    // const [totalPrice, setTotalPrice] = useState(0)

    const addProductToCart = (product) => {
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        if(!isInCart) {
            // console.log("se agrego el producto:", product)
            // setTotalPrice(totalPrice + product.price * product.quantity)
            setCartListItems([...cartListItems, product])
        }
    }
    
    
    const totalPrice = () => {
        return cartListItems.reduce((acc, product) => ( acc + (product.quantity * product.price) ), 0);
    }

    const deleteItem = (id) => {
        const copyCartListItems = [...cartListItems]
        const deleteItemCart = copyCartListItems.filter((product) => product.id !== id);
        setCartListItems(deleteItemCart);
    
        
    };
        
    const cleanCartProducts = () => {
        setCartListItems([])
    }
    

    const data = {
        cartListItems,
        addProductToCart,
        totalPrice,
        deleteItem,
        cleanCartProducts
    }

    return(
        <CartContext.Provider value={data} >
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export {CartProvider}