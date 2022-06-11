import { useState } from 'react'


const ItemCount = ({stock, initial, onAdd }) => {
    
    const[contador, setContador] = useState(parseInt(initial));

    const increment = () => {
        if(contador<(stock)) setContador(contador+1);
    }

    const decrement = () => {
        if(contador>(initial)) setContador(contador-1);
    }


    return(
        <>
        <div className="number">
            <span className="minus" onClick={decrement}>-</span>
            <span className="input">{contador}</span>
            <span className="plus" onClick={increment}>+</span>
        </div>
        {
            stock
            ?<button className="agregar-carrito btn btn-primary" type="button" onClick={() => onAdd(contador)}>Agregar al carrito</button>
            :<button className="agregar-carrito btn btn-primary" type="button" disabled>Agregar al carrito</button>
        }
        </>
    )
}

export default ItemCount