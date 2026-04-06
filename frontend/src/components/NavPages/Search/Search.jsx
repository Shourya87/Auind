import React from "react";
import { useLocation } from "react-router-dom";
import { AllProducts } from "/Users/shour/VS code/Daily-Codes/AUIND/frontend/src/components/Context/AllProducts"

export default function Search() {

  const { search } = useLocation();
  const query = new URLSearchParams(search).get("query") || "";

  const results = AllProducts.filter(
    item => item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="px-6 py-4 bg-black min-h-screen text-white">

      <h1 className="text-3xl font-semibold mb-4">
        Search results for "{query}"
      </h1>

      {results.length === 0 && (
        <p>No products found. Try another keyword.</p>
      )}

      <div className="grid grid-cols-4 gap-6">
        {results.map(item => (
          <ProductCart key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
