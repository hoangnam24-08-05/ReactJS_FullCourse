import React from "react";
import ProductList from "../Component/Bai_5/ProductList";

const Bai5 = () => {
  const productData = [
    {
      id: 1,
      name: "Laptop Gaming Asus",
      price: "25.000.000đ",
      image:
        "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500",
    },
    {
      id: 2,
      name: "Macbook Pro M2",
      price: "32.000.000đ",
      image:
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500",
    },
    {
      id: 3,
      name: "Bàn phím Keychron",
      price: "2.500.000đ",
      image:
        "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500",
    },
    {
      id: 4,
      name: "Chuột Logitech MX",
      price: "1.800.000đ",
      image:
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
    },
    {
      id: 5,
      name: "Tai nghe Sony WH",
      price: "6.500.000đ",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    },
    {
      id: 6,
      name: "Màn hình Dell Ultra",
      price: "9.000.000đ",
      image:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
    },
  ];

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px", color: "#333" }}>
        Bài 5: Responsive Product List
      </h2>

      {/* Gọi Component và truyền dữ liệu vào */}
      <ProductList products={productData} />
    </div>
  );
};

export default Bai5;
