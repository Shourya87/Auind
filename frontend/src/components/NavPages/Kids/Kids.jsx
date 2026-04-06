import React, { useMemo, useState } from "react";
import { FaHeart, FaStar, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { GiHeartWings } from "react-icons/gi";
import toast from "react-hot-toast";

import { useCart } from "../../Context/CardContext";
import { useWishlist } from "../../Context/WishlistContext";
import { useNavigate } from "react-router-dom";

export default function Kids() {
  const categories = [
    "T-Shirts",
    "Shorts",
    "Nightwear",
    "Winterwear",
    "Hoodies",
    "Fun Wear",
  ];

  const brands = [
    "H&M Kids",
    "BabyGo",
    "Nike Kids",
    "Mothercare",
    "Bewakoof",
    "AUIND Kids",
  ];

  const sizes = ["2-4Y", "4-6Y", "6-8Y", "8-10Y", "10-12Y"];

  const products = [
    {
      id: 1,
      brand: "H&M Kids",
      name: "Cartoon Print Tee",
      price: 499,
      oldPrice: 899,
      rating: 4.4,
      reviews: 390,
      img: "https://images.pexels.com/photos/6311639/pexels-photo-6311639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800",
      category: "T-Shirts",
      size: "6-8Y",
    },
    {
      id: 2,
      brand: "AUIND Kids",
      name: "Cute Summer Set",
      price: 699,
      oldPrice: 1299,
      rating: 4.3,
      reviews: 240,
      img: "https://images.pexels.com/photos/3182772/pexels-photo-3182772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800",
      category: "Fun Wear",
      size: "4-6Y",
    },
    {
      id: 3,
      brand: "Bewakoof",
      name: "Kids Hoodie (Soft)",
      price: 999,
      oldPrice: 1799,
      rating: 4.5,
      reviews: 550,
      img: "https://images.pexels.com/photos/6311661/pexels-photo-6311661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800",
      category: "Hoodies",
      size: "8-10Y",
    },
    {
      id: 4,
      brand: "Nike Kids",
      name: "Winterwear Jacket",
      price: 1399,
      oldPrice: 2399,
      rating: 4.3,
      reviews: 260,
      img: "https://images.pexels.com/photos/6311647/pexels-photo-6311647.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800",
      category: "Winterwear",
      size: "10-12Y",
    },
    {
      id: 5,
      brand: "Mothercare",
      name: "Soft Nightwear Set",
      price: 799,
      oldPrice: 1499,
      rating: 4.2,
      reviews: 210,
      img: "https://images.pexels.com/photos/6311635/pexels-photo-6311635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800",
      category: "Nightwear",
      size: "6-8Y",
    },
    {
      id: 6,
      brand: "AUIND Kids",
      name: "Kids Denim Shorts",
      price: 499,
      oldPrice: 999,
      rating: 4.1,
      reviews: 180,
      img: "https://images.pexels.com/photos/6311663/pexels-photo-6311663.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800",
      category: "Shorts",
      size: "8-10Y",
    },
  ];

  const { cart, setCart } = useCart();
  const { wishlist, setWishlist } = useWishlist();
  const navigate = useNavigate();

  const [selectedCats, setSelectedCats] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("recommended");
  const [filtersOpen, setFiltersOpen] = useState(true);

  const toggleWishlist = (product) => {
    const exists = wishlist.some((item) => item.id === product.id);

    if (exists) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
      toast.error("Removed from Wishlist");
    } else {
      setWishlist([...wishlist, product]);
      toast.success("Added to Wishlist!");
    }
  };

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      toast.error("Already in Cart!");
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      toast.success("Added to Cart!");
    }
  };

  const toggle = (setter, arr, val) =>
    arr.includes(val)
      ? setter(arr.filter((x) => x !== val))
      : setter([...arr, val]);

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      if (selectedCats.length && !selectedCats.includes(p.category))
        return false;
      if (selectedBrands.length && !selectedBrands.includes(p.brand))
        return false;
      if (selectedSizes.length && !selectedSizes.includes(p.size)) return false;
      if (minPrice && p.price < Number(minPrice)) return false;
      if (maxPrice && p.price > Number(maxPrice)) return false;
      return true;
    });

    result = result.sort((a, b) => {
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

    return result;
  }, [
    products,
    selectedCats,
    selectedBrands,
    selectedSizes,
    minPrice,
    maxPrice,
    sortBy,
  ]);

  const pctOff = (p) =>
    Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100);

  return (
    <div className="w-full min-h-screen bg-[#050607] text-white px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 cursor-default">
          <div>
            <nav className="text-sm text-gray-400 mb-3 flex items-center gap-2">
              <a href="/" className="hover:text-cyan-300 transition">Home</a>
              <span className="text-gray-200">›</span>
              <span className="text-cyan-300 font-semibold">Kids</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Clothes for Kids
            </h1>

            <p className="text-sm text-gray-400 mt-1">
              Playful • Stylish •{" "}
              <span className="text-cyan-300 font-semibold">AUIND Kidswear</span>
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

        <div className="mt-6 grid grid-cols-12">

          {/* FILTER SIDEBAR */}
          <aside
            className={`col-span-12 lg:col-span-3 transition-all ${
              filtersOpen ? "opacity-100" : "opacity-60 lg:opacity-100"
            } w-64`}
          >
            <div className="sticky top-20 space-y-4 hover:cursor-default">
              <div className="rounded-xl p-4 border border-gray-800 bg-linear-to-b from-[#071014]/60 to-[#061214]/40 backdrop-blur-sm">

                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-cyan-300">Filters</h3>

                  <button
                    onClick={() => {
                      setSelectedCats([]);
                      setSelectedBrands([]);
                      setSelectedSizes([]);
                      setMinPrice("");
                      setMaxPrice("");
                    }}
                    className="text-xs px-2 py-1 rounded bg-transparent border border-gray-700 text-gray-300"
                  >
                    Reset
                  </button>
                </div>

                {/* CATEGORIES */}
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">
                    Categories
                  </h4>

                  <div className="space-y-2">
                    {categories.map((c) => (
                      <label
                        key={c}
                        className="flex items-center gap-3 text-sm text-gray-200 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedCats.includes(c)}
                          onChange={() => toggle(setSelectedCats, selectedCats, c)}
                          className="accent-cyan-400 w-4 h-4"
                        />
                        <span>{c}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* BRANDS */}
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">
                    Brands
                  </h4>

                  <div className="space-y-2 max-h-36 overflow-auto pr-2">
                    {brands.map((b) => (
                      <label
                        key={b}
                        className="flex items-center gap-3 text-sm text-gray-200 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(b)}
                          onChange={() =>
                            toggle(setSelectedBrands, selectedBrands, b)
                          }
                          className="accent-cyan-400 w-4 h-4"
                        />
                        <span>{b}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* SIZES */}
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">
                    Sizes
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {sizes.map((s) => (
                      <button
                        key={s}
                        onClick={() => toggle(setSelectedSizes, selectedSizes, s)}
                        className={`px-3 py-1 rounded-md text-sm border ${
                          selectedSizes.includes(s)
                            ? "bg-cyan-500 text-black border-cyan-500"
                            : "bg-transparent text-gray-200 border-gray-700"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* PRICE */}
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">
                    Price (₹)
                  </h4>

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

                <div className="mt-4 flex gap-2">
                  <button className="flex-1 py-2 rounded-md bg-cyan-500 text-black text-sm font-semibold">
                    Apply
                  </button>

                  <button
                    onClick={() => {
                      setSelectedCats([]);
                      setSelectedBrands([]);
                      setSelectedSizes([]);
                      setMinPrice("");
                      setMaxPrice("");
                    }}
                    className="flex-1 py-2 rounded-md bg-transparent border border-gray-700 text-sm text-gray-200"
                  >
                    Clear
                  </button>
                </div>
              </div>

              <div className="p-3 rounded-lg bgcolor-gradient border border-gray-800 text-sm text-gray-300">
                Free shipping on orders above{" "}
                <span className="text-cyan-300 font-semibold">₹999</span>
              </div>
            </div>
          </aside>

          {/* PRODUCT GRID */}
          <section className="col-span-12 lg:col-span-9">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-5xl">

              {filtered.map((p) => {
                const isWishlist = wishlist.some((item) => item.id === p.id);

                return (
                  <article
                    onClick={() => navigate(`/product/${p.id}`)}
                    key={p.id}
                    className="relative rounded-2xl overflow-hidden bg-white/95 text-black hover:-translate-y-1 hover:shadow-xl transition border border-gray-200 cursor-pointer"
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(p);
                      }}
                      className="absolute right-3 top-3 z-20 p-1 border border-white bg-white rounded-full shadow-sm transform hover:scale-105 transition"
                    >
                      {isWishlist ? (
                        <GiHeartWings className="text-red-500" />
                      ) : (
                        <FaHeart className="text-gray-400" />
                      )}
                    </button>

                    <div className="w-full h-56 bg-gray-100 overflow-hidden relative">
                      <img
                        src={p.img}
                        alt={p.name}
                        className="object-cover w-full h-full transition hover:scale-105"
                      />

                      <div className="absolute left-3 top-3 bg-cyan-600 text-white text-xs font-semibold px-2 py-1 rounded-md">
                        {pctOff(p)}% OFF
                      </div>
                    </div>

                    <div className="p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[13px] font-semibold italic text-cyan-400">
                          {p.brand}
                        </span>

                        <span className="flex items-center gap-1 px-2 py-0.5 bg-cyan-50 text-cyan-700 rounded-full text-xs font-semibold border">
                          <FaStar className="text-[10px]" /> {p.rating}
                        </span>
                      </div>

                      <p className="font-semibold text-xs text-gray-700 line-clamp-2 mt-1">
                        {p.name}
                      </p>

                      <div className="mt-2 flex items-end justify-between gap-3">
                        <div>
                          <p className="text-xs text-gray-400 line-through">
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
