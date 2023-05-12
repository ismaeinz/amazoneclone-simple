import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/GlobalState";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../context/AppReducer";
import "./Payment.css";
import { CartElement } from "@stripe/react-stripe-js";
import axios from "axios";
const Payment = () => {
  const { basket, user } = useAuth();
  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
    };
  }, [basket]);
  const handleChange = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="payment">
      <div className="payment-container">
        <h1>
          Checkout (<Link to="/checkout">{basket.length} items </Link>)
        </h1>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment-address">
            <p>{user?.email}</p>
            <p>Cairo</p>
          </div>
        </div>
        {/*  */}
        <div className="payment-section">
          <div className="payment-title">
            <h3> Review Item and delivery</h3>
          </div>
          <div className="payment-items">
            {basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/*  */}
        <div className="payment-section">
          <h3> Payment Methods</h3>
          <div className="payment-details">
            <form onSubmit={handleSubmit}>
              <CartElement onChange={handleChange} />
              <CurrencyFormat
                renderText={(value) => <h3>Order Total:{value}</h3>}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
              <button>
                <span>Buy Now</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
