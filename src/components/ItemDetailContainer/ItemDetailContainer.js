import {useState, useEffect} from "react"
import { useParams } from "react-router-dom";
// Components
import ItemDetail from "../ItemDetail/ItemDetail";
// Firestore
import { doc, getDoc } from "firebase/firestore";
import db from "../../utils/firebaseConfig";


const ItemDetailContainer = () =>{
    const { id } = useParams()
    const [product, setProduct] = useState ({})

    useEffect(() => {
        getProduct()
        .then((prod) => {
            setProduct(prod)
        })
    }, [id]);

    const getProduct = async () => {
        const docRef = doc (db, "productos", id)
        const docSnaptshot = await getDoc(docRef)
        let product = docSnaptshot.data()
        product.id = docSnaptshot.id
        return product
    }

    return(
        <>
        {Object.keys(product).length > 0 && <ItemDetail data={product}/>}
        </>
    )
};

export default ItemDetailContainer