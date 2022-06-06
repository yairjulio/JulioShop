import { useState, useContext } from 'react';
import ItemCount from './ItemCount.js';
import ShowCart from './ShowCart.js';
import { CartContext } from './CartContext.js';


const ItemDetail = ({ item }) => {

    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);

    const onAdd = (cantidad) => {
        alert("Items agregados");
        setItemCount(cantidad);
        test.addToCart(item, cantidad);
    }

    return(
        <>
            {
                item.picture
                ?
                <div className="contenedor-producto">
                    <div class="wrapper-detail">
                        <div class="card-producto-detail">
                            <div class="card-producto-detail_imagen">
                                <img src={item.picture} className="card-producto-detail_imagen2" alt="producto" />
                            </div>
                            <div class="card-producto-detail_info">
                                <div class="card-producto-detail_tipo">{item.type}</div>
                                <div class="card-producto-detail_categoria">{item.category}</div>
                                <div class="card-producto-detail_titulo">{item.title}</div>
                                <div class="card-producto-detail_descripcion">{item.description}</div>
                                <div class="card-producto-detail_precio">Precio: ${item.price}</div>
                                <div class="card-producto-detail_stock">
                                    <div class="valor">Stock: {item.stock}</div>
                                </div>
                                {
                                    itemCount === 0
                                    ? <ItemCount stock={item.stock} onAdd={onAdd} initial={itemCount}/>
                                    : <ShowCart/>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                : <p>Cargando....</p>
            }
        </>
    )
}

export default ItemDetail