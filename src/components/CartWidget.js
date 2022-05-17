import ShoppingCart from '../img/ShoppingCart.png'


const CartWidget = () => {
    return(
        <span className='badge badge-warning' id='lblCartCount'>
            <img src={ShoppingCart} alt="logo" height="50" width="50"></img>
        5 </span>
    )
}

export default CartWidget

