import React,{useState} from "react";



function ItemCount ({stock,initial, onAdd}) {
    
    const [amount, setAmount] = useState(initial);
    

    const suma = () => {
        (amount < stock) && setAmount(amount + 1)
    }
    const resta = () => {
        (amount > initial) && setAmount(amount - 1)
    }
    const reset = () => {
        setAmount(initial)
    }

    return(
        <div className="container my-5">
            <div className="card text-center my-5">
                <div className="card-body">
                    <h1>Contador</h1>
                    <div className="my-5">
                        <h2 className="my-5">{amount}</h2>
                        <button className="btn btn-success mx-3" onClick={suma}> + </button>
                        <button className="btn btn-secondary mx-3" onClick={reset} disabled={amount === initial}> Resetear </button>
                        <button className="btn btn-danger mx-3" onClick={resta} disabled={amount === initial}> - </button>
                    </div>
                    <div className="my-5">
                        <button className="btn btn-primary mx-3" onClick={() => onAdd(amount)}>Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;