// src/components/NavPages/Cart/CartPage.jsx

import React from "react";
import { useCart } from "/Users/shour/VS code/Daily-Codes/AUIND/frontend/src/components/Context/CardContext";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function CartPage() {
  const { cart, setCart } = useCart();

  // Increase Quantity
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const navigate = useNavigate();


  // Decrease Quantity
  const decreaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

  // Remove Item
  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Total Price
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="pt-24 px-4 sm:px-6 lg:px-10 text-white bg-[#050607] min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {/* EMPTY CART */}
      {cart.length === 0 && (
        <div className="text-center mt-20">
          <h2 className="text-xl text-gray-300">Your cart is empty 😕</h2>

          <Link
            to="/mens"
            className="mt-4 inline-block px-6 py-3 bg-cyan-500 text-black font-semibold rounded-lg shadow hover:bg-cyan-600 transition"
          >
            Continue Shopping
          </Link>
        </div>
      )}

      {/* CART LIST */}
      {cart.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT SIDE (ITEMS) */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex bg-white/10 border border-gray-800 rounded-xl p-4 backdrop-blur-sm"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-28 h-28 rounded-lg object-cover border border-gray-700"
                />

                <div className="ml-4 flex flex-col justify-between w-full">
                  {/* PRODUCT NAME + PRICE */}
                  <div>
                    <h2 className="font-semibold text-lg">{item.name}</h2>
                    <p className="text-gray-400 text-sm">{item.brand}</p>

                    <p className="text-cyan-400 font-bold mt-1 text-lg">
                      ₹{item.price}
                    </p>
                  </div>

                  {/* QUANTITY + DELETE */}
                  <div className="flex justify-between items-center mt-3">
                    {/* QUANTITY BUTTONS */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-700 hover:bg-gray-600 text-white text-lg"
                      >
                        -
                      </button>

                      <span className="text-lg font-semibold">{item.qty}</span>

                      <button
                        onClick={() => increaseQty(item.id)}
                        className="w-8 h-8 flex items-center justify-center rounded-md bg-cyan-500 hover:bg-cyan-600 text-black font-bold"
                      >
                        +
                      </button>
                    </div>

                    {/* REMOVE */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-400 hover:text-red-500 text-xl"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE (SUMMARY) */}
          <div className="bg-white/10 border border-gray-800 rounded-xl p-6 backdrop-blur-sm h-fit">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>

            <div className="flex justify-between text-gray-300 text-lg">
              <span>Total Items</span>
              <span>{cart.length}</span>
            </div>

            <div className="flex justify-between mt-3 text-lg font-semibold text-cyan-400">
              <span>Total Price</span>
              <span>₹{total}</span>
            </div>

            <button className="w-full mt-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-lg shadow transition">
              Proceed to Checkout
            </button>

            <button
              onClick={() => navigate(-1)}
              className="block text-center mt-3 text-gray-300 hover:text-white transition"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
