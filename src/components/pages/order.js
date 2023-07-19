import React from "react";
import "../style/Order.css";
import moment from "moment";
import BasketProduct from "../BasketProduct";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
  console.log(order);
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.time).format("MMMM Do YYYY, h:mm:ss a")}</p>
      <p className="orderId">
        <small> <strong>Order Id: </strong> {order.id}</small>
      </p>
      {order.data.basket?.map((item) => {
        return (
          <BasketProduct
            id={item.id}
            title={item.title}
            price={item.price}
            Img={item.Img}
            rating={item.rating}
            hideButton
          />
        );
      })}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <h3 className="OrderTotal"> Order Total: {value}</h3>
          </>
        )}
        decimalScale={2}
        value={order.data.amount/100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
    </div>
  );
}

export default Order;
