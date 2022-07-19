import React,{useState} from "react";



function ItemCount ({stock,initial, onAdd}) {
    
    const [cantidad, setCantidad] = useState(parseInt(initial));
    const disponible = parseInt(stock)
    const minimo = parseInt(initial)

    const suma = () => {
        (cantidad < disponible) && setCantidad(cantidad + 1)
    }
    const resta = () => {
        (cantidad > minimo) && setCantidad(cantidad - 1)
    }
    const reset = () => {
        setCantidad(minimo)
    }

    return(
        <div className="container my-5">
            <div className="card text-center my-5">
                <div className="card-body">
                    <h1> Contador</h1>
                    <div className="my-5">
                        <h2 className="my-5">{cantidad}</h2>
                        <button className="btn btn-success mx-3" onClick={suma}> + </button>
                        <button className="btn btn-secondary mx-3" onClick={reset} disabled={cantidad === minimo}> Resetear </button>
                        <button className="btn btn-danger mx-3" onClick={resta} disabled={cantidad === minimo}> - </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;