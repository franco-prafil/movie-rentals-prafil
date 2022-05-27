import {useState, useEffect} from "react"
import { producto } from "../../utils/customFetch";
import ItemDetail from "../ItemDetail/ItemDetail";
// import {  } from "module";

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState ({})

    const getItem = () => {
        return new Promise ((resolve, reject)=>{
            setTimeout(() => {
                resolve(producto)
            }, 2000);
        })
    }

    useEffect(() => {
        getItem()
        .then( (res) => {
            setProduct(res)
        })
    }, [])

    return(
        <>
            {/* <div> ItemDetail</div> */}
            <ItemDetail data={product}/>
        </>
    )
}

export default ItemDetailContainer