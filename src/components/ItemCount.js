import React,{useState} from "react";



function ItemCount ({stock,initial, onAdd}) {
    
    const [amount, setAmount] = useState(initial);
    

    const suma = () => {
        setAmount(amount + 1)
    }
    const resta = () => {
        setAmount(amount - 1)
    }
    const reset = () => {
        setAmount(initial)
    }

    return(
        <div className="container">
            <div className="card text-center">
                <div className="card-body">
                    <div className="my-1 d-flex justify-content-center">
                        <button className="btn btn-success mx-4 h-25" onClick={suma} disabled={amount === stock}> + </button>
                        <h2 className="">{amount}</h2>
                        <button className="btn btn-danger mx-4 h-25" onClick={resta} disabled={amount === initial}> - </button>
                    </div>
                    <div className="my-4">
                        <button className="btn btn-secondary mx-3" onClick={reset} disabled={amount === initial}> Resetear </button>
                    </div>
                    <div className="my-4">
                        <button className="btn btn-primary mx-3" onClick={() => onAdd(amount)}>Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;