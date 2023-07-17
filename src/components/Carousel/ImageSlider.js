import React from "react";
import "../style/Home.css";
import banner from "../../images/amazon_banner.jpg";
import Carousel1 from "../../images/carousel1.jpg";
import Carousel2 from "../../images/carousel2.jpg";
import Carousel3 from "../../images/carousel3.jpg";
import Carousel4 from "../../images/carousel4.jpg";
import Carousel5 from "../../images/carousel5.jpg";
import Carousel6 from "../../images/carousel6.jpg";
import Carousel7 from "../../images/carousel7.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

function ImageSlider() {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img className="homeImage" src={banner} alt="#" />
          </div>
          <div>
            <img className="homeImage" src={Carousel1} alt="#" />
          </div>
          <div>
            <img className="homeImage" src={Carousel2} alt="#" />
          </div>{" "}
          <div>
            <img className="homeImage" src={Carousel3} alt="#" />
          </div>{" "}
          <div>
            <img className="homeImage" src={Carousel4} alt="#" />
          </div>{" "}
          <div>
            <img className="homeImage" src={Carousel5} alt="#" />
          </div>{" "}
          <div>
            <img className="homeImage" src={Carousel6} alt="#" />
          </div>{" "}
          <div>
            <img className="homeImage" src={Carousel7} alt="#" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default ImageSlider;
