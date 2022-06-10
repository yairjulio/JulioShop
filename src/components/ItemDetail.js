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
                    <div className="wrapper-detail">
                        <div className="card-producto-detail">
                            <div className="card-producto-detail_imagen">
                                <img src={item.picture} className="card-producto-detail_imagen2" alt="producto" />
                            </div>
                            <div className="card-producto-detail_info">
                                <div className="card-producto-detail_tipo">{item.type}</div>
                                <div className="card-producto-detail_categoria">{item.category}</div>
                                <div className="card-producto-detail_titulo">{item.title}</div>
                                <div className="card-producto-detail_descripcion">{item.description}</div>
                                <div className="card-producto-detail_precio">Precio: ${item.price}</div>
                                <div className="card-producto-detail_stock">
                                    <div className="valor">Stock: {item.stock}</div>
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