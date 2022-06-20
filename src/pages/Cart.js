import { useState ,useContext } from "react";
import CartContext from "../context/CartContext";
import Modal from "../components/Modal/Modal"
import './Cart.css'
import { Table, Button } from "react-bootstrap";
import { Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import db from "../utils/firebaseConfig";
import { useNavigate } from "react-router-dom"

const Cart = () => {
    const { cartListItems, totalPrice, cleanCartProducts } = useContext(CartContext)
    // console.log("listado de productos:", cartListItems);
    const [showModal, setShowModal] = useState(false)
    const [formValue, setFormValue] = useState({
        name: '',
        phone: '',
        email: ''
    })
    
    const date = new Date();
    
    
    const [order, setOrder] = useState({
        buyer: {},
        items: cartListItems.map( item => {
            return {
                id: item.id,
                title: item.title,
                price: item.price,
            }
        } ),
        date: date,
        total: totalPrice,
    })
    const [success, setSuccess] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        setOrder({...order, buyer: formValue})
        saveData({...order, buyer: formValue})
    }

    const handleChange = (e) => {
        setFormValue({...formValue, [e.target.name]: e.target.value})
    }

    const finishOrder = () => {
        navigate('/')
    }

    const saveData = async (newOrder) => {
        const orderFirebase = collection(db, 'ordenes')
        const orderDoc = await addDoc(orderFirebase, newOrder)
        console.log("orden generada: ", orderDoc)
        setSuccess(orderDoc.id)
        cleanCartProducts()
    }


        return(
            <Container> 
            <h2>Checkout: </h2>
            {console.log("order: ", order)}
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
                    {/* console.log(item) */}
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
                                <Button className='p-cart' variant="contained" color="primary" onClick={() => cleanCartProducts(item.id)}>
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
                                    <span > $ {totalPrice}</span>
                                </div>
                    
                                <div className="price-total-cart p-1"> 

                                <p className="d-flex align-items-center mb-0">Total</p>
                                <span>$ {totalPrice}</span>
                                </div>
                            </div>
                        </Container>
                        <Container  className="container-button"> 
                        <div className="div-button">    
                        <Link to="/"><Button className='mb-2' variant="dark">Continuar Comprando</Button></Link> 
                        <Button className='mb-2' variant="dark" onClick={() => setShowModal(true)}>Finalizar Compra</Button>
                        </div>
                        </Container>    
            
                        <Modal className="" title={success ? 'Compra exitosa' : 'Formulario de contacto'} open={showModal} handleClose={() => setShowModal(false)}>
            {success ? (
                <Container>
                    <div className="mb-4">
                        <p>La orden se ha generada con exito</p>
                        <p>Número de orden: </p>
                        <span className="order-id"> "{success}" </span>
                    </div>
                    <Button className='mb-2' variant="dark" onClick={finishOrder}>Aceptar</Button>
                </Container>
            ) : (
                <form className="form-contact" onSubmit={handleSubmit}>
                    <TextField 
                        id="outlined-basic" 
                        name="name"
                        label="Nombre y Apellido" 
                        variant="outlined" 
                        value={formValue.name}
                        onChange={handleChange}
                    />
                    <TextField 
                        id="outlined-basic" 
                        name="phone"
                        label="Telefono" 
                        variant="outlined" 
                        value={formValue.phone}
                        onChange={handleChange}
                    />
                    <TextField 
                        id="outlined-basic" 
                        name="email"
                        label="Mail" 
                        value={formValue.email}
                        variant="outlined" 
                        onChange={handleChange}
                    />
                    <Button type="submit" className='mb-2' variant="dark">Enviar</Button>
                </form>
            )}
            
        </Modal>

        </Container>
        )
    }


export default Cart