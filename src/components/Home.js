import React from "react";
import "./Home.css";
import HomeImg from "../images/home.jpg";
import Product from "./Product";
import shortid from "shortid";
import I1 from "../images/products/1.png";
import I6 from "../images/products/6.png";
import I2 from "../images/products/2.png";
import I3 from "../images/products/3.png";
import I4 from "../images/products/4.png";
import I5 from "../images/products/5.png";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <img src={HomeImg} alt="" className="home-img" />
        <div className="home-row">
          <Product
            id={shortid.generate()}
            image={I1}
            price={1}
            title="title"
            rating={5}
          />
          <Product
            id={shortid.generate()}
            image={I2}
            price={1}
            title="title"
            rating={5}
          />
        </div>
        <div className="home-row">
          <Product
            id={shortid.generate()}
            image={I3}
            price={1}
            title="title"
            rating={5}
          />
          <Product
            id={shortid.generate()}
            image={I4}
            price={1}
            title="title"
            rating={5}
          />
          <Product
            id={shortid.generate()}
            image={I5}
            price={1}
            title="title"
            rating={5}
          />
        </div>
        <div className="home-row">
          <Product
            id={shortid.generate()}
            image={I6}
            price={1}
            title="title"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
