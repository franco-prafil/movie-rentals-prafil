import './ItemListContainer.css';
// import {Card} from "react-bootstrap";
import ItemList from "../ItemList/ItemList";
import ItemCounts from '../ItemCount/ItemCount';

const ItemListContainer = ({title, description, image}) => {
    return (
        <div className="d-flex justify-content-center ">
                <ItemList />
            
        </div>
    )
}
export default ItemListContainer