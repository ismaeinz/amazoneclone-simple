import React from "react";
import "./Checkout.css";
import CheckoutImg from "../images/checkoutAd.jpg";
import { useAuth } from "../context/GlobalState";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const { user, basket } = useAuth();
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img src={CheckoutImg} alt="" className="checkout-ad" />
        <h3>Hello , {user?.email}</h3>
        <h2 className="checkout-title"> your shopping card</h2>
        {basket.length > 0 ? (
          basket.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))
        ) : (
          <p>Not Have items</p>
        )}
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
