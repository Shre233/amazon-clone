import React from "react";
import "./style/Checkout.css";
import Subtotal from "./Subtotal";
import Banner from "../images/CheckoutBanner.jpg";
import BasketProduct from "./BasketProduct";
import { useStateValue } from "../ContextProvider/StateProvider";
function Checkout() {
  const [{ basket,user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkoutLeftPane">
        <img className="checkoutBanner" src={Banner} alt="" />
        <div>
          <h3>Hello, {user?.email}</h3>
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
