import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartListItems, setCartListItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const addProductToCart = (product) => {
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        if(!isInCart) {
            setTotalPrice(totalPrice + (product.price * product.quantity))
            saveToLocalStorage([...cartListItems, product])
            return setCartListItems(cartListItems => [...cartListItems, product])
        }
    }

    const saveToLocalStorage = (data) => {
        localStorage.setItem('products', JSON.stringify(data))
    }

    const getLocalStorage = () => {
        const data = localStorage.getItem('products')
        return JSON.parse(data)
    }
    
    const calcTotalPrice = (data) => {
         return data.reduce((acc, product) => ( acc + (product.quantity * product.price) ), 0);
    }

    const deleteItem = (id) => {
        const copyCartListItems = [...cartListItems]
        const deleteItemCart = copyCartListItems.filter((product) => product.id !== id);
        const deletedItem = copyCartListItems.find((product) => product.id === id);
        setCartListItems(deleteItemCart);
        setTotalPrice(totalPrice - (deletedItem.price * deletedItem.quantity))
        saveToLocalStorage(deleteItemCart)
        
    };

    const cleanCartProducts = () => {
        setCartListItems([])
        setTotalPrice(0)
        saveToLocalStorage(null)
    }

    const data = {
        cartListItems,
        addProductToCart,
        totalPrice,
        deleteItem,
        cleanCartProducts,
        getLocalStorage,
        setCartListItems,
        calcTotalPrice,
        setTotalPrice
    }

    return(
        <CartContext.Provider value={data} >
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export {CartProvider}