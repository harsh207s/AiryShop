import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white text-center py-3 mt-auto">
      <p>© {new Date().getFullYear()} AiryShop. All Rights Reserved.</p>
    </footer>
  );
}
