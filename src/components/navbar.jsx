import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './navbar.css';
export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="links">
                <Link to="/"> Shop </Link>
                <Link to="/cart"> <FontAwesomeIcon icon={faShoppingCart} /> </Link>
            </div>
        </div>
    );
}