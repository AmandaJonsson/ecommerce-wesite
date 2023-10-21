import {useNavigate} from "react-router-dom";
import {PRODUCTS} from '../../products';
import {useContext} from 'react';
import {ShopContext} from '../../context/shop-context';
import {CartItem} from './cartItem';
import './cart.css';
export function Cart() {

    const {cartItems, getTotalCartAmount} = useContext(ShopContext);
    const navigate = useNavigate();
    return(
        <div className="cart">
            <div>
                <h1>
                    Your cart items
                </h1>
            </div>
            <div className="cart">
                {PRODUCTS.map((product) => {
                    if(cartItems[product.id] !== 0) {
                        return <CartItem key={product.id} data={product}/>
                    } else {
                        return null;
                    }
                })}
            </div>
            {getTotalCartAmount() > 0 ?
            <div className="checkout">
                <p>Totalt: {getTotalCartAmount()} kr</p>
                <button>Checkout</button>
                <button onClick={() => navigate("/")}>Continue shopping</button>
            </div> : <h1> Your cart is empty </h1> }
        </div>
    );
}