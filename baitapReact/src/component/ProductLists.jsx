import React from "react";
import { Link, Outlet } from "react-router-dom";

const ProductLists = () => {
  return (
    <div>
      <h2>Danh Sách Sản Phẩm (Product Lists)</h2>

      <ul>
        {}
        <li>
          <Link to="/products/1">Sản phẩm 1</Link>
        </li>
        <li>
          <Link to="/products/2">Sản phẩm 2</Link>
        </li>
        <li>
          <Link to="/products/3">Sản phẩm 3</Link>
        </li>
      </ul>

      {}
      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          border: "1px dashed #ccc",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default ProductLists;
