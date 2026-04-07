import React, { useState, useEffect, useRef } from "react";
import LogoTransparent from "../images/logo/LogoTransparent.png";
import {
  FaOpencart,
  TbHeartCheck,
  PiUserDuotone,
  TfiSearch,
} from "./ReactIcons";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./Context/AuthContext.jsx";
import { useCart } from "../components/Context/CardContext.jsx";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();
  const { cart } = useCart();
  const { user } = useAuth();
  const menuRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search?query=${query}`);
    setQuery("");
    setSearchOpen(false);
    setMenuOpen(false);
  };

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = [
    { to: "/mens", label: "Mens" },
    { to: "/womens", label: "Womens" },
    { to: "/kids", label: "Kids" },
    { to: "/accessories", label: "Accessories" },
    { to: "/sale", label: "Sale" },
  ];

  return (
    <div ref={menuRef}>
      {/* ── Main Navbar Bar ── */}
      <div className="h-16 w-screen fixed top-0 z-50 px-4 flex justify-between items-center bg-black">

        {/* Logo */}
        <div className="w-12 sm:w-14 flex-shrink-0">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img src={LogoTransparent} alt="Logo" className="w-full" />
          </Link>
        </div>

        {/* Desktop Nav Links — hidden on mobile */}
        <nav className="hidden md:flex gap-5 lg:gap-6 text-white font-semibold text-base lg:text-lg">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="hover:underline hover:decoration-[#00fff5] underline-offset-4 whitespace-nowrap transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop Search Bar — hidden on mobile */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex items-center gap-2 px-4 py-1 rounded-full border border-cyan-400/60
            bg-white backdrop-blur-xl transition-all duration-200
            focus-within:border-cyan-300 hover:border-cyan-300"
        >
          <input
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-transparent text-gray-700 placeholder-gray-400
              px-2 py-1 outline-none text-[0.95rem] tracking-tight w-[180px] lg:w-[260px]"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="text-gray-400 hover:text-cyan-300 text-sm px-1"
            >
              ✕
            </button>
          )}
          <button
            type="submit"
            className="bg-cyan-400 text-black rounded-full p-1 hover:bg-cyan-300
              active:scale-95 transition shadow-[0_0_10px_rgba(0,255,255,0.4)]"
          >
            <TfiSearch size={17} />
          </button>
        </form>

        {/* Right Icons */}
        <div className="flex items-center gap-4 sm:gap-5 text-white">

          {/* Mobile Search Toggle */}
          <button
            className="md:hidden text-gray-300 hover:text-[#00fff5] text-2xl transition"
            onClick={() => setSearchOpen((v) => !v)}
            aria-label="Toggle search"
          >
            <TfiSearch size={20} />
          </button>

          {/* User Icon */}
          <div className="relative group hidden sm:block">
            {user ? (
              <Link
                to="/account"
                className="w-8 h-8 bg-[#00fff5] text-black rounded-full flex items-center justify-center font-bold text-base shadow-md hover:scale-105 transition"
              >
                {user.name.charAt(0).toUpperCase()}
              </Link>
            ) : (
              <Link
                to="/login"
                className="text-gray-300 hover:text-[#00fff5] text-2xl transition"
              >
                <PiUserDuotone />
              </Link>
            )}
            <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs bg-black/80 text-white rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">
              {user ? `Hi, ${user.name}` : "Login / Signup"}
            </span>
          </div>

          {/* Wishlist */}
          <Link
            to="/wishlist"
            className="hover:text-[#00fff5] text-2xl transition hidden sm:block"
            aria-label="Wishlist"
          >
            <TbHeartCheck />
          </Link>

          {/* Cart */}
          <div className="relative">
            <Link
              to="/cart"
              className="hover:text-[#00fff5] text-2xl transition"
              aria-label="Cart"
            >
              <FaOpencart />
            </Link>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#00fff5] text-black w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold shadow-lg">
                {cart.length}
              </span>
            )}
          </div>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[2px] w-6 bg-white rounded transition-all duration-300 origin-center
                ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
            />
            <span
              className={`block h-[2px] w-6 bg-white rounded transition-all duration-300
                ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
            />
            <span
              className={`block h-[2px] w-6 bg-white rounded transition-all duration-300 origin-center
                ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* ── Mobile Search Bar (slides down) ── */}
      <div
        className={`md:hidden fixed top-16 left-0 right-0 z-40 bg-black px-4 transition-all duration-300 overflow-hidden
          ${searchOpen ? "py-3 border-b border-cyan-400/20" : "max-h-0 py-0"}`}
      >
        <form
          onSubmit={handleSearch}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/60 bg-white"
        >
          <input
            type="text"
            placeholder="Search products, collections..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-gray-700 placeholder-gray-400 px-2 outline-none text-sm"
            autoFocus={searchOpen}
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="text-gray-400 hover:text-cyan-300 text-sm"
            >
              ✕
            </button>
          )}
          <button
            type="submit"
            className="bg-cyan-400 text-black rounded-full p-1 hover:bg-cyan-300 active:scale-95 transition"
          >
            <TfiSearch size={16} />
          </button>
        </form>
      </div>

      {/* ── Mobile Slide-in Menu ── */}
      <>
        {/* Backdrop */}
        <div
          className={`md:hidden fixed inset-0 z-30 bg-black/60 backdrop-blur-sm transition-opacity duration-300
            ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`md:hidden fixed top-0 left-0 h-full w-72 z-40 bg-[#0a0a0a] border-r border-white/10
            transform transition-transform duration-300 ease-in-out
            ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-5 h-16 border-b border-white/10">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <img src={LogoTransparent} alt="Logo" className="w-10" />
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>
          </div>

          {/* User greeting (mobile) */}
          {user && (
            <div className="px-5 py-4 border-b border-white/10 flex items-center gap-3">
              <div className="w-9 h-9 bg-[#00fff5] text-black rounded-full flex items-center justify-center font-bold text-lg">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <span className="text-white font-semibold">Hi, {user.name}</span>
            </div>
          )}

          {/* Nav Links */}
          <nav className="flex flex-col px-5 pt-5 gap-1">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className="text-gray-200 hover:text-[#00fff5] font-semibold text-lg py-3 border-b border-white/5 
                  hover:pl-2 transition-all duration-200"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile-only links */}
          <div className="flex flex-col px-5 pt-6 gap-4">
            <Link
              to="/wishlist"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 text-gray-300 hover:text-[#00fff5] font-semibold text-base transition"
            >
              <TbHeartCheck size={20} />
              Wishlist
            </Link>
            <Link
              to={user ? "/account" : "/login"}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 text-gray-300 hover:text-[#00fff5] font-semibold text-base transition"
            >
              <PiUserDuotone size={20} />
              {user ? "My Account" : "Login / Signup"}
            </Link>
          </div>
        </div>
      </>
    </div>
  );
}