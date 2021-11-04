import React from "react";
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal"

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
      {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Basket Is Empty</h2>
                    <p>
                        You have no items in the basket. To buy an item
                        click "Add to basket" bellow that item. Thanks!
                    </p>
                </div>
                ):(
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {/* List of the checkiut products */}
                    {basket.map(item=>(
                        <CheckoutProduct
                        id ={item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating}
                        />
                    ))}
                    
                </div>
            )}
            </div>
            {basket.length>0 && (
                <div className="checkout__right">
                    <Subtotal/> 
                </div>
            )}
    </div>
  );
}

export default Checkout;
