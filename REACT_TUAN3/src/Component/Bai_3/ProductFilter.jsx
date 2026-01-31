import React from "react";
import { useState } from "react";
import { useMemo } from "react";
import "./ProductFilter.css";

const createMockdata = () => {
  const products = [];
  for (let i = 1; i <= 3000; i++) {
    products.push({
      id: i,
      name: "Sản phẩm " + i,
      price: Math.floor(Math.random() * 1000) + 1,
    });
  }
  return products;
};

const ProductFilter = () => {
  const [products] = useState(() => createMockdata());

  const [searchText, setSearchText] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const filteredProducts = useMemo(() => {
    console.time("Thời gian lọc sản phẩm");
    const result = products.filter((p) => {
      const matchName = p.name.toLowerCase().includes(searchText.toLowerCase());
      const matchPrice =
        p.price >= Number(minPrice) && p.price <= Number(maxPrice);
      return matchName && matchPrice;
    });
    console.timeEnd("Thời gian lọc sản phẩm");
    return result;
  }, [products, searchText, minPrice, maxPrice]);
  const totalPrice = useMemo(() => {
    return filteredProducts.reduce((total, item) => total + item.price, 0);
  }, [filteredProducts]);
  return (
    <div className="filter-container">
      <div className="controls">
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <input
          type="number"
          placeholder="Giá tối thiểu"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Giá tối đa"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
      <div className="summary-box">
        <p>Tổng Giá sản phẩm: {totalPrice.toLocaleString()}</p>
      </div>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-item">
            <strong>{product.name}</strong>
            <span className="product-list">{product.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;
