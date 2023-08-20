import { NavLink } from "react-router-dom";
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
        <NavLink exact to="/">
          <FontAwesomeIcon className="icon" icon={faHouse} />
        </NavLink>

        <NavLink to="/about">
          <FontAwesomeIcon className="icon" icon={faUser} />
        </NavLink>

        <NavLink to="/contact">
          <FontAwesomeIcon className="icon" icon={faEnvelope} />
        </NavLink>
      </div>

      <div className="right-icons">
        <NavLink to="/products">
          <FontAwesomeIcon className="icon" icon={faGift} />
        </NavLink>

        <NavLink to="/cart">
          <FontAwesomeIcon className="icon" icon={faCartShopping} />
        </NavLink>
      </div>
    </div>
  );
}
