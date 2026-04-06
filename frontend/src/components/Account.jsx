import React, { useState } from "react";
import {
  FiHome,
  FiShoppingBag,
  FiUsers,
  FiBox,
  FiLogOut,
  FiSearch,
  FiMenu,
  FiBell,
} from "react-icons/fi";

import { useAuth } from "./Context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Account() {
  const [active, setActive] = useState("overview");
  const [sideOpen, setSideOpen] = useState(false);

  const { logout } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    { id: "overview", title: "Dashboard", icon: <FiHome /> },
    { id: "orders", title: "Orders", icon: <FiShoppingBag /> },
    { id: "users", title: "Users", icon: <FiUsers /> },
    { id: "products", title: "Products", icon: <FiBox /> },
  ];

  // LOGOUT FUNCTION WITH TOAST + REDIRECT  
  const handleLogout = () => {
    logout();

    toast.success("Logged out successfully!", {
      position: "top-right",
      duration: 1600,
      style: {
        background: "#0b1014",
        color: "#00eaff",
        border: "1px solid #00ffff55",
        fontSize: "13px",
      }
    });

    navigate("/login");
  };

  return (
    <div className="w-full min-h-screen bg-[#050607] text-white flex">

      {/* SIDEBAR */}
      <aside
        className={`fixed md:static top-0 left-0 min-h-screen bg-[#0a0f12]/80 border-r
        border-gray-800 backdrop-blur-2xl p-6 transform transition-all duration-300
        ${sideOpen ? "translate-x-0 w-64" : "-translate-x-full md:translate-x-0 w-64"}`}
      >

        <h2 className="text-2xl font-bold text-cyan-400 mb-10 select-none">Admin</h2>

        <nav className="space-y-4">
          {menuItems.map((m) => (
            <button
              key={m.id}
              onClick={() => setActive(m.id)}
              className={`flex items-center gap-3 p-3 rounded-lg w-full font-medium 
                transition-all duration-200
                ${active === m.id
                  ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/30"
                  : "text-gray-300 hover:bg-white/10 hover:pl-4"
                }`}
            >
              {m.icon} {m.title}
            </button>
          ))}

          {/* UPDATED LOGOUT BUTTON */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 p-3 rounded-lg w-full text-gray-300 
            hover:bg-red-500/20 hover:text-red-400 transition font-medium"
          >
            <FiLogOut /> Logout
          </button>
        </nav>
      </aside>

      {/* MAIN PANEL */}
      <main className="flex-1 p-6 md:p-10">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">

          <button
            onClick={() => setSideOpen(!sideOpen)}
            className="md:hidden p-2 rounded-lg bg-white/10 active:scale-95"
          >
            <FiMenu size={22} />
          </button>

          <h1 className="text-2xl md:text-3xl font-bold capitalize">
            {active === "overview" && "Dashboard Overview"}
            {active === "orders" && "Order Management"}
            {active === "users" && "Users Database"}
            {active === "products" && "Products Control Center"}
          </h1>

          <div className="flex items-center gap-4">
            <FiBell size={22} className="hover:text-cyan-400 cursor-pointer transition" />
          </div>
        </div>

        {/* SEARCH BAR */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3 flex items-center gap-3 mb-10">
          <FiSearch className="text-gray-400" />
          <input
            className="bg-transparent outline-none flex-1 text-gray-200"
            placeholder="Quick search orders, products, users..."
          />
        </div>

        {/* OVERVIEW CARDS */}
        {active === "overview" && (
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">

            <div className="rounded-xl border border-white/10 p-5 bg-white/5 backdrop-blur-xl hover:scale-[1.02] transition">
              <p className="text-gray-300">Total Sales</p>
              <h2 className="text-3xl font-bold mt-2 text-cyan-400">₹42,500</h2>
            </div>

            <div className="rounded-xl border border-white/10 p-5 bg-white/5 backdrop-blur-xl hover:scale-[1.02] transition">
              <p className="text-gray-300">Orders Today</p>
              <h2 className="text-3xl font-bold mt-2 text-cyan-400">54</h2>
            </div>

            <div className="rounded-xl border border-white/10 p-5 bg-white/5 backdrop-blur-xl hover:scale-[1.02] transition">
              <p className="text-gray-300">Registered Users</p>
              <h2 className="text-3xl font-bold mt-2 text-cyan-400">928</h2>
            </div>

            <div className="rounded-xl border border-white/10 p-5 bg-white/5 backdrop-blur-xl hover:scale-[1.02] transition">
              <p className="text-gray-300">Products</p>
              <h2 className="text-3xl font-bold mt-2 text-cyan-400">178</h2>
            </div>

          </div>
        )}

        {/* OTHER PANELS */}
        {active !== "overview" && (
          <div className="h-[60vh] border border-white/10 rounded-xl bg-white/5 backdrop-blur-xl flex items-center justify-center text-xl text-gray-400">
            Build {active} component here
          </div>
        )}

      </main>
    </div>
  );
}
