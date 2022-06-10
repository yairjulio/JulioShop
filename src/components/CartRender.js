import { CartContext } from "./CartContext.js";
import { useContext } from "react";

const CartRender = (props) => {
    
    const { removeItem, calcTotalPerItem } = useContext(CartContext);

    const removeId = () => {
        removeItem(props.id);
    }
    
    return(
    <>
        <div className="cartrender-producto">
            <div className="cartrender-producto_imagen">
                <img src={props.picture} className="cartrender-producto_imagen2" alt="producto"></img>
            </div>
            <div className="cartrender-producto_titulo">{props.title}</div>
            <div className="cartrender-producto_cantidad">Cantidad: {props.quantity}</div>
            <div className="cartrender-producto_precio">Precio: ${props.price}</div>
            <div className="cartrender-producto_total">Subtotal: ${calcTotalPerItem(props.id)}</div>
            <button className="eliminar-carrito btn btn-danger" type="button" onClick={removeId}>Borrar Item</button>
        </div>
    </>
    )
}

export default CartRender