import React from "react";
import products from "../services/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
