import React from "react";
import LogoTransparent from "../images/logo/LogoTransparent.png";
import {
  FaOpencart,
  TbHeartCheck,
  PiUserDuotone,
  TfiSearch,
} from "./ReactIcons";
import { Link } from "react-router-dom";
import { useAuth } from "./Context/AuthContext.jsx";

// 🔥 Correct AUIND Global Cart Context import
import { useCart } from "../components/Context/CardContext.jsx";

export default function Navbar() {
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

          {/* Search bar */}
          <div className="rounded-full border border-[#00fff5] bg-white flex gap-1 px-2 py-1">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="pl-2 outline-none w-[400px] text-[1.1rem] tracking-tight"
            />
            <button className="mr-1">
              <TfiSearch />
            </button>
          </div>
        </div>

        {/* Nav right */}
        <div className="flex gap-7 w-[10%] px-3 text-white mr-2">
          {/* User Account */}
          <div className="relative group">
            {user ? (
              /* -------- USER LOGGED IN AVATAR -------- */
              <Link
                to="/account"
                className="w-9 h-9 bg-[#00fff5] text-black rounded-full flex items-center justify-center font-bold text-lg shadow-md hover:scale-105 transition"
              >
                {user.name.charAt(0).toUpperCase()}
              </Link>
            ) : (
              /* -------- DEFAULT LOGIN ICON -------- */
              <Link
                to="/login"
                className="text-gray-300 hover:text-[#00fff5] font-semibold text-2xl transition"
              >
                <PiUserDuotone />
              </Link>
            )}

            {/* ---- HOVER TOOLTIP ---- */}
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

          {/* 🔥 CART ICON WITH AUIND BADGE */}
          <div className="relative">
            <Link
              to="/cart"
              className="hover:text-[#00fff5] font-semibold text-2xl"
            >
              <FaOpencart />
            </Link>

            {/* Badge only when cart not empty */}
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
ww