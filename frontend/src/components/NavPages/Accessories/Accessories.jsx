import React, { useMemo, useState } from "react";
import { FaHeart, FaStar, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { GiHeartWings } from "react-icons/gi";
import toast from "react-hot-toast";

import { useCart } from "../../Context/CardContext";
import { useWishlist } from "../../Context/WishlistContext";
import { useNavigate } from "react-router-dom";

export default function Accessories() {
  const categories = [
    "Caps",
    "Sunglasses",
    "Wallets",
    "Bags",
    "Belts",
    "Watches",
    "Socks",
  ];

  const brands = ["Fossil", "Puma", "Nike", "Roadster", "Urbanic", "AUIND"];

  const sizes = ["Free Size"];

  const products = [
  {
    id: 1,
    brand: "Fossil",
    name: "Classic Sunglasses",
    price: 699,
    oldPrice: 1299,
    rating: 4.3,
    reviews: 1200,
    img: "https://images.pexels.com/photos/1805416/pexels-photo-1805416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800",
    category: "Sunglasses",
    size: "Free Size",
  },
  {
    id: 2,
    brand: "Roadster",
    name: "Leather Wallet",
    price: 799,
    oldPrice: 1499,
    rating: 4.5,
    reviews: 900,
    img: "https://images.pexels.com/photos/933218/pexels-photo-933218.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800",
    category: "Wallets",
    size: "Free Size",
  },
  {
    id: 3,
    brand: "AUIND",
    name: "Canvas Shoulder Bag",
    price: 899,
    oldPrice: 1599,
    rating: 4.2,
    reviews: 740,
    img: "https://images.pexels.com/photos/6311396/pexels-photo-6311396.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800",
    category: "Bags",
    size: "Free Size",
  },
  {
    id: 4,
    brand: "Puma",
    name: "Sports Cap",
    price: 399,
    oldPrice: 799,
    rating: 4.1,
    reviews: 550,
    img: "https://images.pexels.com/photos/838664/pexels-photo-838664.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800",
    category: "Caps",
    size: "Free Size",
  },
  {
    id: 5,
    brand: "Fossil",
    name: "Luxury Analog Watch",
    price: 1599,
    oldPrice: 2999,
    rating: 4.6,
    reviews: 1200,
    img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800",
    category: "Watches",
    size: "Free Size",
  },
  {
    id: 6,
    brand: "Nike",
    name: "Travel Backpack",
    price: 1299,
    oldPrice: 2499,
    rating: 4.5,
    reviews: 900,
    img: "https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800",
    category: "Bags",
    size: "Free Size",
  },

  // NEW ITEMS BELOW

  {
    id: 7,
    brand: "Urbanic",
    name: "Designer Belt",
    price: 899,
    oldPrice: 1799,
    rating: 4.4,
    reviews: 820,
    img: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800",
    category: "Belts",
    size: "Free Size",
  },
  {
    id: 8,
    brand: "AUIND",
    name: "Mini Cross Bag",
    price: 699,
    oldPrice: 1299,
    rating: 4.1,
    reviews: 590,
    img: "https://images.pexels.com/photos/6077365/pexels-photo-6077365.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800",
    category: "Bags",
    size: "Free Size",
  },
  {
    id: 9,
    brand: "Fossil",
    name: "Vintage Watch",
    price: 1299,
    oldPrice: 2499,
    rating: 4.3,
    reviews: 640,
    img: "https://images.pexels.com/photos/1143760/pexels-photo-1143760.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800",
    category: "Watches",
    size: "Free Size",
  },
  {
    id: 10,
    brand: "Puma",
    name: "Sports Socks (Pack of 3)",
    price: 299,
    oldPrice: 599,
    rating: 4.0,
    reviews: 310,
    img: "https://images.pexels.com/photos/6311663/pexels-photo-6311663.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800",
    category: "Socks",
    size: "Free Size",
  },
  {
    id: 11,
    brand: "AUIND",
    name: "Fashion Glasses",
    price: 499,
    oldPrice: 999,
    rating: 4.1,
    reviews: 420,
    img: "https://images.pexels.com/photos/1578871/pexels-photo-1578871.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800",
    category: "Sunglasses",
    size: "Free Size",
  },
  {
    id: 12,
    brand: "Roadster",
    name: "Cap Retro Edition",
    price: 349,
    oldPrice: 699,
    rating: 4.2,
    reviews: 380,
    img: "https://images.pexels.com/photos/1456733/pexels-photo-1456733.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800",
    category: "Caps",
    size: "Free Size",
  },
];

  const { cart, setCart } = useCart();
  const { wishlist, setWishlist } = useWishlist();
  const navigate = useNavigate();

  const [selectedCats, setSelectedCats] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("recommended");
  const [filtersOpen, setFiltersOpen] = useState(true);

  const toggleWishlist = (product) => {
    const exists = wishlist.some((item) => item.id === product.id);

    if (exists) {
      setWishlist(wishlist.filter((x) => x.id !== product.id));
      toast.error("Removed");
    } else {
      setWishlist([...wishlist, product]);
      toast.success("Saved");
    }
  };

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      toast.error("Already in Cart");
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      toast.success("Added");
    }
  };

  const toggle = (setter, arr, val) =>
    arr.includes(val)
      ? setter(arr.filter((x) => x !== val))
      : setter([...arr, val]);

  const filtered = useMemo(() => {
    let r = products.filter((p) => {
      if (selectedCats.length && !selectedCats.includes(p.category)) return false;
      if (selectedBrands.length && !selectedBrands.includes(p.brand)) return false;
      if (minPrice && p.price < Number(minPrice)) return false;
      if (maxPrice && p.price > Number(maxPrice)) return false;
      return true;
    });

    r = r.sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return b.id - a.id;
      }
    });

    return r;
  }, [selectedCats, selectedBrands, minPrice, maxPrice, sortBy]);

  const pctOff = (p) =>
    Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100);

  return (
    <div className="w-full min-h-screen bg-[#050607] text-white px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <nav className="text-sm text-gray-400 mb-3 flex items-center gap-2">
              <a href="/" className="hover:text-cyan-300 transition">Home</a>
              <span className="text-gray-200">›</span>
              <span className="text-cyan-300 font-semibold">Accessories</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold">
              Accessories
            </h1>
            <p className="text-sm text-gray-400 mt-1">
              Watches • Bags • Shades •{" "}
              <span className="text-cyan-300 font-semibold">Style boosters</span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#0b1012] border border-gray-800 text-sm px-3 py-2 rounded-lg text-gray-200"
            >
              <option value="recommended">Recommended</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>

            <button
              onClick={() => setFiltersOpen((s) => !s)}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-800 bg-transparent text-sm md:hidden"
            >
              {filtersOpen ? <FaChevronUp /> : <FaChevronDown />} Filters
            </button>
          </div>
        </div>

        {/* LAYOUT */}
        <div className="mt-6 grid grid-cols-12">

          {/* FILTERS */}
          <aside
            className={`col-span-12 lg:col-span-3 transition-all ${
              filtersOpen ? "opacity-100" : "opacity-60 lg:opacity-100"
            } w-64`}
          >
            <div className="sticky top-20 p-4 rounded-xl border border-gray-800 bg-linear-to-b from-[#071014]/60 to-[#061214]/40 backdrop-blur-sm space-y-4">

              <div className="flex items-center justify-between mb-1">
                <h3 className="text-lg font-bold text-cyan-300">Filters</h3>

                <button
                  onClick={() => {
                    setSelectedCats([]);
                    setSelectedBrands([]);
                    setMinPrice("");
                    setMaxPrice("");
                  }}
                  className="text-xs px-2 py-1 border border-gray-700 rounded-md text-gray-200"
                >
                  Reset
                </button>
              </div>

              {/* CATEGORY */}
              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-1">Categories</h4>
                {categories.map((c) => (
                  <label key={c} className="flex items-center gap-3 text-sm text-gray-200 cursor-pointer mb-1">
                    <input
                      type="checkbox"
                      onChange={() => toggle(setSelectedCats, selectedCats, c)}
                      checked={selectedCats.includes(c)}
                      className="accent-cyan-400"
                    />
                    {c}
                  </label>
                ))}
              </div>

              {/* BRANDS */}
              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-1">Brands</h4>
                {brands.map((b) => (
                  <label key={b} className="flex items-center gap-3 text-sm text-gray-200 cursor-pointer mb-1">
                    <input
                      type="checkbox"
                      onChange={() => toggle(setSelectedBrands, selectedBrands, b)}
                      checked={selectedBrands.includes(b)}
                      className="accent-cyan-400"
                    />
                    {b}
                  </label>
                ))}
              </div>

              {/* PRICE */}
              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-1">Price (₹)</h4>

                <div className="flex gap-2">
                  <input
                    placeholder="Min"
                    value={minPrice}
                    onChange={(e) =>
                      setMinPrice(e.target.value.replace(/\D/, ""))
                    }
                    className="w-1/2 bg-transparent border border-gray-700 rounded-md px-2 py-1 text-sm text-gray-200"
                  />

                  <input
                    placeholder="Max"
                    value={maxPrice}
                    onChange={(e) =>
                      setMaxPrice(e.target.value.replace(/\D/, ""))
                    }
                    className="w-1/2 bg-transparent border border-gray-700 rounded-md px-2 py-1 text-sm text-gray-200"
                  />
                </div>
              </div>
            </div>
          </aside>

          {/* PRODUCT GRID */}
          <section className="col-span-12 lg:col-span-9">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-5xl">

              {filtered.map((p) => {
                const isWishlist = wishlist.some((x) => x.id === p.id);

                return (
                  <article
                    key={p.id}
                    onClick={() => navigate(`/product/${p.id}`)}
                    className="rounded-2xl overflow-hidden bg-white/95 text-black hover:-translate-y-1 hover:shadow-2xl transition border border-gray-200 cursor-pointer relative"
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(p);
                      }}
                      className="absolute right-3 top-3 z-10 bg-white border p-1 rounded-full shadow-sm"
                    >
                      {isWishlist ? (
                        <GiHeartWings className="text-red-500" />
                      ) : (
                        <FaHeart className="text-gray-500" />
                      )}
                    </button>

                    <div className="h-56 overflow-hidden bg-gray-100">
                      <img
                        src={p.img}
                        alt={p.name}
                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                      />

                      <div className="absolute left-3 top-3 bg-cyan-600 text-white text-xs font-semibold px-2 py-1 rounded-md">
                        {pctOff(p)}% OFF
                      </div>
                    </div>

                    <div className="p-3">
                      <div className="flex items-center justify-between">
                        <p className="text-[13px] italic font-semibold text-cyan-500">
                          {p.brand}
                        </p>

                        <span className="px-2 py-0.5 bg-cyan-50 text-cyan-600 border rounded-full text-xs font-semibold flex items-center gap-1">
                          <FaStar className="text-[10px]" />
                          {p.rating}
                        </span>
                      </div>

                      <p className="text-xs text-gray-700 font-semibold line-clamp-2 mt-1">
                        {p.name}
                      </p>

                      <div className="mt-2 flex items-end justify-between gap-3">
                        <div>
                          <p className="text-xs line-through text-gray-400">
                            ₹{p.oldPrice}
                          </p>

                          <p className="text-xs text-green-600 font-semibold">
                            {pctOff(p)}% OFF
                          </p>

                          <p className="text-lg font-bold text-cyan-600">
                            ₹{p.price}
                          </p>
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart(p);
                          }}
                          className="px-4 py-2 rounded-md bg-cyan-500 text-black text-sm font-semibold shadow"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}

            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
