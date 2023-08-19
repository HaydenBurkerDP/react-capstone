import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faEnvelope,
  faGift,
  faHouse,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (
    <div className="nav-bar-container">
      <div className="left-icons">
        <Link to="/">
          <FontAwesomeIcon className="icon" icon={faHouse} />
        </Link>

        <Link to="/about">
          <FontAwesomeIcon className="icon" icon={faUser} />
        </Link>

        <Link to="/contact">
          <FontAwesomeIcon className="icon" icon={faEnvelope} />
        </Link>
      </div>

      <div className="right-icons">
        <Link to="/products">
          <FontAwesomeIcon className="icon" icon={faGift} />
        </Link>

        <Link to="/cart">
          <FontAwesomeIcon className="icon" icon={faCartShopping} />
        </Link>
      </div>
    </div>
  );
}
