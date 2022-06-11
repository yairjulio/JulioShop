import Item from './Item.js';

const ItemList = ({ items }) => {

    return(
        <div className="contenedor-productos">
            {
                items.length > 0
                ? items.map(producto => <Item key={producto.id} id={producto.id} stock={producto.stock} price={producto.price} type={producto.type} title={producto.title} picture={producto.picture} />)
                : <p>Cargando...</p>
            }
        </div>
        
    )
}

export default ItemList