import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget.js';
import Shop from '../img/Shop.png';


const Navbar = () =>{
    return(
        <>
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#"><img src={Shop} className="shopicon" />JulioShop</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <a className="nav-item nav-link" href="#">Opcion 1</a>
                <a className="nav-item nav-link" href="#">Opcion 2</a>
                <a className="nav-item nav-link" href="#">Opcion 3</a>
                <a className="nav-item nav-link" href="#">Opcion 4</a>
                </div>
            </div>
            <ul className="navbar-nav navbar-right">
                <CartWidget></CartWidget>
            </ul>
        </nav>
        </>
    )
}

export default Navbar;