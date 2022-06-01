import "./ItemDetail.css"
import { Card, Container } from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({data}) => {

    return (
        <>
        <Container className="d-flex justify-content-center">
        <Card className=" flex-row  " style={{ width: '60%' }} >
        
        <Card.Img className="col-4" src={`/${data.image}`} /> 

        <Card.Body>

        <Card.Title className='card-detail-title'>{data.title}</Card.Title>
        <Card.Text className='card-detail-category'>Categoría: {data.category}</Card.Text>
        <Card.Text className='card-detail-description'>{data.description}</Card.Text>
        <Card.Text className='card-text-price'>Precio por Día</Card.Text>
        <span className="price-detail p-1"  >$800</span>

        <div className="mt-5">

        <ItemCount  stock={5}  />
        </div>
        </Card.Body>
        </Card>

            
        
        </Container>
        </>
    )
}

export default ItemDetail