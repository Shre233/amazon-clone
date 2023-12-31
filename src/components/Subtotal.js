import React from "react";
import "./style/Checkout.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../ContextProvider/StateProvider";
import { getBasketTotal } from "../ContextProvider/reducer";
import { useNavigate } from "react-router-dom";
function Subtotal() {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();
  // let sum=0;
  // basket.map((item)=>{
  //   sum+=item.price;
  // })
  // console.log(sum);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className="subtotalInfo">
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotalGift">
              <input type="checkbox" />
              This order contains gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button onClick={(e) => navigate("/payment")} className="subtotalButton">
        Proceed to checkout
      </button>
    </div>
  );
}

export default Subtotal;
