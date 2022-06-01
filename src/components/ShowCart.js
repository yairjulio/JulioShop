import { Link } from 'react-router-dom';

const ShowCart = () => {
    return(
        <Link to='/cart'>
            <button className="boton-checkout btn btn-success" type="button">CheckOut</button>
        </Link>
    )
}

export default ShowCart