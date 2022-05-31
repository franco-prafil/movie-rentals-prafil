import {useState, useEffect} from "react"
// import { productos } from "../../utils/customFetch";
import getProducts from "../../utils/customFetch";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams, useNavigate } from "react-router-dom";

const ItemDetailContainer = () =>{
    const { id } = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState ({})

    // const getItem = () => {
    //     return new Promise ((resolve, reject)=>{
    //         setTimeout(() => {
    //             resolve(producto)
    //         }, 2000);
    //     })
    // }

    useEffect(() => {
    //     getItem()
    //     .then( (res) => {
    //         setProduct(res)
    //     })
    // }, [])
    if(productFilter === undefined){
        navigate('/notFound')
    }else {
        setProduct(productFilter)
    }
}, [id])

const productFilter = getProducts.find( (product) => {
    return product.id == id
})

    return(
        <>
            {Object.keys(product).length > 0 && <ItemDetail data={product}/>}

        </>
    )
}

export default ItemDetailContainer