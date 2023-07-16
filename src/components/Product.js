import React from "react";
import "./style/product.css";
import { useStateValue } from "../ContextProvider/StateProvider";
import CurrencyFormat from "react-currency-format";
function Product(props) {
  const [{ basket }, dispatch] = useStateValue();
  // console.log(basket);
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        title: props.title,
        Img: props.Img,
        price: props.price,
        rating: props.rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="productInfo">
        <p>{props.title}</p>
        <p className="productPrice">
          <CurrencyFormat
            renderText={(value) => <strong>{value}</strong>}
            decimalScale={2}
            value={props.price}
            displayType={"text"}
            thousandSeparator={true}
            prefix="₹"
          />
        </p>
        <div className="productRating">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img className="productImg" src={props.Img} alt="#" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
