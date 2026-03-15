import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h3 style={{ color: "red" }}>Chi tiết sản phẩm số: {id}</h3>
    </div>
  );
};

export default ProductDetail;
