// Wishlist.jsx
import React from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { GiHeartWings } from "react-icons/gi";
import { useWishlist } from "../../Context/WishlistContext";
import { useCart } from "../../Context/CardContext";
import toast from "react-hot-toast";

export default function Wishlist() {
  const { wishlist, setWishlist } = useWishlist();
  const { cart, setCart } = useCart();

  const removeFromWishlist = (product) => {
    setWishlist(wishlist.filter((item) => item.id !== product.id));

    toast.error("Removed from Wishlist", {
      style: {
        background: "#0a0f12",
        color: "#ff4d4d",
        border: "1px solid #ff4d4d",
      },
    });
  };

  const addToCart = (product) => {
    const exists = cart.some((item) => item.id === product.id);

    if (exists) {
      toast.error("Already in AUIND Cart", {
        style: {
          background: "#0a0f12",
          color: "#ff4d4d",
        },
      });
    } else {
      setCart([...cart, { ...product, qty: 1 }]);

      toast.success("Added to Cart", {
        style: {
          background: "#0a0f12",
          color: "#00eaff",
        },
      });
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#050607] text-white px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="flex gap-4 items-center mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-normal font-sans mt mb-3">
            Wishlist
          </h1>
          <div className="text-red-600 text-6xl" >
            <GiHeartWings/>
          </div>
        </div>

        {/* IF EMPTY */}
        {wishlist.length === 0 ? (
          <div className="text-center justify-self-center mt-20">
            <GiHeartWings className="text-gray-500 mx-auto text-6xl opacity-70" />
            <h2 className="text-xl mt-4 text-gray-300 font-semibold">
              Your Wishlist is Empty
            </h2>
            <p className="text-gray-400 mt-2 text-sm">
              Save products you love for later ❤️
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {wishlist.map((p) => (
              <article
                key={p.id}
                className="relative rounded-2xl overflow-hidden bg-linear-to-b from-white/90 to-white/90 text-black transform hover:-translate-y-1 transition-shadow hover:shadow-2xl border border-gray-200"
              >
                {/* REMOVE BUTTON */}
                <button
                  onClick={() => removeFromWishlist(p)}
                  className="absolute right-3 top-3 z-20 p-1 bg-white rounded-full border border-gray-200 shadow-md hover:scale-105 transition"
                >
                  <GiHeartWings className="text-red-500" />
                </button>

                {/* PRODUCT IMAGE */}
                <div className="w-full h-60 bg-gray-100 flex items-center justify-center overflow-hidden relative">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800";
                    }}
                  />

                  <div className="absolute left-3 top-3 bg-cyan-600 text-white text-xs font-semibold px-2 py-1 rounded-md">
                    {Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100)}% OFF
                  </div>
                </div>

                {/* PRODUCT DETAILS */}
                <div className="px-4 py-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[14px] font-semibold italic text-cyan-500">
                      {p.brand}
                    </span>
                    <span className="flex items-center gap-1 px-2 py-0.5 bg-cyan-50 text-cyan-700 border rounded-full text-xs font-semibold">
                      <FaStar className="text-[10px]" /> {p.rating}
                    </span>
                  </div>

                  <h3 className="font-semibold text-xs line-clamp-2 text-gray-700">
                    {p.name}
                  </h3>

                  <div className="mt-2 flex items-end justify-between gap-3">
                    <div>
                      <div className="flex items-center p-0.5 gap-1">
                        <div className="text-xs text-gray-400 line-through">
                          ₹{p.oldPrice}
                        </div>
                        <div className="text-xs text-green-600 font-semibold">
                          {Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100)}
                          % OFF
                        </div>
                      </div>

                      <div className="text-lg font-bold text-cyan-600">
                        ₹{p.price}
                      </div>
                    </div>

                    <button
                      onClick={() => addToCart(p)}
                      className="px-4 py-2 rounded-md bg-linear-to-r from-cyan-400 to-cyan-600 text-black text-sm font-semibold shadow"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
