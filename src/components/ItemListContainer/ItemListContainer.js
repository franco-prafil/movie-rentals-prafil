import './ItemListContainer.css';
import {Card} from "react-bootstrap";
import ItemCounts from '../ItemCount/ItemCount';

const ItemListContainer = ({title, description, image }) => {
    return (
        <div className="d-flex justify-content-center ">
            <Card style={{ width: '18rem' }}>
            <Card.Img className='' variant="top" src={`./${image}`} />
            <Card.Body>
                <Card.Title className='card-title'>{`${title}`}</Card.Title>
                <Card.Text className='card-description'>
                {description}
                </Card.Text>
                <ItemCounts />
            </Card.Body>
            </Card>
        </div>
    )
}
export default ItemListContainer