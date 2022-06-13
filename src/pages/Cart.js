import { useContext } from "react";
import CartContext from "../context/CartContext";
import './Cart.css'
import { Container, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
    const { cartListItems, totalPrice, deleteItem } = useContext(CartContext)
    console.log("listado de productos:", cartListItems);
        return(
            <Container className='container-general'> 
            <h2>Checkout: </h2>
            <div className='cart-section'>
                <div className='col-cart-table__head'>
                    <h2>Producto</h2>
                    <h2>Descripcion</h2>
                    <h2>Precio Unitario</h2>
                    <h2>Cantidad</h2>
                    <h2>Quitar</h2>
                </div>

                <div>
                    {cartListItems.length === 0 &&
                    <div>
                    <p>Carrito Vacio</p>
                    </div>
                    }
                </div>
                {cartListItems.map( (item) => {
                    const {id, title, image, price, quantity} = item
                    console.log(item)
                    return(
                        <div className='cart-table__content' key={id}>
                            <div className='cart-table__content-img'>
                                <img src={`/${image}`} alt="productos" />
                            </div>
                            <div className='cart-table__content-title'>
                                <p>{title}</p>
                            </div>
                            <div className='cart-table__content-price'>
                                <p>$ {price}</p>
                            </div>
                            <div className='cart-table__content-quantity'>
                                <p>{quantity}</p>
                            </div>
                            <div className='cart-table__content-price'>
                                <button className='btn-delete' onClick={() => deleteItem(item.id)}>
                                    <DeleteIcon />
                                </button>
                            </div>
                        </div>
                    )
                })}
                <div className='cart-footer'>
                    <Button className='btn-custom'>Continuar comprando</Button>
                    <div className='cart-checkout-details'>
                        <div className='cart-checkout__subtotal'>
                            <p>Subtotal</p>
                            <span>$ {totalPrice}</span>
                        </div>
                        <div className='cart-checkout__total'>
                            <p>Total</p>
                            <span>$ {totalPrice}</span>
                        </div>
                        <Button className='btn-custom'>Completar Compra</Button>
                    </div>
                </div>
            </div>
        </Container>
        )
    }


export default Cart