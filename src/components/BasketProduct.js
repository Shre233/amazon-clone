import React from "react";
import "./style/Checkout.css";
import { useStateValue } from "../ContextProvider/StateProvider";
function BasketProduct({ id, Img, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
        type:'REMOVE_FROM_BASKET',
        id:id,
    })
  };
  return (
    <div className="basketProduct">
      <img className="bpImage" src={Img} alt="" />
      <div className="bpInfo">
        <p className="bpTitle">{title}</p>
        <div className="bpPrice">
          <strong>₹{price}</strong>
        </div>

        <div className="bpRating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket} className="bpButton">
          Remove From Basket
        </button>
      </div>
    </div>
  );
}

export default BasketProduct;
