import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg p-4 transition-all duration-300">
      <img src={product.image} alt={product.name} className="h-40 w-full object-cover rounded" />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-600">${product.price}</p>
      <Link
        to={`/product/${product.id}`}
        className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        View
      </Link>
    </div>
  );
}
