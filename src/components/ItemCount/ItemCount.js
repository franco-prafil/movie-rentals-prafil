import './ItemCount.css';
import { useState, useContext } from 'react'
import { Button, Container  } from 'react-bootstrap';
import CartContext from '../../context/CartContext'

const ItemListCount = ({product, onAdd, setShowButton}) => {
    const [count, setCount] = useState(1)
    const {addProductToCart} = useContext(CartContext)

    const {title, category, image, price, stock, id} = product;

    const addCount = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }
    const removeCount = () => {
        if(count > 1) {
            setCount(count - 1)
        }
    }
    return(
        <Container>
                            <h5 className='align-item-center mt-2'>Cantidad de Días</h5>
            <div className='d-flex justify-content-center p-2 count-item'>
                            <Button className='p-1' variant='outline-dark' onClick={removeCount}>-</Button>
                            <p className='align-item-center'>{count}</p>
                            <Button className='p-1' variant='outline-dark' onClick={addCount}>+</Button>
                        </div>
                        <Button className='mb-2' onClick={() => addProductToCart({...product, quantity: count})} variant="dark">Agregar Producto</Button>
                        {/* <Button className='mb-2' onClick={() => setShowButton(true)} variant="dark">Agregar Producto</Button> */}

        </Container>

    )
}

export default ItemListCount