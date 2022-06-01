import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import ItemList from "../components/ItemList/ItemList";
import getProducts from "../utils/customFetch";
import { useParams } from "react-router-dom";

const CategoryItemList = ({category}) => {
    const [products, setProducts] = useState([])
    const { id } = useParams()
    console.log(useParams);
    
    useEffect(()=> {
        setProducts([])
        getProducts()
        .then((response)=>{
            filterByCategory(response)
        })
        .catch((err)=>{

        })
        .finally(()=>{

        })
    }, [id])

    const filterByCategory = (array) =>{
        return array.map( (item) => {
            if(item.category == id){
                return setProducts(products => [...products, item])
            }
        })
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