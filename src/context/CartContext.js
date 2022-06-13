import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartListItems, setCartListItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const addProductToCart = (product, quantity) => {
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        if(!isInCart) {
            console.log("se agrego el producto:", product)
            setTotalPrice(totalPrice + product.price * product.quantity)
            setCartListItems([...cartListItems, product])
        }
    }
    
    // const cartQuantity = () => {
    //     return(

    //         )
    //     }

    const deleteItem = (id) => {
        const copyCartListItems = [...cartListItems]
        const deleteItemCart = copyCartListItems.filter((product) => product.id !== id);
        setCartListItems(deleteItemCart);
    
        
    };
        
    const cleanCart = () => setCartListItems([])
    

    const data = {
        cartListItems,
        addProductToCart,
        totalPrice,
        deleteItem,
        cleanCart
    }

    return(
        <CartContext.Provider value={data} >
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export {CartProvider}