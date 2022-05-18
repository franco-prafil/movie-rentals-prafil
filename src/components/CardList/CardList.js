import {Card, Button} from "react-bootstrap";

const CardList = ({title}) => {
    return (
        <div>
            <h2>{title}</h2>
            <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
                <Card.Title>Primer Producto</Card.Title>
                <Card.Text>
                Descripcion del Primer Producto.
                </Card.Text>
                <Button variant="primary">Comprar</Button>
            </Card.Body>
            </Card>
        </div>
    )
}
export default CardList