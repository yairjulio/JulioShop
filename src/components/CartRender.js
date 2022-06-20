import { CartContext } from "./CartContext.js";
import { useContext } from "react";
import { CartProduct, CartProductImage, CartProductImageType, CartProductPrice, CartProductQuantity, CartProductTitle, CartProductTotal, DeleteCart } from '../utils/StyledComp.js';

const CartRender = (props) => {
    
    const { removeItem, calcTotalPerItem } = useContext(CartContext);

    const removeId = () => {
        removeItem(props.id);
    }
    
    return(
    <>
        <CartProduct>
            <CartProductImage>
                <CartProductImageType src={props.picture} alt="producto"></CartProductImageType>
            </CartProductImage>
            <CartProductTitle>{props.title}</CartProductTitle>
            <CartProductQuantity>Cantidad: {props.quantity}</CartProductQuantity>
            <CartProductPrice>Precio: ${props.price}</CartProductPrice>
            <CartProductTotal>Subtotal: ${calcTotalPerItem(props.id)}</CartProductTotal>
            <DeleteCart className="btn btn-danger" type="button" onClick={removeId}>Borrar Item</DeleteCart>
        </CartProduct>
    </>
    )
}

export default CartRender