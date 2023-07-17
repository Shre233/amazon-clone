import React from "react";
import "../style/Home.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        height: "20vh",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "2",
        margin: "30px",
      }}
      onClick={onClick}
    ></div>
  );
}

export default SampleNextArrow;
