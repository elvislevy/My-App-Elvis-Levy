import React,{useState} from "react";



function ItemCount ({stock,initial, onAdd}) {
    
    const [amount, setAmount] = useState(initial);
    

    const suma = () => {
        setAmount(amount + 1)
    }
    const resta = () => {
        setAmount(amount - 1)
    }
    

    return(
        <div className="container">
            <div className="text-center">
                <div className="card-body">
                    <div className="my-1 d-flex justify-content-center">
                        <button className="btn btn-success h-25 mx-4 fw-bold" onClick={suma} disabled={amount === stock}>+</button>
                        <h2 className="">{amount}</h2>
                        <button className=" btn btn-danger h-25 mx-4 fw-bold" onClick={resta} disabled={amount === initial}> - </button>
                    </div>
                    <div className="my-4">
                        <button className="btn btn-dark mx-3" onClick={() => onAdd(amount)}>Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;