import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import ProductCard from "../ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [direction, setDirection] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://fakestoreapi.com/products", { signal: signal })
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      })
      .catch((error) => {
        if (!signal.aborted) {
          console.error(error);
        }
      });

    return () => controller.abort();
  }, []);

  function renderProducts() {
    let renderedProducts = products
      .filter(
        (product) =>
          !search || product.title.toLowerCase().includes(search.toLowerCase())
      )
      .filter((product) => !category || product.category === category)
      .sort((p1, p2) => {
        if (p1[sort] > p2[sort]) return 1;
        else if (p1[sort] < p2[sort]) return -1;
        else return 0;
      });

    if (direction === "desc") {
      renderedProducts.reverse();
    }

    return renderedProducts.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));
  }

  if (!products.length) {
    return (
      <div className="products-container">
        <h1 className="title">Loading Products...</h1>
      </div>
    );
  }

  return (
    <div className="products-container">
      <h1 className="title">Products</h1>
      <div className="filters-container">
        <div className="search-wrapper">
          <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />

          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="filters-wrapper">
          <label htmlFor="filter-category">Filter Category</label>

          <select
            name="filter-category"
            id="filter-category"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="jewelery">Jewelry</option>
            <option value="electronics">Electronics</option>
            <option value="women's clothing">Women's clothing</option>
          </select>
        </div>

        <div className="sort-wrapper">
          <label htmlFor="sort">Sort</label>

          <select
            name="sort"
            id="sort"
            onChange={(e) => {
              const [sort, direction] = e.target.value.split("-");
              setSort(sort);
              setDirection(direction);
            }}
          >
            <option value="id-asc">None</option>
            <option value="title-asc">Alphabetical A-Z</option>
            <option value="title-desc">Alphabetical Z-A</option>
            <option value="price-asc">Price low to high</option>
            <option value="price-desc">Price high to low</option>
          </select>
        </div>
      </div>

      <div className="product-list-wrapper">{renderProducts()}</div>
    </div>
  );
}
