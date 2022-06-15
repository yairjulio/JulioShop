import { useContext } from 'react';
import { CartContext } from './CartContext.js';
import CartRender from './CartRender.js';
import { Link } from 'react-router-dom';
import { serverTimestamp, setDoc, doc, collection, updateDoc, increment } from 'firebase/firestore';
import db from './firebaseConfig.js';

const Cart = () => {
    const { deleteCart, calcSubtotal, calcTotal, calcTaxes } = useContext(CartContext);
    const carrito = useContext(CartContext);
    
    const createOrder = () => {
        
        const orderItems = carrito.cartList.map(item => ({
            id: item.id,
            title: item.title,
            price: item.price,
            quantity: item.quantity
        }))
        
        let order = {
            buyer: {
                name: "Yair Julio",
                email: "yairjulio@gmail.com",
                phone: "4943 6635"
            },
            date: serverTimestamp(),
            total: calcTotal(),
            items: orderItems
        };

        const createFirebaseOrder= async () => {
            const newOrder = doc(collection(db,"orders"));
            await setDoc(newOrder, order);
            return newOrder;
        }

        createFirebaseOrder()
            .then(result => alert('Your order was successfully placed. Order ID is ' + result.id))
            .catch(err => console.log(err));

        carrito.cartList.forEach(async (item) => {
            const itemRef = doc(db,"items",item.id)
            await updateDoc(itemRef,{
                stock: increment(-item.quantity)
            })
        });

        carrito.deleteCart()

    }

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
                    carrito.cartList.map(item => <CartRender key={item.id} id={item.id} price={item.price} quantity={item.quantity} title={item.title} picture={item.picture} />)
                }
                </div>
                <div className="wrapper-cartinfo">
                    <div className="cartinfo">
                        <div className="cartinfo-titulo">Carrito</div>
                        <div className="cartinfo-subtotal">Subtotal: ${calcSubtotal()}</div>
                        <div className="cartinfo-taxes">Taxes: ${calcTaxes()}</div>
                        <div className="cartinfo-total">Total: ${calcTotal()}</div>
                        <button className="cartinfo-checkout btn btn-success" type="button" onClick={createOrder}>Checkout</button>
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