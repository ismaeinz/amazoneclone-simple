import React from "react";
import "./Product.css";
import StarIcon from "../images/icons/star.png";
import { useAuth } from "../context/GlobalState";
const Product = ({ id, image, price, title, rating }) => {
  const { dispatch } = useAuth();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };
  // console.log(basket);
  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className="product-rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>
              <img src={StarIcon} alt="" />
            </p>
          ))}
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}> Add to Basket</button>
    </div>
  );
};

export default Product;
