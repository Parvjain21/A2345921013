import { useState, useEffect } from "react";
import { fetchProducts } from "../api";
import ProductCard from "../Components/ProductCard";
import FilterSortComponent from "../Components/FilterSortComponent";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [category] = useState("laptop");

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetchProducts(category, filters);
      setProducts(response.data);
    };
    getProducts();
  }, [category, filters]);

  return (
    <div>
      hi
      <FilterSortComponent setFilters={setFilters} />
      {products.map((product) => (
        <ProductCard key={product.productID} product={product} />
      ))}
    </div>
  );
};

export default ProductsPage;
