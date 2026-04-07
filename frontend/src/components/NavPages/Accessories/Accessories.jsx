// Accessories.jsx
import React, { useMemo, useState, useEffect } from "react";
import { FaHeart, FaStar, FaFilter, FaTimes, FaCheck } from "react-icons/fa";
import { GiHeartWings } from "react-icons/gi";
import { HiSortDescending } from "react-icons/hi";
import toast from "react-hot-toast";

import { useCart } from "../../Context/CardContext";
import { useWishlist } from "../../Context/WishlistContext";
import { useNavigate } from "react-router-dom";

export default function Accessories() {
  const categories = ["Caps", "Sunglasses", "Wallets", "Bags", "Belts", "Watches", "Socks"];
  const brands = ["Fossil", "Puma", "Nike", "Roadster", "Urbanic", "AUIND"];

  const products = [
    { id: 1, brand: "Fossil", name: "Classic Sunglasses", price: 699, oldPrice: 1299, rating: 4.3, reviews: 1200, img: "https://images.pexels.com/photos/1805416/pexels-photo-1805416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800", category: "Sunglasses", size: "Free Size" },
    { id: 2, brand: "Roadster", name: "Leather Wallet", price: 799, oldPrice: 1499, rating: 4.5, reviews: 900, img: "https://images.pexels.com/photos/933218/pexels-photo-933218.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800", category: "Wallets", size: "Free Size" },
    { id: 3, brand: "AUIND", name: "Canvas Shoulder Bag", price: 899, oldPrice: 1599, rating: 4.2, reviews: 740, img: "https://images.pexels.com/photos/6311396/pexels-photo-6311396.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800", category: "Bags", size: "Free Size" },
    { id: 4, brand: "Puma", name: "Sports Cap", price: 399, oldPrice: 799, rating: 4.1, reviews: 550, img: "https://images.pexels.com/photos/838664/pexels-photo-838664.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800", category: "Caps", size: "Free Size" },
    { id: 5, brand: "Fossil", name: "Luxury Analog Watch", price: 1599, oldPrice: 2999, rating: 4.6, reviews: 1200, img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800", category: "Watches", size: "Free Size" },
    { id: 6, brand: "Nike", name: "Travel Backpack", price: 1299, oldPrice: 2499, rating: 4.5, reviews: 900, img: "https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800", category: "Bags", size: "Free Size" },
    { id: 7, brand: "Urbanic", name: "Designer Belt", price: 899, oldPrice: 1799, rating: 4.4, reviews: 820, img: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800", category: "Belts", size: "Free Size" },
    { id: 8, brand: "AUIND", name: "Mini Cross Bag", price: 699, oldPrice: 1299, rating: 4.1, reviews: 590, img: "https://images.pexels.com/photos/6077365/pexels-photo-6077365.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800", category: "Bags", size: "Free Size" },
    { id: 9, brand: "Fossil", name: "Vintage Watch", price: 1299, oldPrice: 2499, rating: 4.3, reviews: 640, img: "https://images.pexels.com/photos/1143760/pexels-photo-1143760.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800", category: "Watches", size: "Free Size" },
    { id: 10, brand: "Puma", name: "Sports Socks (Pack of 3)", price: 299, oldPrice: 599, rating: 4.0, reviews: 310, img: "https://images.pexels.com/photos/6311663/pexels-photo-6311663.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800", category: "Socks", size: "Free Size" },
    { id: 11, brand: "AUIND", name: "Fashion Glasses", price: 499, oldPrice: 999, rating: 4.1, reviews: 420, img: "https://images.pexels.com/photos/1578871/pexels-photo-1578871.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800", category: "Sunglasses", size: "Free Size" },
    { id: 12, brand: "Roadster", name: "Cap Retro Edition", price: 349, oldPrice: 699, rating: 4.2, reviews: 380, img: "https://images.pexels.com/photos/1456733/pexels-photo-1456733.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800", category: "Caps", size: "Free Size" },
  ];

  const { cart, setCart } = useCart();
  const { wishlist, setWishlist } = useWishlist();
  const navigate = useNavigate();

  const [selectedCats, setSelectedCats] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("recommended");
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = filterOpen || sortOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [filterOpen, sortOpen]);

  const toggleWishlist = (product) => {
    const exists = wishlist.some((item) => item.id === product.id);
    if (exists) {
      setWishlist(wishlist.filter((x) => x.id !== product.id));
      toast.error("Removed from Wishlist", { style: { background: "#0a0f12", color: "#ff4d4d", border: "1px solid #ff4d4d" } });
    } else {
      setWishlist([...wishlist, product]);
      toast.success("Added to Wishlist!", { style: { background: "#0a0f12", color: "#00eaff", border: "1px solid #00eaff" } });
    }
  };

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      toast.error("Already in Cart!", { style: { background: "#0a0f12", color: "#ff4d4d", border: "1px solid #ff4d4d" } });
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      toast.success("Added to Cart!", { style: { background: "#0a0f12", color: "#00eaff", border: "1px solid #00eaff" } });
    }
  };

  const toggle = (setter, arr, val) =>
    arr.includes(val) ? setter(arr.filter((x) => x !== val)) : setter([...arr, val]);

  const clearAll = () => {
    setSelectedCats([]); setSelectedBrands([]);
    setMinPrice(""); setMaxPrice("");
  };

  const activeFilterCount =
    selectedCats.length + selectedBrands.length +
    (minPrice ? 1 : 0) + (maxPrice ? 1 : 0);

  const filtered = useMemo(() => {
    let r = products.filter((p) => {
      if (selectedCats.length && !selectedCats.includes(p.category)) return false;
      if (selectedBrands.length && !selectedBrands.includes(p.brand)) return false;
      if (minPrice && p.price < Number(minPrice)) return false;
      if (maxPrice && p.price > Number(maxPrice)) return false;
      return true;
    });
    return r.sort((a, b) => {
      switch (sortBy) {
        case "price-asc": return a.price - b.price;
        case "price-desc": return b.price - a.price;
        case "rating": return b.rating - a.rating;
        default: return b.id - a.id;
      }
    });
  }, [selectedCats, selectedBrands, minPrice, maxPrice, sortBy]);

  const pctOff = (p) => Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100);

  const sortLabels = {
    recommended: "Recommended",
    "price-asc": "Price: Low to High",
    "price-desc": "Price: High to Low",
    rating: "Top Rated",
  };

  const FilterPanel = ({ onApply }) => (
    <div className="space-y-6 text-white">
      {/* Categories — pill style works great for accessories */}
      <div>
        <h4 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">Categories</h4>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button key={c} onClick={() => toggle(setSelectedCats, selectedCats, c)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${selectedCats.includes(c) ? "bg-cyan-500 text-black border-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.4)]" : "bg-white/5 text-gray-300 border-white/10 hover:border-white/30"}`}>
              {selectedCats.includes(c) && <FaCheck className="text-[9px]" />}
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Brands */}
      <div>
        <h4 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">Brands</h4>
        <div className="grid grid-cols-2 gap-2">
          {brands.map((b) => (
            <button key={b} onClick={() => toggle(setSelectedBrands, selectedBrands, b)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm border transition-all ${selectedBrands.includes(b) ? "bg-cyan-500/20 border-cyan-400 text-cyan-300 font-semibold" : "bg-white/5 border-white/10 text-gray-300 hover:border-white/30"}`}>
              <span className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center flex-shrink-0 ${selectedBrands.includes(b) ? "bg-cyan-400 border-cyan-400" : "border-gray-500"}`}>
                {selectedBrands.includes(b) && <FaCheck className="text-black text-[8px]" />}
              </span>
              {b}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">Price Range (₹)</h4>
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">₹</span>
            <input placeholder="Min" value={minPrice} onChange={(e) => setMinPrice(e.target.value.replace(/\D/, ""))}
              className="w-full pl-7 pr-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-200 focus:outline-none focus:border-cyan-500 focus:bg-cyan-500/5 transition-all" />
          </div>
          <div className="flex-1 relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">₹</span>
            <input placeholder="Max" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value.replace(/\D/, ""))}
              className="w-full pl-7 pr-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-200 focus:outline-none focus:border-cyan-500 focus:bg-cyan-500/5 transition-all" />
          </div>
        </div>
      </div>

      {onApply && (
        <button onClick={onApply}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 text-black font-bold text-sm shadow-[0_4px_20px_rgba(6,182,212,0.3)] active:scale-95 transition-all">
          Show {filtered.length} Results
        </button>
      )}
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-[#050607] text-white">

      {/* MOBILE FILTER DRAWER */}
      {filterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setFilterOpen(false)} />
          <div className="absolute bottom-0 left-0 right-0 bg-[#0b1215] rounded-t-3xl max-h-[88vh] flex flex-col border-t border-white/10 shadow-2xl">
            <div className="flex justify-center pt-3 pb-1 flex-shrink-0">
              <div className="w-10 h-1 bg-white/20 rounded-full" />
            </div>
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 flex-shrink-0">
              <div className="flex items-center gap-2">
                <h2 className="text-base font-bold">Filters</h2>
                {activeFilterCount > 0 && <span className="bg-cyan-500 text-black text-xs font-bold px-2 py-0.5 rounded-full">{activeFilterCount}</span>}
              </div>
              <div className="flex items-center gap-3">
                {activeFilterCount > 0 && <button onClick={clearAll} className="text-xs text-cyan-400 font-semibold">Clear All</button>}
                <button onClick={() => setFilterOpen(false)} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <FaTimes className="text-sm" />
                </button>
              </div>
            </div>
            <div className="overflow-y-auto flex-1 px-5 py-5">
              <FilterPanel onApply={() => setFilterOpen(false)} />
            </div>
          </div>
        </div>
      )}

      {/* MOBILE SORT SHEET */}
      {sortOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSortOpen(false)} />
          <div className="absolute bottom-0 left-0 right-0 bg-[#0b1215] rounded-t-3xl border-t border-white/10 shadow-2xl pb-8">
            <div className="flex justify-center pt-3 pb-1"><div className="w-10 h-1 bg-white/20 rounded-full" /></div>
            <div className="px-5 py-3 border-b border-white/10"><h2 className="text-base font-bold">Sort By</h2></div>
            <div className="px-5 pt-3 space-y-1">
              {Object.entries(sortLabels).map(([val, label]) => (
                <button key={val} onClick={() => { setSortBy(val); setSortOpen(false); }}
                  className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-sm transition-all ${sortBy === val ? "bg-cyan-500/15 text-cyan-300 font-semibold border border-cyan-500/40" : "text-gray-300 hover:bg-white/5"}`}>
                  {label}
                  {sortBy === val && <FaCheck className="text-cyan-400 text-xs" />}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* HEADER */}
        <div className="mb-5">
          <nav className="text-xs text-gray-500 mb-2 flex items-center gap-1.5">
            <a href="/" className="hover:text-cyan-300 transition">Home</a>
            <span>›</span>
            <span className="text-cyan-400 font-semibold">Accessories</span>
          </nav>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">Accessories</h1>
          <p className="text-xs text-gray-400 mt-1">
            Watches • Bags • Shades • <span className="text-cyan-400 font-semibold">Style boosters</span>
          </p>
        </div>

        {/* MOBILE TOOLBAR */}
        <div className="flex gap-2 mb-4 lg:hidden">
          <button onClick={() => setFilterOpen(true)}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border text-sm font-semibold transition-all ${activeFilterCount > 0 ? "border-cyan-500 bg-cyan-500/10 text-cyan-300" : "border-white/15 bg-white/5 text-gray-200"}`}>
            <FaFilter className="text-xs" /> Filters
            {activeFilterCount > 0 && <span className="bg-cyan-500 text-black text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">{activeFilterCount}</span>}
          </button>
          <button onClick={() => setSortOpen(true)}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/15 bg-white/5 text-gray-200 text-sm font-semibold">
            <HiSortDescending className="text-base" /> {sortLabels[sortBy].split(":")[0]}
          </button>
        </div>

        {/* ACTIVE CHIPS */}
        {activeFilterCount > 0 && (
          <div className="flex gap-2 mb-4 overflow-x-auto pb-1 lg:hidden">
            {selectedCats.map((c) => (
              <span key={c} className="flex-shrink-0 flex items-center gap-1.5 bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 text-xs px-3 py-1.5 rounded-full font-medium">
                {c} <button onClick={() => toggle(setSelectedCats, selectedCats, c)}><FaTimes className="text-[10px]" /></button>
              </span>
            ))}
            {selectedBrands.map((b) => (
              <span key={b} className="flex-shrink-0 flex items-center gap-1.5 bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 text-xs px-3 py-1.5 rounded-full font-medium">
                {b} <button onClick={() => toggle(setSelectedBrands, selectedBrands, b)}><FaTimes className="text-[10px]" /></button>
              </span>
            ))}
            <button onClick={clearAll} className="flex-shrink-0 text-xs text-gray-400 px-2 py-1.5 underline">Clear all</button>
          </div>
        )}

        <p className="text-xs text-gray-500 mb-4 lg:hidden">{filtered.length} products</p>

        {/* LAYOUT */}
        <div className="flex gap-6">

          {/* DESKTOP SIDEBAR */}
          <aside className="hidden lg:block w-60 flex-shrink-0">
            <div className="sticky top-20 space-y-4">
              <div className="rounded-2xl p-5 border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-sm">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <FaFilter className="text-cyan-400 text-xs" /> Filters
                    {activeFilterCount > 0 && <span className="bg-cyan-500 text-black text-xs font-bold px-1.5 py-0.5 rounded-full">{activeFilterCount}</span>}
                  </h3>
                  {activeFilterCount > 0 && <button onClick={clearAll} className="text-xs text-cyan-400 font-semibold">Clear All</button>}
                </div>
                <FilterPanel />
              </div>
              <div className="rounded-2xl p-5 border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02]">
                <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">Sort By</h3>
                <div className="space-y-1">
                  {Object.entries(sortLabels).map(([val, label]) => (
                    <button key={val} onClick={() => setSortBy(val)}
                      className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-left transition-all ${sortBy === val ? "bg-cyan-500/15 text-cyan-300 font-semibold" : "text-gray-400 hover:bg-white/5 hover:text-gray-200"}`}>
                      {sortBy === val && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />}
                      {label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-600/10 to-transparent border border-cyan-500/20 text-xs text-gray-400">
                🚚 Free shipping on orders above <span className="text-cyan-300 font-semibold">₹999</span>
              </div>
            </div>
          </aside>

          {/* PRODUCTS */}
          <section className="flex-1 min-w-0">
            <div className="hidden lg:flex items-center justify-between mb-4">
              <p className="text-sm text-gray-400"><span className="text-white font-semibold">{filtered.length}</span> products</p>
            </div>

            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-lg font-semibold text-gray-300 mb-1">No products found</h3>
                <p className="text-sm text-gray-500 mb-4">Try adjusting your filters</p>
                <button onClick={clearAll} className="px-5 py-2.5 rounded-xl bg-cyan-500 text-black text-sm font-bold">Clear Filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
                {filtered.map((p) => {
                  const isWishlist = wishlist.some((x) => x.id === p.id);
                  return (
                    <article key={p.id} onClick={() => navigate(`/product/${p.id}`)}
                      className="relative rounded-2xl overflow-hidden bg-white text-black cursor-pointer group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-gray-100 active:scale-[0.98]">
                      <button onClick={(e) => { e.stopPropagation(); toggleWishlist(p); }}
                        className="absolute right-2.5 top-2.5 z-20 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center transition-transform hover:scale-110 active:scale-95">
                        {isWishlist ? <GiHeartWings className="text-red-500 text-base" /> : <FaHeart className="text-gray-300 text-sm" />}
                      </button>
                      <div className="absolute left-2.5 top-2.5 z-10 bg-cyan-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md">{pctOff(p)}% OFF</div>
                      <div className="w-full h-44 sm:h-52 bg-gray-100 overflow-hidden">
                        <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => { e.target.onerror = null; e.target.src = "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800"; }} />
                      </div>
                      <div className="px-3 py-2.5">
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="text-[11px] font-bold tracking-wide text-cyan-600 uppercase">{p.brand}</span>
                          <span className="flex items-center gap-0.5 text-[11px] font-semibold text-cyan-700 bg-cyan-50 px-1.5 py-0.5 rounded-full border border-cyan-100">
                            <FaStar className="text-[9px]" /> {p.rating}
                          </span>
                        </div>
                        <h3 className="text-xs text-gray-600 line-clamp-2 leading-relaxed min-h-[2.5rem]">{p.name}</h3>
                        <div className="mt-2 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-gray-400 line-through">₹{p.oldPrice}</span>
                            <div className="text-base font-bold text-cyan-600 leading-tight">₹{p.price}</div>
                          </div>
                          <button onClick={(e) => { e.stopPropagation(); addToCart(p); }}
                            className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-400 to-cyan-600 text-black text-xs font-bold shadow-sm active:scale-95 transition-all">
                            Add
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}