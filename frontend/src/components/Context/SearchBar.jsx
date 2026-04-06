import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AllProducts } from "../../components/Context/AllProducts";

export default function SearchBar() {

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }

    const filtered = AllProducts
      .filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )
      .slice(0, 6);

    setSuggestions(filtered);

  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) return;
    navigate(`/search?query=${query}`);
    setSuggestions([]);
  };

  return (
    <div className="relative w-[420px]">
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-white rounded-full px-4 py-1.5"
      >
        <input
          type="text"
          placeholder="What are you looking for?"
          className="flex-1 text-black outline-none"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button type="submit">
          <FaSearch className="text-gray-600" />
        </button>
      </form>

      {suggestions.length > 0 && (
        <div className="absolute top-full left-0 w-full bg-white rounded-lg mt-2 shadow-2xl z-50 text-black">
          {suggestions.map(item => (
            <div
              key={item.id}
              onClick={() => navigate(`/product/${item.id}`)}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer flex justify-between"
            >
              <p>{item.name}</p>
              <p className="text-sm text-gray-500">{item.brand}</p>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
