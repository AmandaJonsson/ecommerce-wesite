import { PRODUCTS } from '../../products';
import {Product} from './product';
import './shop.css';
export function Shop(){
    return(
        <div className="shop">
            <div className="shopTitle">
                <h1>Amandas shop</h1>
            </div>
            <div className="products">
                {PRODUCTS.map((product) => (
                    <Product data={product} />
                ))}
            </div>
        </div>
    );
}