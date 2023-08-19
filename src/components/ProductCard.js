import { Link } from "react-router-dom";

import { addToCart } from "./util/shoppingCart";

export default function ProductCard(props) {
  const { product } = props;

  function truncate(str, max_length) {
    const dots = str.length > max_length ? "..." : "";

    return str.slice(0, Math.min(str.length, max_length)) + dots;
  }

  return (
    <div className="product-card-container">
      <p className="title">{truncate(product.title, 24)}</p>
      <img className="product-img" src={product.image} alt={product.title} />
      <p className="description">{truncate(product.description, 60)}</p>
      <p>${product.price}</p>
      <div>
        <Link to={`/product/${product.id}`}>
          <button>See all details</button>
        </Link>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}
