import Item from './Item.js';
import { ProdContainer } from '../utils/StyledComp.js';

const ItemList = ({ items }) => {

    return(
        <ProdContainer>
            {
                items.length > 0
                ? items.map(producto => <Item key={producto.id} id={producto.id} stock={producto.stock} price={producto.price} type={producto.type} title={producto.title} picture={producto.picture} />)
                : <p>Cargando...</p>
            }
        </ProdContainer>        
    )
}

export default ItemList