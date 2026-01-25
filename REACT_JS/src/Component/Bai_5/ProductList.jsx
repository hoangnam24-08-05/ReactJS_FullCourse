import React from "react";
import "./ProductList.css";
import ProductCard from "../Bai_1/ProductCard";

const ProductList = ({ products }) => {
  if (!products || products.length === 0) {
    return <p>Không có sản phẩm để hiển thị.</p>;
  }
  return (
    <div className="product-list-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductList;
