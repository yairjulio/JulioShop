import { Link } from 'react-router-dom';

const Item = (props) => {
    return(
    <>
        <div className="wrapper">
            <div className="card-producto">
                <div className="card-producto_imagen">
                    <Link to={`/item/${props.id}`}><img src={props.picture} className="img-fluid" alt="producto" /></Link>
                </div>
                <div className="card-producto_tipo">{props.type}</div>
                <div className="card-producto_titulo">{props.title}</div>
                <div className="card-producto_precio">Precio: ${props.price}</div>
                <div className="card-producto_stock">
                    <div className="valor">Stock: {props.stock}</div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Item