import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faHouse,
  faUser,
  faEnvelope,
  faGift,
  faShoppingCart,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const solidIcons = () => {
  return library.add(
    faHouse,
    faUser,
    faEnvelope,
    faGift,
    faShoppingCart,
    faHeart
  );
};

export default solidIcons;
