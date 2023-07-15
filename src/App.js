import "./App.css";
import React from "react";
import Header from "./components/partial/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/" element={[<Header />,<Home />]}></Route>
          <Route path="/checkout" element={[<Header />,<Checkout />]}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
