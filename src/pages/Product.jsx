import React from "react";
import { useParams } from "react-router-dom";
import products from "../services/products";

export default function Product() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="text-center">
      <img src={product.image} alt={product.name} className="mx-auto h-60 rounded" />
      <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
      <p className="text-xl text-gray-700">${product.price}</p>
      <p className="mt-4">{product.description}</p>
    </div>
  );
}
