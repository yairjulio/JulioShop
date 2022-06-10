import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget.js';
import Shop from '../img/Shop.png';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext.js';
import { useContext } from 'react';


const Navbar = () =>{

    const items = useContext(CartContext);

    const total = items.cartList.length;

    return(
        <>
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <h1 className="navbar-brand"><img src={Shop} className="shopicon" alt="logo"/><Link to="/" style={{ color: 'white', textDecoration:'none' }}>JulioShop</Link></h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav mx-auto">
                <h4 className="nav-item nav-link"><Link to="/category/1" style={{ color: 'white', textDecoration:'none' }}>Peliculas</Link></h4>
                <h4 className="nav-item nav-link"><Link to="/category/2" style={{ color: 'white', textDecoration:'none' }}>Shows</Link></h4>
                <h4 className="nav-item nav-link"><Link to="/category/3" style={{ color: 'white', textDecoration:'none' }}>Arte</Link></h4>
                <h4 className="nav-item nav-link"><Link to="/category/4" style={{ color: 'white', textDecoration:'none' }}>Cantantes</Link></h4>
                </div>
            </div>
            <ul className="navbar-nav navbar-right">
                {(total) && <Link to="/cart" style={{ color: 'white', textDecoration:'none' }}><CartWidget /></Link>}              
            </ul>
        </nav>
        </>
    )
}

export default Navbar;