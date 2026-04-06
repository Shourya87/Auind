import React, { useState } from "react";
import LogoTransparent from "../images/logo/LogoTransparent.png";
import {
  FaOpencart,
  TbHeartCheck,
  PiUserDuotone,
  TfiSearch,
} from "./ReactIcons";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./Context/AuthContext.jsx";

// 🔥 Correct AUIND Global Cart Context import
import { useCart } from "../components/Context/CardContext.jsx";

// 🔥 Import product database (you will create this)

export default function Navbar() {
  // Search states
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // 🔍 submit search
  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search?query=${query}`);
    setQuery("");
  };

  // 🔥 Live cart count from global state
  const { cart } = useCart();

  const { user } = useAuth();

  return (
    <div>
      <div className="h-18 w-screen fixed top-0 z-50 px-4 flex justify-between items-center bg-black">
        {/* Nav left */}
        <div className="w-[6%]">
          <Link to="/">
            <img src={LogoTransparent} alt="Logo" className="w-full" />
          </Link>
        </div>

        {/* Nav center */}
        <div className="flex w-[80%] justify-between items-center">
          {/* menu */}
          <div className="flex gap-6 ml-6 text-white font-semibold text-lg justify-center items-center">
            <Link
              to="/mens"
              className="hover:underline hover:decoration-[#00fff5] underline-offset-5"
            >
              Mens
            </Link>
            <Link
              to="/womens"
              className="hover:underline hover:decoration-[#00fff5] underline-offset-5"
            >
              Womens
            </Link>
            <Link
              to="/kids"
              className="hover:underline hover:decoration-[#00fff5] underline-offset-5"
            >
              Kids
            </Link>
            <Link
              to="/accessories"
              className="hover:underline hover:decoration-[#00fff5] underline-offset-5"
            >
              Accessories
            </Link>
            <Link
              to="/sale"
              className="hover:underline hover:decoration-[#00fff5] underline-offset-5"
            >
              Sale
            </Link>
          </div>

          {/* 🔍 Search Bar */}
          <form
            onSubmit={handleSearch}
            className="flex items-center gap-2 px-4 py-1 rounded-full border border-cyan-400/60
             bg-white backdrop-blur-xl transition-all duration-200
             focus-within:border-cyan-300 hover:border-cyan-300"
          >
            {/* INPUT */}
            <input
              type="text"
              placeholder="Search products, collections..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent text-gray-700 placeholder-gray-400
               px-2 py-1 outline-none text-[1.05rem] tracking-tight
               sm:w-[350px] w-[180px]"
            />

            {/* CLEAR BUTTON */}
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="text-gray-400 hover:text-cyan-300 text-sm px-1"
              >
                ✕
              </button>
            )}

            {/* SEARCH BUTTON */}
            <button
              type="submit"
              className="bg-cyan-400 text-black rounded-full p-1   hover:bg-cyan-300
               active:scale-95 transition shadow-[0_0_10px_rgba(0,255,255,0.4)]"
            >
              <TfiSearch size={17} />
            </button>
          </form>
        </div>

        {/* Nav right */}
        <div className="flex gap-7 w-[10%] px-3 text-white mr-2">
          {/* User Account */}
          <div className="relative group">
            {user ? (
              <Link
                to="/account"
                className="w-9 h-9 bg-[#00fff5] text-black rounded-full flex items-center justify-center font-bold text-lg shadow-md hover:scale-105 transition"
              >
                {user.name.charAt(0).toUpperCase()}
              </Link>
            ) : (
              <Link
                to="/login"
                className="text-gray-300 hover:text-[#00fff5] font-semibold text-2xl transition"
              >
                <PiUserDuotone />
              </Link>
            )}

            <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs bg-black/80 text-white rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
              {user ? `Hi, ${user.name}` : "Login / Signup"}
            </span>
          </div>

          <Link
            to="/wishlist"
            className="hover:text-[#00fff5] font-semibold text-2xl"
          >
            <TbHeartCheck />
          </Link>

          {/* CART ICON */}
          <div className="relative">
            <Link
              to="/cart"
              className="hover:text-[#00fff5] font-semibold text-2xl"
            >
              <FaOpencart />
            </Link>

            {cart.length > 0 && (
              <span
                className="
                absolute -top-2 -right-3 
                bg-[#00fff5] text-black 
                w-5 h-5 rounded-full 
                flex items-center justify-center 
                text-xs font-bold 
                shadow-lg
              "
              >
                {cart.length}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
