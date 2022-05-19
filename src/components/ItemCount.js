import { useState } from 'react'


const ItemCount = (props) => {
    
    const[contador, setContador] = useState(parseInt(props.initial));
    const[stock, setStock] = useState(parseInt(props.stock));

    const increment = () => {
        if(contador<(props.stock)) setContador(contador+1);
    }

    const decrement = () => {
        if(contador>(props.initial)) setContador(contador-1);
    }

    const onAdd = () => {
        if(contador<=stock){
            alert("Items agregados");
            setStock(stock-contador);
        }
    }

    return(
        <>
        <div className="number">
            <span className="minus" onClick={decrement}>-</span>
            <input type="text" value = {contador}/>
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