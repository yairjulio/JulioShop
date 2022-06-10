import ShoppingCart from '../img/ShoppingCart.png'
import { useContext } from 'react';
import { CartContext } from './CartContext.js';

const CartWidget = () => {
    
    const cont = useContext(CartContext);

    return(
        <span className='badge badge-warning' id='lblCartCount'>
            <img src={ShoppingCart} alt="logo" height="50" width="50"></img>
        {cont.calcItems()} </span>
    )
}

export default CartWidget

