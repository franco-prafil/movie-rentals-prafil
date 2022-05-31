import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css';

const CartWidget = () => {
    return(
        <div className='cart-widget'>
            <ShoppingCartIcon className='cartColor' />
        </div>
    )
}

export default CartWidget