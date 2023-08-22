import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Product(props) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const slug = props.match.params.slug;

    const controller = new AbortController();
    const signal = controller.signal;

    fetch(`https://fakestoreapi.com/products/${slug}`, { signal: signal })
      .then((res) => res.json())
      .then((json) => setProduct(json))
      .catch((error) => {
        if (!signal.aborted) {
          console.error(error);
          setProduct(null);
        }
      });

    return () => controller.abort();
  }, [props.match.params.slug]);

  if (product === null) {
    return (
      <div className="product-page-container">
        <h1 className="title">Product not found</h1>
      </div>
    );
  }

  if (product.id === undefined) {
    return (
      <div className="product-page-container">
        <h1 className="title">Loading Product...</h1>
      </div>
    );
  }

  return (
    <div className="product-page-container">
      <div className="product-img-wrapper">
        <FontAwesomeIcon className="icon" icon={faChevronLeft} />
        <img className="product-img" src={product.image} alt="Product" />
        <FontAwesomeIcon className="icon" icon={faChevronRight} />
      </div>

      <div className="product-info">
        <h1 className="product-title">{product?.title}</h1>
        <p className="product-desc">{product.description}</p>
        <p className="product-price">${product.price}</p>
        <div className="rating-wrapper">
          <div className="star-rating">
            <p>{product.rating?.rate}</p>
            <FontAwesomeIcon className="star-icon" icon={faStar} />
          </div>
          <p>{product.rating?.count} ratings</p>
        </div>
      </div>
    </div>
  );
}
