import { CartContext } from "./CartContext.js";
import { useContext } from "react";

const CartRender = (props) => {
    
    const { removeItem } = useContext(CartContext);

    const removeId = () => {
        removeItem(props.id);
    }
    
    return(
    <>
        <div class="wrapper-cartrender">
            <div class="cartrender-producto">
                <div class="cartrender-producto_imagen">
                    <img src={props.picture} className="cartrender-producto_imagen2" alt="producto"></img>
                </div>
                <div class="cartrender-producto_titulo">{props.title}</div>
                <div class="cartrender-producto_cantidad">Cantidad: {props.quantity}</div>
                <div class="cartrender-producto_precio">Precio: ${props.price}</div>
                <button className="eliminar-carrito btn btn-danger" type="button" onClick={removeId}>Borrar Item</button>
            </div>
        </div>
    </>
    )
}

export default CartRender