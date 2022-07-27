import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = ({ items }) => {
  
  const [item, setItem] = useState([])
    
    useEffect(() => {
        fetch('../data/data.json')
            .then(res => res.json())
            .then(data => {
                setItem(data[0])
            }) 

    },[])

  
  return (
    <ItemDetail item={item}/>
  )
}

export default ItemDetailContainer;