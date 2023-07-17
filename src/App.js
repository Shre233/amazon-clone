import "./App.css";
import React, { useEffect } from "react";
import Header from "./components/partial/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/pages/Login";
import Footer from "./components/partial/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useStateValue } from "./ContextProvider/StateProvider";
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("User is", user);
      if (user) {
        // const uid = user.uid;
        dispatch({
          type:"SET_USER",
          user:user
        })
      } else {
        // user is logged out
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={[<Header />, <Home />,<Footer/>]}></Route>
          <Route path="/checkout" element={[<Header />, <Checkout />,<Footer/>]}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
