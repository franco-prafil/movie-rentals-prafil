import { useState, useContext } from "react";
// import Swal from "sweetalert2";
// import withReactContent from 'sweetalert2-react-content'

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Menu from '@mui/material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
import "./CartWidget.css";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { cartListItems, setCartListItems } = useContext(CartContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const removeItemCart = (id) => {
        const copyArrayCart = [...cartListItems];
        const newArrayCart = copyArrayCart.filter ((item) => item.id !== id);
        setCartListItems(newArrayCart)
    }
    // const alertCart = () => {
    // Swal.fire({
    // icon: 'error',
    // title: 'Oops...',
    // text: 'Something went wrong!',
    // footer: '<a href="">Why do I have this issue?</a>'
    // });
    // }
    return (
    <div className="cart-widget">
        <ShoppingCartIcon className="cartColor" 
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined} 
                onClick={handleClick}/>
        <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <div className='container-item-list-cart'>
                    {cartListItems.length === 0 && (
                        <>
                            alertCart
                            <Link to="/products/remeras" className="text-decoration-none text-black" >Empezar a comprar</Link>
                        </>
                    )}
                    {cartListItems.map( (item) => {
                        return(
                        <div className='item-cart-prod' key={item.id}>
                            <div className='cart-prod__image'>
                                <img src={`/${item.image}`} alt="prod carrito" />
                            </div>
                            <div className='cart-prod__info'>
                                <p>{item.title}</p>
                                <span>$ {item.price}</span>
                            </div>
                            <div className='cart-prod__action'>
                                <button onClick={() => removeItemCart(item.id)}>
                                    <DeleteIcon  />
                                </button>
                            </div>
                        </div>
                        )
                    })}
                    
                </div>
            </Menu>
        
    </div>
    );
};

export default CartWidget;
