import { useContext } from 'react';
import { CartContext } from './CartContext.js';
import CartRender from './CartRender.js';
import { Link } from 'react-router-dom';
import { CartContainer, CartRenderContainer, CartInfoContainer, CartInfo, CartInfoSubtotal, CartInfoTitle, CartInfoTaxes, CartInfoTotal, CartCheckoutButton, DeleteAllItemsButton, ContinueButton, Wrapper, Title } from '../utils/StyledComp.js';
import { serverTimestamp, setDoc, doc, collection, updateDoc, increment } from 'firebase/firestore';
import db from '../utils/firebaseConfig';

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
        <Title>Tu carrito esta vacío</Title>
        <Wrapper>
            <Link to="/">
                <ContinueButton className="btn btn-primary" type="button">Continue Shopping</ContinueButton>
            </Link>
        </Wrapper>
        </>
        )
    }

    return (
        <>
            <Title>Tu carrito</Title>
            <CartContainer>
                <CartRenderContainer>
                {
                    carrito.cartList.map(item => <CartRender key={item.id} id={item.id} price={item.price} quantity={item.quantity} title={item.title} picture={item.picture} />)
                }
                </CartRenderContainer>
                <CartInfoContainer>
                    <CartInfo>
                        <CartInfoTitle>Carrito</CartInfoTitle>
                        <CartInfoSubtotal>Subtotal: ${calcSubtotal()}</CartInfoSubtotal>
                        <CartInfoTaxes>Impuestos: ${calcTaxes()}</CartInfoTaxes>
                        <CartInfoTotal>Total: ${calcTotal()}</CartInfoTotal>
                        <CartCheckoutButton className="btn btn-success" type="button" onClick={createOrder}>Checkout</CartCheckoutButton>
                    </CartInfo>
                </CartInfoContainer> 
            </CartContainer>                
            <div className="cart-bottom">
                <DeleteAllItemsButton className="btn btn-danger" type="button" onClick={deleteCart}>Eliminar todos</DeleteAllItemsButton>
            </div>

        </>
    );
}

export default Cart;