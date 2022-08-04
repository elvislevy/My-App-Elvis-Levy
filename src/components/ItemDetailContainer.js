import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
  
  const [item, setItem] = useState([])
  const { itemId } = useParams()
    
  useEffect(() => {
    fetch('../data/data.json')
      .then(res => res.json())
      .then(data => {
        const product = data.find((i) => i.id === itemId)
        setItem(product)
      })
      .catch((error) => console.log(error)) 

  },[itemId])

  
  
  return (
    <ItemDetail item={item}/>
  )
}

export default ItemDetailContainer;