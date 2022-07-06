import './ItemListContainer.css';
import { useState, useEffect } from "react";
// Firestore
import { collection, getDocs } from "firebase/firestore";
import db from '../../utils/firebaseConfig';

import ItemList from "../ItemList/ItemList";


const ItemListContainer = () => {

    const [products, setProducts] = useState([])

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
        <div className='m-5'> 
        <div>
                <ItemList products={products}/>
            
        </div>
        </div>
        </>
    )
}
export default ItemListContainer