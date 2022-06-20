import { useState } from 'react';
import { NumberContainer, MinusButton, PlusButton, Input, AddToCartButton } from '../utils/StyledComp.js';


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
        <NumberContainer>
            <MinusButton onClick={decrement}>-</MinusButton>
            <Input>{contador}</Input>
            <PlusButton onClick={increment}>+</PlusButton>
        </NumberContainer>
        {
            stock
            ?<AddToCartButton className="btn btn-primary" type="button" onClick={() => onAdd(contador)}>Agregar al carrito</AddToCartButton>
            :<AddToCartButton className="btn btn-primary" type="button" disabled>Agregar al carrito</AddToCartButton>
        }
        </>
    )
}

export default ItemCount