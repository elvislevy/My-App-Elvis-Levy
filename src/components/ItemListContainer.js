import {useState, useEffect} from "react";
import ItemCount from "./ItemCount";
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

    const onAdd = (amount) => {
        console.log(`Agregaste ${amount} de items en el carrito`)
    }


    return (
            <div>
                <ItemList items={items} />
                <ItemCount initial={1} stock={15} onAdd={onAdd} />
            </div>
    );

};

export default ItemListContainer;
