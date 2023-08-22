import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [direction, setDirection] = useState("");

  const categories = getCategories();

  function getCategories() {
    const categories = [];
    products.forEach((product) => {
      if (categories.includes(product.category)) return;
      categories.push(product.category);
    });
    return categories;
  }

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
  }, [products.length]);

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
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="filters-wrapper">
          <select
            name="filter-category"
            id="filter-category"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Filter By</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <select
            name="sort"
            id="sort"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="id">Sort By</option>
            <option value="title">Title</option>
            <option value="description">Description</option>
            <option value="category">Category</option>
            <option value="price">Price</option>
          </select>

          <select
            name="direction"
            id="direction"
            onChange={(e) => setDirection(e.target.value)}
          >
            <option value="asc">Order By</option>
            <option value="asc">Ascending</option>
            <option value="desc">Decending</option>
          </select>
        </div>
      </div>

      <div className="product-list-wrapper">{renderProducts()}</div>
    </div>
  );
}
