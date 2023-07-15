import "./App.css";
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
