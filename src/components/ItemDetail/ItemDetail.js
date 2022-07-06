import "./ItemDetail.css"
import { useState } from 'react'
import { Link } from "react-router-dom"
import { Card, Button } from "react-bootstrap"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({data}) => {
    const [showButton, setShowButton] = useState(false)
    
    return (
        <div>
            <div className="d-flex justify-content-center item-detail-background" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, .50) 0%, rgba(0,0,0,.50) 100%), url("/${data.background}")`}}>
            <Card className=" flex-row  card-item-detail">
                <Card.Img className="card-detail-img" src={`/${data.image}`}/> 
                <Card.Body>
                    <Card.Title className='card-detail-title mt-3'>Título: <span className="fs-5 pt-2">{data.title}</span> </Card.Title>
                    <Card.Text className='card-detail-category'>Categoría: <span className="fs-8">{data.category}</span> </Card.Text>
                    <Card.Text className='card-detail-description'>Descripción: <br/> <span>{data.description}</span></Card.Text>
                        <iframe width="220" height="160" src={data.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <Card.Text className='card-text-price mt-2'>Precio por Día</Card.Text>
                    <span className="price-detail p-1"  >$800</span>
                    <div className="mt-4">
                        {!showButton ? 
                        <ItemCount  stock={5}  setShowButton={setShowButton} product={data} /> :
                        <Button className='mb-2' variant="dark">
                            <Link to='/cart'  className="text-decoration-none text-white">Finalizar Mi Compra</Link>
                        </Button> 
                        }
                    </div>
                </Card.Body>
            </Card>
            </div>
        </div>
    )
}

export default ItemDetail