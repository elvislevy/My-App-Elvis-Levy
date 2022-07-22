import {useState, useEffect} from "react";
import ItemList from "./ItemList";


const ItemListContainer = () => {
    const [items, setItems] = useState([])
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => {
                setItems(users)
            }) 

    },[])

    return (
            <div>
                <ItemList items={items} />
            </div>
    );

};

export default ItemListContainer;
