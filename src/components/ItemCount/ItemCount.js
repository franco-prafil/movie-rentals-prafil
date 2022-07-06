import './ItemCount.css';
import { useState, useContext } from 'react'
import { Button, Container  } from 'react-bootstrap';
import CartContext from '../../context/CartContext'

const ItemCount = ({stock, product, setShowButton}) => {
    const [count, setCount] = useState(1)
    const {addProductToCart} = useContext(CartContext)

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
            <h6 className='align-item-center mt-2'>Cantidad de Días</h6>
            <div className='d-flex justify-content-center p-2 count-item'>
                <Button className='p-1' variant='outline-dark' onClick={removeCount}>-</Button>
                <p className='align-item-center'>{count}</p>
                <Button className='p-1' variant='outline-dark' onClick={addCount}>+</Button>
            </div>
            <Button className='mb-2 fs-7'  onClick={() => {addProductToCart({...product, quantity: count}); setShowButton(true)}} variant="dark">Agregar Producto
            </Button>
        </Container>
    )
}

export default ItemCount