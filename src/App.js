import "./App.css";
import React, { useEffect } from "react";
import Header from "./components/partial/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/pages/Login";
import Footer from "./components/partial/Footer";
import Orders from "./components/pages/Orders";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useStateValue } from "./ContextProvider/StateProvider";
import Payment from "./components/pages/Payment";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51NVHxpSI3lW5BlS0fUDiXGLFfMwCWvosY89t32EIfxOdnHJ7abEoanDKAGfvQXtI1pKbZOOHjKFci009zqKFn21I00pQbTAmxP"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("User is", user);
      if (user) {
        // const uid = user.uid;
        dispatch({
          type: "SET_USER",
          user: user,
        });
      } else {
        // user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={[<Header />, <Home />, <Footer />]}></Route>
          <Route
            path="/checkout"
            element={[<Header />, <Checkout />, <Footer />]}
          ></Route>
          <Route
            path="/payment"
            element={[
              <Header />,
              <Elements stripe={promise}>
                <Payment />
              </Elements>,
              <Footer />,
            ]}
          ></Route>
          <Route path="/orders" element={[<Header />, <Orders />]}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
