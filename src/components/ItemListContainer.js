import {useState, useEffect} from "react";
import ItemList from "./ItemList";


const ItemListContainer = () => {
    const [items, setItems] = useState([])
    
    useEffect(() => {
        fetch('../data/data.json')
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
            .catch((err) => console.log(err)) 

    },[]) 


    return (
            <div>
                <ItemList items={items} />
            </div>
    );

};

export default ItemListContainer;
