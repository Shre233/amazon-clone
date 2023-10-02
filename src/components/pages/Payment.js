import React, { useEffect } from "react";
import { useStateValue } from "../../ContextProvider/StateProvider";
import "../style/Payment.css";
import BasketProduct from "../BasketProduct";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../ContextProvider/reducer";
import axios from "../../axios";
import { db } from "../../firebase";
import { doc, setDoc, collection } from "firebase/firestore";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      // console("respone",response);
      setSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  console.log("Secret: ", clientSecret);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(async ({ paymentIntent }) => {
        //paymentIntent = payment confirmation
        //db firebase operation to persist order
        console.log("basket is", basket);
        const userRef = doc(db, "users", user?.uid);
        const ordersRef = collection(userRef, "orders");
        const orderDoc = doc(ordersRef, paymentIntent.id);
        await setDoc(orderDoc, {
          basket: Array.from(basket),
          amount: paymentIntent.amount,
          time: paymentIntent.created,
        });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        navigate("/orders", { replace: true });
      });
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="Payment">
      <div className="PaymentContainer">
        <h1>
          Checkout
          <Link style={{ textDecoration: "none" }} to="/checkout">
            ({basket?.length} items)
          </Link>
        </h1>
        <div className="PaymentSection">
          <div className="PaymentTitle">
            <h3>Delivery Address</h3>
          </div>
          <div className="PaymentAddress">
            <p>{user?.displayName}</p>
            <p>{user?.email}</p>
            <p>123 Dilshad Garden</p>
            <p>Delhi, India</p>
          </div>
        </div>
        <div className="PaymentSection">
          <div className="PaymentTitle">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="PaymentItems">
            {basket.map((item) => {
              return (
                <BasketProduct
                  id={item.id}
                  Img={item.Img}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        </div>
        <div className="PaymentSection">
          <div className="PaymentTitle">
            <h3>Payment Method</h3>
          </div>
          <div className="PaymentDetails">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="PaymentPriceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : <p>Buy Now</p>}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
