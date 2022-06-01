import {useState, useEffect} from "react"
import { productos } from "../../utils/customFetch";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () =>{
    const { id } = useParams()
    const [product, setProduct] = useState ({})


    useEffect(() => {
    
        const productFilter = productos.find( (product) => {
        return product.id === parseInt (id);
    });
    
    
    setProduct(productFilter);
    }, [id]);


    return(
        <>
            {Object.keys(product).length > 0 && <ItemDetail data={product}/>}

        </>
    )
};

export default ItemDetailContainer