import React from "react";
import "./ProductCard.css"; // Import CSS đã tạo ở trên

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="card-img-top" />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-price">{price}</p>
        <button className="btn-add">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
