import { useContext } from 'react';
import { CartContext } from './CartContext.js';
import CartRender from './CartRender.js';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { deleteCart, calcSubtotal, calcTotal, calcTaxes } = useContext(CartContext);
    const carrito = useContext(CartContext);
    
    if (carrito.cartList.length === 0){
        return(
        <>
        <h1>Tu carrito esta vacío</h1>
        <div>
            <Link to="/">
                <button className="btn btn-primary" type="button">Continue Shopping</button>
            </Link>
        </div>
        </>
        )
    }

    return (
        <>
            <h1>Tu carrito</h1>
            <div className="cartwrapper">
                <div className="wrapper-cartrender">
                {
                    carrito.cartList.map(item => <CartRender Key={item.id} id={item.id} price={item.price} quantity={item.quantity} title={item.title} picture={item.picture} />)
                }
                </div>
                <div className="wrapper-cartinfo">
                    <div className="cartinfo">
                        <div className="cartinfo-titulo">Carrito</div>
                        <div className="cartinfo-subtotal">Subtotal: ${calcSubtotal()}</div>
                        <div className="cartinfo-taxes">Taxes: ${calcTaxes()}</div>
                        <div className="cartinfo-total">Total: ${calcTotal()}</div>
                        <button className="cartinfo-checkout btn btn-success" type="button">Checkout</button>
                    </div>
                </div> 
            </div>                
            <div className="cart-bottom">
                <button className="delete-button btn btn-danger" type="button" onClick={deleteCart}>Eliminar todos</button>
            </div>

        </>
    );
}

export default Cart;