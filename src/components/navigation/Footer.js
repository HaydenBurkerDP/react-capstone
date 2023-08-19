import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <p>Call +01 888 999 88</p>
      </div>

      <div className="footer-center">
        <p>Free shipping on all orders over $85</p>
      </div>

      <div className="footer-right">
        <a href="https://www.facebook.com">
          <FontAwesomeIcon className="icon" icon={faFacebookF} />
        </a>

        <a href="https://www.google.com">
          <FontAwesomeIcon className="icon" icon={faGoogle} />
        </a>

        <a href="https://www.twitter.com">
          <FontAwesomeIcon className="icon" icon={faTwitter} />
        </a>
      </div>
    </div>
  );
}
