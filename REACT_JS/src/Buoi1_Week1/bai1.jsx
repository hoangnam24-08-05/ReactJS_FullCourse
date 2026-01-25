import React from "react";
// Lưu ý đường dẫn import: đi ra khỏi folder Buoi1_Week1 (..) rồi vào components
import ProductCard from "../Component/Bai_1/ProductCard";

const Bai1 = () => {
  // Dữ liệu giả lập (Mock data)
  const listProduct = [
    {
      id: 1,
      name: "Giày Nike Air Force",
      price: "2.500.000 vnđ",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Giày Adidas Stan Smith",
      price: "1.800.000 vnđ",
      image:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Giày Puma Classic",
      price: "1.500.000 vnđ",
      image:
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
        Bài 1: Product Card Component
      </h2>

      {/* Container chứa các card, dàn hàng ngang bằng Flexbox */}
      <div
        style={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {listProduct.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Bai1;
