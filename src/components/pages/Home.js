import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import handoBlack from "../../images/hando-black.png";
import tvScreen from "../../images/tv-screen.png";

export default function Home() {
  return (
    <div className="home-container">
      <div className="upper-content-wrapper">
        <div className="logo">
          <img src={handoBlack} alt="logo" />

          <div className="title">HANDO</div>
        </div>

        <div className="icons">
          <div className="icon-wrapper">
            <Link to="/cart">
              <FontAwesomeIcon className="icon" icon={faHeart} />
            </Link>
          </div>

          <p>My Saved Products</p>
        </div>
      </div>

      <div className="mid-content-wrapper">
        <img className="product-image" src={tvScreen} alt="Product" />

        <div className="context-wrapper">
          <div className="upper-text-container">
            <p>Entertainment Shopping</p>
          </div>

          <div className="mid-text-container">
            <p>Best Entertainment Gear and Accessories in 2023</p>
          </div>

          <div className="lower-text-container">
            <p>View Return Policy for More Information</p>
          </div>

          <Link to="/products">
            <button className="shop-now-btn">Shop Now</button>
          </Link>
        </div>
      </div>

      <div className="lower-content-wrapper">
        <div className="product-content-wrapper">
          <div className="inner-product-content-wrapper">
            <img
              src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
              alt="Product"
            />
          </div>

          <div className="inner-product-content-wrapper">
            <p>Jewelry</p>
          </div>
        </div>

        <div className="product-content-wrapper">
          <div className="inner-product-content-wrapper">
            <img
              src="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
              alt="Product"
            />
          </div>

          <div className="inner-product-content-wrapper">
            <p>Electronics</p>
          </div>
        </div>

        <div className="product-content-wrapper">
          <div className="inner-product-content-wrapper">
            <img
              src="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
              alt="Product"
            />
          </div>

          <div className="inner-product-content-wrapper">
            <p>Women's Fashion</p>
          </div>
        </div>

        <div className="product-content-wrapper">
          <div className="inner-product-content-wrapper">
            <img
              src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
              alt="Product"
            />
          </div>

          <div className="inner-product-content-wrapper">
            <p>Men's Fashion</p>
          </div>
        </div>
      </div>
    </div>
  );
}
