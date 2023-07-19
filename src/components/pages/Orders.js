import React, { useEffect, useState } from "react";
import "../style/Order.css";
import { db } from "../../firebase";
import {
  doc,
  query,
  collection,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import Order from "./order";
import { useStateValue } from "../../ContextProvider/StateProvider";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const userRef = doc(db, "users", user?.uid);
      const ordersRef = collection(userRef, "orders");
      const orderedOrders = query(ordersRef, orderBy('time', 'desc'))
      onSnapshot(orderedOrders, (snapshot) => {
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <div className="Orders">
      <h1>Your Orders</h1>
      <div className="Orderlist">
        {orders?.map((order) => {
          return  <Order order={order} />;
        })}
      </div>
    </div>
  );
}

export default Orders;
