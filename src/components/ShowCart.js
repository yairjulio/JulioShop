import { Link } from 'react-router-dom';
import { CheckoutButton } from '../utils/StyledComp.js'

const ShowCart = () => {
    return(
        <Link to='/cart'>
            <CheckoutButton className="btn btn-success" type="button">CheckOut</CheckoutButton>
        </Link>
    )
}

export default ShowCart