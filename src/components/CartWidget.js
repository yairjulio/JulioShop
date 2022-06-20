import { useContext } from 'react';
import { CartContext } from './CartContext.js';
import { CartImage, CartSpan } from '../utils/StyledComp.js';

const CartWidget = () => {
    
    const cont = useContext(CartContext);

    return(
        <CartSpan className='badge badge-warning' id='lblCartCount'>
            <CartImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Shopping_Cart_Flat_Icon_Vector.svg/2048px-Shopping_Cart_Flat_Icon_Vector.svg.png" alt="logo"/>
        {cont.calcItems()} 
        </CartSpan>
    )
}

export default CartWidget

