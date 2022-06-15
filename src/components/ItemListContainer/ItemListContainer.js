import './ItemListContainer.css';
import { useState, useEffect } from "react";
// Firestore
import { collection, getDocs } from "firebase/firestore";
import db from '../../utils/firebaseConfig';

import { Container } from "react-bootstrap";
import ItemList from "../ItemList/ItemList";
// import getProducts from "../../utils/customFetch";


const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    
    // useEffect(()=> {
    //     getProducts()
    //     .then((response)=>{
    //         setProducts(response)
    //     })
    //     .catch((err)=>{

    //     })
    //     .finally(()=>{

    //     })
    // })

    useEffect(()=> {
        setProducts([]);
        getProducts()
        .then( (productos) => {
            setProducts(productos)
        })
        .catch(()=>{

        })
        .finally(()=>{

        })
    }, [])

    const getProducts = async () => {
        const productSnapshot = await getDocs(collection(db, "productos"));
        const productList = productSnapshot.docs.map ((doc) => {
            let product = doc.data ()
            product.id = doc.id
            return product
        })
        return (productList)
    }


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