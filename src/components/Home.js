import React from "react";
import "./style/Home.css";
import Product from "./Product";
import Product1 from "../images/Product1.jpg";
import Product2 from "../images/Product2.jpg";
import Product3 from "../images/Product3.jpg";
import Product4 from "../images/Product4.jpg";
import Product5 from "../images/Product5.jpg";
import Product6 from "../images/Product6.jpg";
import ImageSlider from "./Carousel/ImageSlider";
function Home() {
  return (
    <div>
      <ImageSlider/>
      <div className="home">
        <div className="homeContainer">
          <div className="homeRow">
            <Product
              id="1"
              title="pTron Newly Launched Zenbuds Evo X1 In-Ear TWS Earbuds, Quad Mic TruTalk ENC Calls, 60Hrs Playtime, Movie/Music Modes, 13mm Drivers, BT5.3 Headphone, Fast TypeC Charging & IPX5 Water-Resistant (Black)"
              price={1099}
              rating={4}
              Img={Product1}
            />
            <Product
              id="2"
              title="Oppo A78 5G (Glowing Black, 8GB RAM, 128 Storage) | 5000 mAh Battery with 33W SUPERVOOC Charger| 50MP AI Camera | 90Hz Refresh Rate | with No Cost EMI/Additional Exchange Offers"
              price={18999}
              rating={4}
              Img={Product2}
            />
          </div>
          <div className="homeRow">
            <Product
              id="3"
              title="MSI GF63 Thin, Intel Core i7-11800H, 40CM FHD 144Hz Gaming Laptop (16GB/512GB NVMe SSD/Windows 11 Home/Nvidia GeForce RTX 3050, GDDR6 4GB/Black/1.8Kg), 11UC-1293IN"
              price={67990}
              rating={3}
              Img={Product3}
            />
            <Product
              id="4"
              title="Sony Bravia 139 cm (55 inches) 4K Ultra HD Smart LED Google TV KD-55X82L (Black)"
              price={85490}
              rating={5}
              Img={Product4}
            />
            <Product
              id="5"
              title="JBL Flip 5 Wireless Portable Bluetooth Speaker, Signature Sound with Powerful Bass Radiator, Vibrant Colors with Rugged Design, PartyBoost, IPX7 Waterproof & Type C (Without Mic, Black)"
              price={5998}
              rating={4}
              Img={Product5}
            />
          </div>
          <div className="homeRow">
            <Product
              id="6"
              title="MSI Optix MAG274QRF 27Inch Full HD Computer Monitor - Professional LED Monitor with 165Hz Refresh Rate, WQHD Resolution, Gaming OSD & Anti-Flicker Technology PC Monitor for Desktop, VESA Mount(Black)"
              price={35999}
              rating={5}
              Img={Product6}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
