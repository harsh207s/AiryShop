import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-2xl font-bold">AiryShop</Link>
        <div className="space-x-6">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </div>
    </nav>
  );
}
