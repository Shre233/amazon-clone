import React from "react";
import "../../style/Footer.css";
function BackToTop() {
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div>
      <button onClick={goToBtn} className="topButton">
        Back to top
      </button>
    </div>
  );
}

export default BackToTop;
