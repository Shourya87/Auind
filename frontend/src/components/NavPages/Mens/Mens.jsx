// Mens.jsx
import React, { useMemo, useState } from "react";
import { FaHeart, FaStar, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { GiHeartWings } from "react-icons/gi";
import toast from "react-hot-toast";

// FIXED RELATIVE IMPORTS
import { useCart } from "../../Context/CardContext";
import { useWishlist } from "../../Context/WishlistContext";
import { useNavigate } from "react-router-dom";

export default function Mens() {
  const categories = [
    "T-Shirts",
    "Shirts",
    "Hoodies",
    "Jackets",
    "Jeans",
    "Bottom Wear",
    "Streetwear",
  ];

  const brands = [
    "Highlander",
    "Bewakoof",
    "Campus Sutra",
    "United Colors",
    "Fubar",
    "AUIND",
  ];

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const products = [
    {
      id: 1,
      brand: "HIGHLANDER",
      name: "Men Printed Casual Shirt",
      price: 609,
      oldPrice: 3399,
      rating: 4.4,
      reviews: 1420,
      img: "/mnt/data/225bb058-7f0d-415f-8e1f-78aa90b1b1a9.png",
      category: "Shirts",
      size: "L",
    },
    {
      id: 2,
      brand: "BEWAKOOF",
      name: "Men Oversized Graphic Tee",
      price: 599,
      oldPrice: 1299,
      rating: 4.4,
      reviews: 1020,
      img: "https://images.pexels.com/photos/6311656/pexels-photo-6311656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800",
      category: "T-Shirts",
      size: "M",
    },
    {
      id: 3,
      brand: "AUIND",
      name: "Streetwear Boxy Tee",
      price: 699,
      oldPrice: 1499,
      rating: 4.1,
      reviews: 278,
      img: "https://images.pexels.com/photos/1701193/pexels-photo-1701193.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800",
      category: "T-Shirts",
      size: "L",
    },
    {
      id: 4,
      brand: "CAMPUS SUTRA",
      name: "Slim Fit Cotton Shirt",
      price: 579,
      oldPrice: 2899,
      rating: 3.9,
      reviews: 147,
      img: "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800",
      category: "Shirts",
      size: "M",
    },
    {
      id: 5,
      brand: "FUBAR",
      name: "Bomber Jacket",
      price: 1799,
      oldPrice: 2999,
      rating: 4.5,
      reviews: 450,
      img: "https://images.pexels.com/photos/1468378/pexels-photo-1468378.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800",
      category: "Jackets",
      size: "XL",
    },
    {
      id: 6,
      brand: "HIGH&CO",
      name: "Soft Winter Hoodie",
      price: 1499,
      oldPrice: 2499,
      rating: 4.2,
      reviews: 310,
      img: "https://images.pexels.com/photos/6311393/pexels-photo-6311393.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800",
      category: "Hoodies",
      size: "L",
    },
    {
      id: 7,
      brand: "BEWAKOOF",
      name: "Daily Casual Tee",
      price: 499,
      oldPrice: 899,
      rating: 4.0,
      reviews: 670,
      img: "https://images.pexels.com/photos/1143763/pexels-photo-1143763.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800",
      category: "T-Shirts",
      size: "M",
    },
    {
      id: 8,
      brand: "FUBAR",
      name: "Slim Fit Trousers",
      price: 899,
      oldPrice: 1699,
      rating: 4.1,
      reviews: 210,
      img: "https://images.pexels.com/photos/6311661/pexels-photo-6311661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800",
      category: "Bottom Wear",
      size: "L",
    },
    {
      id: 9,
      brand: "AUIND",
      name: "Trendy Overshirt",
      price: 1299,
      oldPrice: 2299,
      rating: 4.3,
      reviews: 390,
      img: "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800",
      category: "Shirts",
      size: "XL",
    },
    {
      id: 10,
      brand: "HIGH&CO",
      name: "Printed Urban Tee",
      price: 699,
      oldPrice: 1299,
      rating: 4.0,
      reviews: 220,
      img: "https://images.pexels.com/photos/1524133/pexels-photo-1524133.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800",
      category: "T-Shirts",
      size: "S",
    },
    {
      id: 11,
      brand: "UNITED",
      name: "Classic White Shirt",
      price: 899,
      oldPrice: 1699,
      rating: 4.2,
      reviews: 180,
      img: "https://images.pexels.com/photos/6311644/pexels-photo-6311644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800",
      category: "Shirts",
      size: "M",
    },
    {
      id: 12,
      brand: "AUIND",
      name: "Premium Black Jeans",
      price: 1299,
      oldPrice: 1999,
      rating: 4.6,
      reviews: 520,
      img: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800",
      category: "Jeans",
      size: "L",
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

      toast.error("Removed from Wishlist", {
        style: {
          background: "#0a0f12",
          color: "#ff4d4d",
          border: "1px solid #ff4d4d",
        },
      });
    } else {
      setWishlist([...wishlist, product]);

      toast.success("Added to Wishlist!", {
        style: {
          background: "#0a0f12",
          color: "#00eaff",
          border: "1px solid #00eaff",
        },
      });
    }
  };

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      toast.error("Already in AUIND Cart!", {
        style: {
          background: "#0a0f12",
          color: "#ff4d4d",
          border: "1px solid #ff4d4d",
        },
      });
    } else {
      setCart([...cart, { ...product, qty: 1 }]);

      toast.success(`${product.name} Added to Cart`, {
        style: {
          background: "#0a0f12",
          color: "#00eaff",
          border: "1px solid #00eaff",
        },
      });
    }
  };

  const toggle = (arrSetter, arr, val) =>
    arr.includes(val)
      ? arrSetter(arr.filter((x) => x !== val))
      : arrSetter([...arr, val]);

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
        case "recommended":
          return b.id - a.id;
        default:
          return a.id - b.id;
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

  const pctOff = (p) => Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100);

  return (
    <div className="w-full min-h-screen bg-[#050607] text-white px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 cursor-default">
          <div>
            <nav className="text-sm text-gray-400 mb-3 flex items-center gap-2">
              <a href="/" className="hover:text-cyan-300 transition">
                Home
              </a>
              <span className="text-gray-200">›</span>
              <span className="text-cyan-300 font-semibold">Mens</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Clothes for Men
            </h1>
            <p className="text-sm text-gray-400 mt-1">
              Trending • New arrivals •{" "}
              <span className="text-cyan-300 font-semibold">AUIND picks</span>
            </p>
          </div>

          <div className="flex items-center gap-3 ">
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

        {/* MAIN GRID */}
        <div className="mt-6 grid grid-cols-12">
          {/* FILTERS */}
          <aside
            className={`col-span-12 lg:col-span-3 transition-all ${
              filtersOpen ? "opacity-100" : "opacity-60 lg:opacity-100"
            } w-64`}
          >
            <div className="sticky top-20 space-y-4 hover:cursor-default ">
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
                          onChange={() =>
                            toggle(setSelectedCats, selectedCats, c)
                          }
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
                        onClick={() =>
                          toggle(setSelectedSizes, selectedSizes, s)
                        }
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

              <div className="p-3 rounded-lg bg-linear-to-r from-cyan-600/6 to-transparent border border-gray-800 text-sm text-gray-300">
                Free shipping on orders above{" "}
                <span className="text-cyan-300 font-semibold">₹999</span>
              </div>
            </div>
          </aside>

          {/* PRODUCTS GRID */}
          <section>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-5xl">
              {filtered.map((p) => {
                const isWishlist = wishlist.some((item) => item.id === p.id);

                return (
                  <article
                    onClick={() => navigate(`/product/${p.id}`)}
                    key={p.id}
                    className="relative rounded-2xl overflow-hidden bg-linear-to-b from-white/90 to-white/90 text-black transform hover:-translate-y-1 transition-shadow hover:shadow-2xl border border-gray-200"
                  >
                    {/* WISHLIST TOGGLE */}
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

                    {/* IMAGE */}
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
                        {pctOff(p)}% OFF
                      </div>
                    </div>

                    {/* DETAILS */}
                    <div className="px-4 py-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[14px] font-semibold italic text-cyan-400">
                          {p.brand}
                        </span>

                        <span className="flex items-center gap-1 px-2 py-0.5 bg-cyan-50 text-cyan-700 border rounded-full text-xs font-semibold">
                          <FaStar className="text-[10px]" /> {p.rating}
                        </span>
                      </div>

                      <h3 className="font-semibold text-xs line-clamp-2 text-gray-600">
                        {p.name}
                      </h3>

                      <div className="mt-2 flex items-end justify-between gap-3">
                        <div>
                          <div className="flex items-center p-0.5 gap-1">
                            <div className="text-xs text-gray-400 line-through">
                              ₹{p.oldPrice}
                            </div>
                            <div className="text-xs text-green-600 font-semibold">
                              {pctOff(p)}% OFF
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
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
