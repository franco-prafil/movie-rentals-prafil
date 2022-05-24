import { useState } from 'react'
import { Button  } from 'react-bootstrap';
import './ItemCount.css';

const ItemListCount = ({stock}) => {
    const [count, setCount] = useState(1)

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
        <div>
            <div className='d-flex justify-content-center p-3 count-item'>
                            <Button className='p-1' variant='outline-dark' onClick={removeCount}>-</Button>
                            <p className='align-item-center'>{count}</p>
                            <Button className='p-1' variant='outline-dark' onClick={addCount}>+</Button>
                        </div>
                        <Button onClick={console.log(count)} variant="dark">Alquilar</Button>
        </div>

    )
}

export default ItemListCount