import  "./ItemList.css";
import Item  from "../Item/Item";

const ItemList = ({products}) => {

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