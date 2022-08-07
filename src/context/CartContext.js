import { createContext, useState } from "react";

export const CartContext = createContext({})

const CartProvider = ({children}) => {
  
  const [cart, setCart] = useState([])

  function addItem(item,quantityToAdd) {
    
    const itemToAdd = {
      ...item,
      quantity : quantityToAdd
    }

    if (cart.length === 0) {
      setCart([itemToAdd])
      return

    } 
    
    const itemDuplicateIndex = cart.findIndex((itemInCart) => itemInCart.id === item.id)
    if (itemDuplicateIndex >= 0) {
      const itemToUpdate = {
        ...item,
        quantity: cart[itemDuplicateIndex].quantity + quantityToAdd
      }
      const cartDraft = [...cart]
      cartDraft[itemDuplicateIndex] = itemToUpdate
      setCart(cartDraft)

    } else {
      setCart([...cart,itemToAdd])
    }
    
  }
  
  function removeItem(itemId) {
    const cartDraft = [...cart]
    const cartDraftUpdated = cartDraft.filter((itemWanted) => itemWanted.id != itemId)
    setCart(cartDraftUpdated) 

  }

  function clear() {
    setCart([])
  }

 
  const valueToShare = {
      cart, addItem, removeItem, clear,
      countInCart: cart.length 
  }

  return (
    <CartContext.Provider value={valueToShare}>
      {children}
    </CartContext.Provider>
  )
} 
export default CartProvider