import './ItemListContainer.css';
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import ItemList from "../ItemList/ItemList";
// import ItemCounts from '../ItemCount/ItemCount';
import getProducts from "../../utils/customFetch";

const ItemListContainer = ({title, description, image}) => {

    const [products, setProducts] = useState([])

    useEffect(()=> {
        getProducts()
        .then((response)=>{
            setProducts(response)
        })
        .catch((err)=>{

        })
        .finally(()=>{

        })
    })

    return (
        <> 
        <Container> 
        <div>
                <ItemList products={products}/>
            
        </div>
        </Container>
        </>
    )
}
export default ItemListContainer