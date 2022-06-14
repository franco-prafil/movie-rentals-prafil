import { useContext } from "react";
import CartContext from "../context/CartContext";
import './Cart.css'
import { Table, Button } from "react-bootstrap";
import { Container } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";

const Cart = () => {
    const { cartListItems, totalPrice, deleteItem } = useContext(CartContext)
    console.log("listado de productos:", cartListItems);
        return(
            <Container> 
            <h2>Checkout: </h2>
            
            <Table striped>
                <thead className="table-dark">
                    <tr>
                        <th >Producto</th>
                        <th >Descripcion</th>
                        <th >Cantidad</th>
                        <th >Precio Unitario</th>
                        <th >Quitar</th>
                    </tr>
                </thead>

                {cartListItems.map( (item) => {
                    const {id, title, image, price, quantity} = item
                    console.log(item)
                    return(
                        <tbody key={id}>
                        <tr>
                            <td className="col-2">
                                <img className="img-cart" src={`/${image}`} alt="productos" />
                            </td>
                            <td> 
                                <p className="p-cart">{title}</p>
                            </td>
                            <td>
                                <p className="p-cart">{quantity}</p>
                            </td>
                            <td>
                                <p className="p-cart">$ {price}</p>
                            </td>
                            <td>
                                <Button className='p-cart' variant="contained" color="primary" onClick={() => deleteItem(item.id)}>
                                    <DeleteIcon />
                                </Button>
                            </td>
                        </tr>
                        </tbody>
                    )
                })}
                </Table>
                <Container className="container-pop"> 
                <div>
                    {cartListItems.length === 0 &&
                    <div>
                    <p className="p-pop-cart">No Hay Productos Agregados</p>
                    </div>
                    }
                </div>
                </Container>
                        <Container  className="container-button"> 
                            <div className="div-button">
                                <div className="price-total-cart p-1"> 
                                    <p className="d-flex align-items-center mb-0">Subtotal: </p>
                                    <span > $ {totalPrice()}</span>
                                </div>
                    
                                <div className="price-total-cart p-1"> 

                                <p className="d-flex align-items-center mb-0">Total</p>
                                <span>$ {totalPrice()}</span>
                                </div>
                            </div>
                        </Container>
                        <Container  className="container-button"> 
                        <div className="div-button">    
                        <Link to="/"><Button className='mb-2' variant="dark">Continuar Comprando</Button></Link> 
                        <Button className='mb-2' variant="dark">Completar Compra</Button>
                        </div>
                        </Container>    
            
        </Container>
        )
    }


export default Cart