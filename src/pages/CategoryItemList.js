import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
// Firestore
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../utils/firebaseConfig";
// Components
import ItemList from "../components/ItemList/ItemList";

// import getProducts from "../utils/customFetch";

const CategoryItemList = ({category}) => {
    const [products, setProducts] = useState([])
    const { id } = useParams()
    console.log(useParams);
    
    useEffect(()=> {
        setProducts([])
        getProduct()
        filterFirebase()
        .then((productos)=>{
            category ? filterFirebase(productos) : setProducts(productos)
        })
        .catch(()=>{

        })
        .finally(()=>{

        })
    }, [id])


        const getProduct = async () => {
            const filterSnapshot = await getDocs(collection(db, "productos"));
            const filterList = filterSnapshot.docs.map( (doc) => {
                let product = doc.data()
                product.id = doc.id
                return product
            })
            return filterList
        }

    // const filterByCategory = (array, id) =>{
    //     return array.map( (item) => {
    //         if(item.category == id){
    //             return setProducts(products => [...products, item])
    //         }
    //     })
    // }

    const filterFirebase = async () => {
        const productRef = collection(db, 'productos')
        const queryResult = query(productRef, where("category", "==" , id));
        const querySnapshot = await getDocs(queryResult);
        const productList = querySnapshot.docs.map ((doc) => {
            let product = doc.data ()
            product.id = doc.id
            return product
        })
        return (productList)
    }

    return (
        <> 
        <Container>
        <div className="mt-4">
                <ItemList title={category} products={products}/>
            
        </div>
        </Container>
        </>
    )
}

export default CategoryItemList