import { Link } from 'react-router-dom';

const Item = (props) => {
    return(
    <>
        <div class="wrapper">
            <div class="card-producto">
                <div class="card-producto_imagen">
                    <Link to={`/item/${props.id}`}><img src={props.picture} className="img-fluid" alt="producto" /></Link>
                </div>
                <div class="card-producto_tipo">{props.type}</div>
                <div class="card-producto_titulo">{props.title}</div>
                <div class="card-producto_precio">Precio: ${props.price}</div>
                <div class="card-producto_stock">
                    <div class="valor">Stock: {props.stock}</div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Item