import React, { useMemo, useState } from "react";
import { FaHeart, FaStar, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { GiHeartWings } from "react-icons/gi";
import toast from "react-hot-toast";
import { useCart } from "../../Context/CardContext";
import { useWishlist } from "../../Context/WishlistContext";
import { useNavigate } from "react-router-dom";

export default function Sales() {
  const navigate = useNavigate();
  const { cart, setCart } = useCart();
  const { wishlist, setWishlist } = useWishlist();

  const categories = [
    "T-Shirts",
    "Shirts",
    "Hoodies",
    "Jackets",
    "Pants",
    "Accessories",
  ];
  const brands = [
    "Roadster",
    "HIGHLANDER",
    "Nike",
    "Urbanic",
    "Bewakoof",
    "AUIND",
    "Fossil",
    "Puma",
  ];
  const sizes = ["S", "M", "L", "XL", "Free"];

  const products = [
    {
      id: 1,
      brand: "HIGHLANDER",
      name: "Oversized Tee",
      price: 499,
      oldPrice: 999,
      rating: 4.3,
      reviews: 430,
      img: "https://images.pexels.com/photos/6311656/pexels-photo-6311656.jpeg?auto=compress",
      category: "T-Shirts",
      size: "L",
    },
    {
      id: 2,
      brand: "Roadster",
      name: "Denim Shirt",
      price: 799,
      oldPrice: 1499,
      rating: 4.2,
      reviews: 270,
      img: "https://images.pexels.com/photos/1701193/pexels-photo-1701193.jpeg?auto=compress",
      category: "Shirts",
      size: "M",
    },
    {
      id: 3,
      brand: "AUIND",
      name: "Soft Hoodie",
      price: 999,
      oldPrice: 1799,
      rating: 4.4,
      reviews: 580,
      img: "https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress",
      category: "Hoodies",
      size: "L",
    },
    {
      id: 4,
      brand: "Urbanic",
      name: "Women's Kurti",
      price: 699,
      oldPrice: 1299,
      rating: 4.1,
      reviews: 350,
      img: "https://images.pexels.com/photos/5338331/pexels-photo-5338331.jpeg?auto=compress",
      category: "Shirts",
      size: "M",
    },
    {
      id: 5,
      brand: "Nike",
      name: "Track Jacket",
      price: 1499,
      oldPrice: 2499,
      rating: 4.5,
      reviews: 490,
      img: "https://images.pexels.com/photos/2923156/pexels-photo-2923156.jpeg?auto=compress",
      category: "Jackets",
      size: "XL",
    },
    {
      id: 6,
      brand: "AUIND",
      name: "Kids Tee",
      price: 299,
      oldPrice: 599,
      rating: 4,
      reviews: 210,
      img: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress",
      category: "T-Shirts",
      size: "S",
    },
    {
      id: 7,
      brand: "Puma",
      name: "Sports Cap",
      price: 349,
      oldPrice: 799,
      rating: 4.1,
      reviews: 260,
      img: "https://images.pexels.com/photos/838664/pexels-photo-838664.jpeg?auto=compress",
      category: "Accessories",
      size: "Free",
    },
    {
      id: 8,
      brand: "AUIND",
      name: "Mini Bag",
      price: 499,
      oldPrice: 899,
      rating: 4.2,
      reviews: 390,
      img: "https://images.pexels.com/photos/6077365/pexels-photo-6077365.jpeg?auto=compress",
      category: "Accessories",
      size: "Free",
    },
    {
      id: 9,
      brand: "Roadster",
      name: "Jeans Pant",
      price: 1199,
      oldPrice: 1999,
      rating: 4.2,
      reviews: 530,
      img: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress",
      category: "Pants",
      size: "L",
    },
    {
      id: 10,
      brand: "Fossil",
      name: "Analog Watch",
      price: 1299,
      oldPrice: 2499,
      rating: 4.6,
      reviews: 780,
      img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress",
      category: "Accessories",
      size: "Free",
    },
    {
      id: 11,
      brand: "Urbanic",
      name: "Winter Hoodie",
      price: 899,
      oldPrice: 1599,
      rating: 4.1,
      reviews: 300,
      img: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress",
      category: "Hoodies",
      size: "M",
    },
    {
      id: 12,
      brand: "Nike",
      name: "Track Pants",
      price: 549,
      oldPrice: 999,
      rating: 4,
      reviews: 320,
      img: "https://images.pexels.com/photos/6311661/pexels-photo-6311661.jpeg?auto=compress",
      category: "Pants",
      size: "XL",
    },
    {
      id: 13,
      brand: "Fossil",
      name: "Sunglasses",
      price: 799,
      oldPrice: 1599,
      rating: 4.3,
      reviews: 540,
      img: "https://images.pexels.com/photos/1805416/pexels-photo-1805416.jpeg?auto=compress",
      category: "Accessories",
      size: "Free",
    },
    {
      id: 14,
      brand: "Bewakoof",
      name: "Printed Tee",
      price: 399,
      oldPrice: 799,
      rating: 4.1,
      reviews: 260,
      img: "https://images.pexels.com/photos/1524133/pexels-photo-1524133.jpeg?auto=compress",
      category: "T-Shirts",
      size: "M",
    },
    {
      id: 15,
      brand: "Puma",
      name: "Sports Bag",
      price: 999,
      oldPrice: 1999,
      rating: 4.4,
      reviews: 480,
      img: "https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress",
      category: "Accessories",
      size: "Free",
    },
    {
      id: 16,
      brand: "HIGHLANDER",
      name: "Flannel Shirt",
      price: 749,
      oldPrice: 1499,
      rating: 4.2,
      reviews: 330,
      img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress",
      category: "Shirts",
      size: "L",
    },
  ];

  const [selectedCats, setSelectedCats] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("recommended");
  const [filtersOpen, setFiltersOpen] = useState(true);

  const toggle = (setter, arr, val) =>
    arr.includes(val)
      ? setter(arr.filter((x) => x !== val))
      : setter([...arr, val]);

  const toggleWishlist = (product) => {
    const exists = wishlist.some((x) => x.id === product.id);
    if (exists) {
      setWishlist(wishlist.filter((x) => x.id !== product.id));
      toast.error("Removed");
    } else {
      setWishlist([...wishlist, product]);
      toast.success("Saved");
    }
  };

  const addToCart = (product) => {
    const exists = cart.some((x) => x.id === product.id);
    if (exists) {
      toast.error("Already Added");
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      toast.success("Added");
    }
  };

  const pctOff = (p) => Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100);

  const filtered = useMemo(() => {
    return products
      .filter((p) => !selectedCats.length || selectedCats.includes(p.category))
      .filter((p) => !selectedBrands.length || selectedBrands.includes(p.brand))
      .filter((p) => !selectedSizes.length || selectedSizes.includes(p.size))
      .filter((p) => !minPrice || p.price >= Number(minPrice))
      .filter((p) => !maxPrice || p.price <= Number(maxPrice))
      .sort((a, b) => {
        if (sortBy === "price-asc") return a.price - b.price;
        if (sortBy === "price-desc") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating;
        return b.id - a.id;
      });
  }, [selectedCats, selectedBrands, selectedSizes, minPrice, maxPrice, sortBy]);

  return (
    <div className="w-full min-h-screen bg-[#050607] text-white px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 cursor-default">
          {/* LEFT */}
          <div>
            <nav className="text-sm text-gray-400 mb-3 flex items-center gap-2">
              <a href="/" className="hover:text-cyan-300 transition">
                Home
              </a>
              <span className="text-gray-200">›</span>
              <span className="text-cyan-300 font-semibold">Sales</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl font-bold">
              Sales
            </h1>

            <p className="text-sm text-gray-400 mt-1">
              T-Shirts • Hoodies • Shirts •
              <span className="text-cyan-300 font-semibold">
                {" "}
                Big Discounts
              </span>
            </p>
          </div>

          {/* RIGHT */}
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
        </div>

        <div className="mt-6 grid grid-cols-12">
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

          <section className="col-span-12 lg:col-span-9">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {filtered.map((p) => {
                const isWishlisted = wishlist.some((x) => x.id === p.id);
                return (
                  <article
                    key={p.id}
                    onClick={() => navigate(`/product/${p.id}`)}
                    className="rounded-xl overflow-hidden bg-white/95 text-gray-500 border border-gray-200 hover:-translate-y-1 transition shadow cursor-pointer relative"
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(p);
                      }}
                      className="absolute right-3 top-3 z-10 p-1 rounded-full bg-white border shadow"
                    >
                      {isWishlisted ? (
                        <GiHeartWings className="text-red-500" />
                      ) : (
                        <FaHeart className="text-gray-500" />
                      )}
                    </button>

                    <div className="h-56 overflow-hidden bg-gray-50">
                      <img
                        src={p.img}
                        alt={p.name}
                        className="w-full h-full object-cover hover:scale-105 transition"
                      />

                      <p className="absolute left-3 top-3 bg-cyan-600 text-white text-xs font-bold px-2 py-1 rounded">
                        {pctOff(p)}% OFF
                      </p>
                    </div>

                    <div className="p-3">
                      <p className="text-xs text-cyan-400 font-semibold italic">
                        {p.brand}
                      </p>

                      <p className="text-sm font-bold mt-1 line-clamp-2">
                        {p.name}
                      </p>

                      <div className="flex items-center justify-between mt-3">
                        <div>
                          <p className="text-gray-500 text-xs line-through">
                            ₹{p.oldPrice}
                          </p>
                          <p className="text-green-600 text-xs font-semibold">
                            {pctOff(p)}% OFF
                          </p>
                          <p className="text-cyan-600 font-extrabold text-lg">
                            ₹{p.price}
                          </p>
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart(p);
                          }}
                          className="px-4 py-2 rounded-md bg-cyan-500 text-black font-semibold text-sm"
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
