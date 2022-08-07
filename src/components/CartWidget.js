import { useContext, useEffect, useState } from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import { CartContext } from '../context/CartContext';



const CartWidget = () => {
    
    const { countInCart, cart } = useContext(CartContext);
    const [tone, setTone] = useState("#212529");
    
    useEffect(() => {
      countInCart != 0 && setTone("white")  
    },[countInCart])

    return(
        <div className='d-flex justify-content-center align-items-center' style={{color: "white", fontSize: "35px"}}>
            <AiOutlineShopping />
            <span style={{color: tone, fontSize: "32px"}}>{countInCart}</span>
        </div>

    );

};

export default CartWidget;