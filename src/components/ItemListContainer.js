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

    },[])

    const onAdd = (cantidad) => {
        console.log(`Agregaste ${cantidad} de items en el carrito`)
    }


    return (
            <div>
                <ItemList items={items} onAdd={onAdd}/>
            </div>
    );

};

export default ItemListContainer;
