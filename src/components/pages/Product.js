import { useEffect, useState } from "react";

export default function Product(props) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const slug = props.match.params.slug;
    fetch(`https://fakestoreapi.com/products/${slug}`)
      .then((res) => res.json())
      .then((json) => setProduct(json))
      .catch((error) => console.error(error));
  }, [props.match.params.slug]);

  if (product.id === undefined) {
    return (
      <div className="product-page-container">
        <h1 className="title">Loading Product...</h1>;
      </div>
    );
  }

  return (
    <div className="product-page-container">
      <img className="product-img" src={product.image} alt="Product" />
      <div className="product-info">
        <h1>{product?.title}</h1>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <p>Rating {product.rating?.rate}</p>
        <p>Rating count {product.rating?.count}</p>
      </div>
    </div>
  );
}
