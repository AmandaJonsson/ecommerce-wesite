import {ShopContext} from '../../context/shop-context';
import {useContext} from 'react';
export function Product (props) {
    const {id, productName, price, productImage} = props.data;
    const {addToCart, cartItems} = useContext(ShopContext)

    const cartItemAmount = cartItems[id];
    console.log(cartItemAmount);
    return (
        <div key={id} className="product">
            <img alt='' src={productImage}/>
            <div className="description">
                <p><b>{productName}</b></p>
                <p>{price} kr</p>
            </div>
            <button className="addToCartButton" onClick={() => addToCart(id)}>Add to cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}</button>
        </div>
    );
}