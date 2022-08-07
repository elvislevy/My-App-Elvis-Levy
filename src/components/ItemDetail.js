import ItemCount from "./ItemCount";
import BackgroundImage from '../images/bg-img.png';
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";


const ItemDetail = ({ item }) => {


  const { addItem } = useContext(CartContext)
  const navigate = useNavigate();
  //const [count, setCount] = useState(0);

  
  const onAdd = (amount) => {
    console.log(`Agregaste ${amount} de items en el carrito`)
    //setCount(amount)
    addItem(item, amount)
    //navigate('/cart')
  }
  
  const styleBackground = {
    background: `url(${BackgroundImage})`, 
    backgroundSize: "cover",
  }

  return (
    <div className="d-flex justify-content-center pt-5">
      <div className="card mb-3 w-75" style={{"maxWidth": "1200px",}}>
        <div className="row g-0">
          <div className="col-md-4 d-flex justify-content-center" style={styleBackground}>
            <img src={item?.img} className="img-fluid rounded-start align-self-center" alt="..."/>
          </div>
            <div className="col-md-8 h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex w-100 justify-content-between mb-4">
                  <h2 className="card-title">{item?.marca}</h2>
                </div>
                <h5 className="card-title">{item?.modelo}</h5>
                <p className="card-text">{item?.descrip}</p>
                <p className="card-text text fst-italic">{item?.estilo}</p>
                <h2 className="card-title fw-normal text-center">${item?.precio}</h2>
                <ItemCount stock={15} initial={1} onAdd={onAdd} />
                <p className="card-text align-self-end"><small className="text-muted">Ecommerce Oficial © </small></p>
              </div>
            </div>
        </div>
      </div>
    </div>



  )
}

export default ItemDetail;