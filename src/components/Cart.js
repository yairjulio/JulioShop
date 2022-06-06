import { useContext } from 'react';
import { CartContext } from './CartContext.js';
import CartRender from './CartRender.js';

const Cart = () => {
    const { deleteCart } = useContext(CartContext);
    const carrito = useContext(CartContext);
    
    if (carrito.cartList.length === 0){
        return(<p>Tu carrito está vacío</p>)
    }

    return (
        <>
            {
                carrito.cartList.map(item => <CartRender Key={item.id} id={item.id} price={item.price} quantity={item.quantity} title={item.title} picture={item.picture} />)
            }
            <button class="btn btn-danger" type="button" onClick={deleteCart}>Eliminar todos</button>
        </>
    );
}

export default Cart;