import "./ItemDetail.css"
import { Card, Container } from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({data, stock}) => {

    return (
        <>
        <Container className="d-flex justify-content-center">
        <Card className="" style={{ width: '80%' }} >
        
        <Card.Img className="col-4" src={data.image} /> 

        <Card.Body>

        <Card.Title className='card-title'>{data.title}</Card.Title>
        <Card.Text className='card-description'>{data.category}</Card.Text>
        <Card.Text className=''>{data.description}</Card.Text>
        <Card.Text className='h3 pb-2'>Precio por Día</Card.Text>
        <span className="price-detail h4 p-1 mb-1"  >$800</span>

        
        <ItemCount stock={5}  />
        </Card.Body>
        </Card>

            
        
        </Container>
        </>
    )
}

export default ItemDetail