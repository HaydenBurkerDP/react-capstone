import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  addAmountInCart,
  calculatePrice,
  displayPrice,
  loadShoppingCart,
  removeFromCart,
  saveShoppingCart,
} from "../util/shoppingCart";
import CartCard from "../CartCard";
import { successfulToast } from "../util/toastNotifications";

export default function Cart() {
  const [shoppingCart, setShoppingCart] = useState([]);
  const totalCost = calculatePrice(shoppingCart);

  useEffect(() => {
    setShoppingCart(loadShoppingCart());
  }, []);

  function handleChangeAmount(product, amount) {
    setShoppingCart((cart) => {
      cart = addAmountInCart(cart, product, amount);
      saveShoppingCart(cart);
      return cart;
    });
  }

  function handleRemoveFromCart(product) {
    setShoppingCart((cart) => {
      cart = removeFromCart(cart, product);
      saveShoppingCart(cart);
      return cart;
    });
    successfulToast("Item removed from cart");
  }

  if (shoppingCart.length === 0) {
    return (
      <div className="cart-container">
        <h1 className="title">Shopping Cart</h1>
        <div className="empty-cart-message">
          <h1>Your cart is empty!</h1>

          <Link to="/products">
            <button className="shop-now-btn">Shop Now</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1 className="title">Shopping Cart</h1>

      <div className="cart-list-wrapper">
        {shoppingCart.map((product) => (
          <CartCard
            key={product.id}
            product={product}
            addAmount={() => handleChangeAmount(product, 1)}
            removeAmount={() => handleChangeAmount(product, -1)}
            removeFromCart={() => handleRemoveFromCart(product)}
          />
        ))}
      </div>

      <div className="checkout-wrapper">
        <h2>Total Cost: {displayPrice(totalCost)}</h2>

        <button className="checkout-btn">Proceed to checkout</button>
      </div>
    </div>
  );
}
