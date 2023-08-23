import { displayPrice } from "./util/shoppingCart";

export default function CartCard(props) {
  const { product, addAmount, removeAmount, removeFromCart } = props;

  function truncate(str, max_length) {
    const dots = str.length > max_length ? "..." : "";

    return str.slice(0, Math.min(str.length, max_length)) + dots;
  }

  return (
    <span className="cart-card-container">
      <div className="card-left">
        <img className="product-img" src={product.image} alt={product.title} />
      </div>
      <div className="card-right">
        <p className="title">{truncate(product.title, 40)}</p>
        <p className="description">{truncate(product.description, 80)}</p>
        <p>{displayPrice(product.price)}</p>
        <p>Amount: {product.amount}</p>
        <div className="cart-btns">
          <button onClick={addAmount}>+</button>
          <button onClick={removeAmount}>-</button>
          <button onClick={removeFromCart}>Remove From Cart</button>
        </div>
      </div>
    </span>
  );
}
