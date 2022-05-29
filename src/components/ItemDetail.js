
import ItemCount from './ItemCount.js';

const ItemDetail = ({ item }) => {

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
                                <ItemCount stock={item.stock} initial="1"/>
                            </div>
                        </div>
                    </div>
                </div>
                : <p>Cargando...</p>
            }
        </>
    )
}

export default ItemDetail