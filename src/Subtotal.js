import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';


function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="subtotal">
        {/* price */}
        <CurrencyFormat
        renderText= {(value)=>(
            <>
            <p>
                Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift!
            </small>
            </>
        )}
        decimalScale={2}
        value = {getBasketTotal(basket)}
        thousandSeparatpr = {true}
        displayType={"text"}
        prefix= {'$'}
        />
<div>
    <button className="btn__proceed__checkout">Proceed to Checkout</button>
</div>
        

        </div>
    )
}

export default Subtotal;
