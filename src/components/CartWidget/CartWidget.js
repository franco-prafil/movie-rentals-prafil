import { useEffect, useState, useContext } from "react";
import Swal from "sweetalert2";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Menu from '@mui/material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
import "./CartWidget.css";
import CartContext from "../../context/CartContext";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { cartListItems, setCartListItems, getLocalStorage, calcTotalPrice, setTotalPrice } = useContext(CartContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    
    
    useEffect(() => {
        if (cartListItems.length === 0){
            let storedData = getLocalStorage()
            if (storedData){
                setCartListItems(storedData)
                calcTotalPrice(storedData)
                setTotalPrice(calcTotalPrice(storedData))
            }
        }
    }, []);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        if(cartListItems.length === 0) {
            return ( 

                Swal.fire({
                    icon: 'error',
                    title: 'El Carrito Esta Vacío',
                    text: 'No has agregado nada al carrito',
                    showCloseButton: true,
                    confirmButtonText: 'Empezar a Alquilar',
                    confirmButtonColor: '#212529'
                })
                );
            
            
        }
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const removeItemCart = (id) => {
        const copyArrayCart = [...cartListItems];
        const newArrayCart = copyArrayCart.filter ((item) => item.id !== id);
        setCartListItems(newArrayCart)
    }
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
                    {cartListItems.map( (item) => {
                        return(
                        <div className='item-cart-prod' key={item.id}>
                            <div className='cart-prod__image'>
                                <img src={`/${item.image}`} alt="prod carrito" />
                            </div>
                            <div className='cart-prod__info'>
                                <p>Titulo: {item.title}</p>
                                <span>$ {item.price}</span>
                                <span>Cantidad: {item.quantity}</span>
                            </div>
                            <div className='cart-prod__action'>
                                <button onClick={() => removeItemCart(item.id)}>
                                    <DeleteIcon  />
                                </button>
                            </div>
                            <div> 
                                <Link to="/cart" className="text-decoration-none text-black" >
                                    <Button className='mb-2 button-finaly-shop' variant="dark">Finalizar Compra</Button>
                                </Link>
                            </div>
                        </div>
                        )
                    },
                    )}
                    
                </div>
            </Menu>
        
        </div>
    );
};

export default CartWidget;
