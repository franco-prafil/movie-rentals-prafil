import  "./ItemList.css";
import Item  from "../Item/Item";
import { useState, useEffect  } from 'react';

const ItemList = () => {

    const [products, setProducts] = useState([])
    const productos = 
    [
    {
        id: 1,
        title : 'Star Wars: The Force Awakens',
        description: 'Película',
        image: 'star_wars_1.jpg',
    },

    {
        id: 2,
        title : 'Star Wars: The Last Jedi',
        description: 'Película',
        image: 'star_wars_2.jpg',
    },

    {
        id: 3,
        title : 'Star Wars: The Rise Of Skywalker',
        description: 'Película',
        image: 'star_wars_3.jpg',
    }
    ]
    const getProducts = () =>{
        return new Promise ((resolve, reject)=> {
            setTimeout(() => {
                resolve(productos)
            }, 2000);
        })
    }

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

    return(
        <div className="direction-item">
            {
                products.map( ({title, description, image, id}) => {
                    return(
                        <div key={id}>
                            <Item className="direction-item" title={title} description={description} image={image}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ItemList