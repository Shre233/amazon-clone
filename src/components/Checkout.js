import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import Banner from "../images/CheckoutBanner.jpg";
import BasketProduct from "./BasketProduct";
import { useStateValue } from "../ContextProvider/StateProvider";
function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkoutLeftPane">
        <img className="checkoutBanner" src={Banner} alt="" />
        <div>
          <h2 className="Title">Your Shopping Basket</h2>
          {basket.map((item) => {
            return (
              <BasketProduct
                id={item.id}
                title={item.title}
                price={item.price}
                Img={item.Img}
                rating={item.rating}
              />
            );
          })}
        </div>
      </div>
      <div className="checkoutRightPane">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
