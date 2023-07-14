import React from "react";
import "./product.css";
function Product(props) {
  return (
    <div className="product">
      <div className="productInfo">
        <p>{props.title}</p>
        <p className="productPrice">
          <small>₹</small>
          <strong>{props.price}</strong>
        </p>
        <div className="productRating">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img className="productImg" src={props.Img} alt="#" />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
