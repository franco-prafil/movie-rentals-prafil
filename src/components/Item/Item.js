import './Item.css';
import { Card, Button } from "react-bootstrap";
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const Item = ({title, description, image, id}) => {
    const onAdd = (count) => {
        console.log(`Se agregarón ${count} productos`);
    }
    return(
        <div>
            <Card className='card-item' style={{ width: '18rem' }}>
            <div className='item__img-box'>
            <Card.Img className='' variant="top" src={`./${image}`} />
            </div>
            <Button variant="dark" className="item-button-detail">
                <Link to={`/product/${id}`} className="text-decoration-none text-white">Detalle</Link>
            </Button>
            <Card.Body>
                <Card.Title className='card-title'>{`${title}`}</Card.Title>
                <Card.Text className='card-description'>
                {description}
                </Card.Text>
            </Card.Body>
            <ItemCount onAdd={onAdd} stock={5} />
            </Card>
        </div>
    )
}

export default Item