import { Link } from 'react-router-dom';

const Item = (props) => {
    return(
    <>
        <div className="wrapper">
            <div className="card-producto">
                <div className="card-producto_imagen">
                    <img src={props.picture} className="img-fluid" alt="producto" />
                </div>
                <div className="card-producto_tipo">{props.type}</div>
                <div className="card-producto_titulo">{props.title}</div>
                <div className="card-producto_precio">Precio: ${props.price}</div>
                <div className="card-producto_stock">
                    <Link to={`/item/${props.id}`} style={{ color: 'white', textDecoration:'none' }}><div className="valor">Mas Detalles</div></Link>
                </div>
            </div>
        </div>
    </>
    )
}

export default Item