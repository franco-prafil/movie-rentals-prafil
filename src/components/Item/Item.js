import './Item.css';
import {Card} from "react-bootstrap";
import ItemCount from '../ItemCount/ItemCount';

const Item = ({title, description, image}) => {
    const onAdd = (count) => {
        console.log(`Se agregarón ${count} productos`);
    }
    return(
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img className='' variant="top" src={`./${image}`} />
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