// ProductPage.jsx
import React, { useState, useEffect, useMemo, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FaHeart, FaStar, FaMinus, FaPlus } from "react-icons/fa";
import { GiHeartWings } from "react-icons/gi";
import toast from "react-hot-toast";

import { useCart } from "../../Context/CardContext";
import { useWishlist } from "../../Context/WishlistContext";

/* ---------- Products Data (unchanged) ---------- */
const products = [
  {
    id: 1,
    brand: "HIGHLANDER",
    name: "Men Printed Casual Shirt — Chocolate Brown",
    price: 609,
    oldPrice: 3399,
    rating: 4.4,
    reviews: 1420,
    size: "L",
    stock: 12,
    category: "Shirts",
    description:
      "Premium cotton shirt designed for comfort. Stylish printed design perfect for casual outings.",
    images: [
      "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg",
      "https://images.pexels.com/photos/6311644/pexels-photo-6311644.jpeg",
      "https://images.pexels.com/photos/6311661/pexels-photo-6311661.jpeg"
    ],
    colors: [
      { id: 1, label: "Brown", hex: "#6b3f2f" },
      { id: 2, label: "Black", hex: "#111827" },
      { id: 3, label: "Beige", hex: "#d9cbb7" }
    ]
  },

  {
    id: 2,
    brand: "HIGHLANDER",
    name: "Men Printed Casual Shirt — Black",
    price: 609,
    oldPrice: 3399,
    rating: 4.4,
    reviews: 1420,
    size: "L",
    stock: 6,
    category: "Shirts",
    description: "Same design in black color. Premium cotton shirt.",
    images: [
      "https://images.pexels.com/photos/6311656/pexels-photo-6311656.jpeg",
      "https://images.pexels.com/photos/1701193/pexels-photo-1701193.jpeg",
      "https://images.pexels.com/photos/1143763/pexels-photo-1143763.jpeg"
    ],
    colors: [
      { id: 1, label: "Brown", hex: "#6b3f2f" },
      { id: 2, label: "Black", hex: "#111827" },
      { id: 3, label: "Beige", hex: "#d9cbb7" }
    ]
  },

  {
    id: 3,
    brand: "HIGHLANDER",
    name: "Men Printed Casual Shirt — Beige",
    price: 609,
    oldPrice: 3399,
    rating: 4.4,
    reviews: 1420,
    size: "L",
    stock: 0,
    category: "Shirts",
    description: "Beige color of the same premium cotton shirt.",
    images: [
      "https://images.pexels.com/photos/1701193/pexels-photo-1701193.jpeg",
      "https://images.pexels.com/photos/1468378/pexels-photo-1468378.jpeg",
      "https://images.pexels.com/photos/6311644/pexels-photo-6311644.jpeg"
    ],
    colors: [
      { id: 1, label: "Brown", hex: "#6b3f2f" },
      { id: 2, label: "Black", hex: "#111827" },
      { id: 3, label: "Beige", hex: "#d9cbb7" }
    ]
  },

  {
    id: 4,
    brand: "BEWAKOOF",
    name: "Men Oversized Graphic Tee",
    price: 599,
    oldPrice: 1299,
    rating: 4.4,
    reviews: 1020,
    size: "M",
    stock: 15,
    category: "T-Shirts",
    description: "Soft premium cotton tee for daily wear.",
    images: [
      "https://images.pexels.com/photos/6311656/pexels-photo-6311656.jpeg",
      "https://images.pexels.com/photos/1701193/pexels-photo-1701193.jpeg",
      "https://images.pexels.com/photos/1143763/pexels-photo-1143763.jpeg"
    ],
    colors: []
  },

  {
    id: 5,
    brand: "AUIND",
    name: "Streetwear Boxy Tee",
    price: 699,
    oldPrice: 1499,
    rating: 4.1,
    reviews: 278,
    size: "L",
    stock: 20,
    category: "T-Shirts",
    description: "Premium streetwear boxy fit tee.",
    images: [
      "https://images.pexels.com/photos/1701193/pexels-photo-1701193.jpeg",
      "https://images.pexels.com/photos/1468378/pexels-photo-1468378.jpeg",
      "https://images.pexels.com/photos/6311644/pexels-photo-6311644.jpeg"
    ],
    colors: []
  },

  {
    id: 6,
    brand: "CAMPUS SUTRA",
    name: "Slim Fit Cotton Shirt",
    price: 579,
    oldPrice: 2899,
    rating: 3.9,
    reviews: 147,
    size: "M",
    stock: 8,
    category: "Shirts",
    description: "Slim fit stylish cotton shirt.",
    images: [
      "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg",
      "https://images.pexels.com/photos/6311661/pexels-photo-6311661.jpeg",
      "https://images.pexels.com/photos/1143763/pexels-photo-1143763.jpeg"
    ],
    colors: []
  },

  {
    id: 7,
    brand: "FUBAR",
    name: "Bomber Jacket",
    price: 1799,
    oldPrice: 2999,
    rating: 4.5,
    reviews: 450,
    size: "XL",
    stock: 5,
    category: "Jackets",
    description: "Warm bomber jacket for winter.",
    images: [
      "https://images.pexels.com/photos/1468378/pexels-photo-1468378.jpeg",
      "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg",
      "https://images.pexels.com/photos/6311656/pexels-photo-6311656.jpeg"
    ],
    colors: []
  },

  {
    id: 8,
    brand: "HIGH&CO",
    name: "Soft Winter Hoodie",
    price: 1499,
    oldPrice: 2499,
    rating: 4.2,
    reviews: 310,
    size: "L",
    stock: 11,
    category: "Hoodies",
    description: "Comfortable soft hoodie for cold days.",
    images: [
      "https://images.pexels.com/photos/6311393/pexels-photo-6311393.jpeg",
      "https://images.pexels.com/photos/6311644/pexels-photo-6311644.jpeg",
      "https://images.pexels.com/photos/1701193/pexels-photo-1701193.jpeg"
    ],
    colors: []
  },

  {
    id: 9,
    brand: "BEWAKOOF",
    name: "Daily Casual Tee",
    price: 499,
    oldPrice: 899,
    rating: 4.0,
    reviews: 670,
    size: "M",
    stock: 14,
    category: "T-Shirts",
    description: "Lightweight casual tee for everyday wear.",
    images: [
      "https://images.pexels.com/photos/1143763/pexels-photo-1143763.jpeg",
      "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg",
      "https://images.pexels.com/photos/6311661/pexels-photo-6311661.jpeg"
    ],
    colors: []
  },

  {
    id: 10,
    brand: "FUBAR",
    name: "Slim Fit Trousers",
    price: 899,
    oldPrice: 1699,
    rating: 4.1,
    reviews: 210,
    size: "L",
    stock: 7,
    category: "Bottom Wear",
    description: "Comfortable and stretchable trousers.",
    images: [
      "https://images.pexels.com/photos/6311661/pexels-photo-6311661.jpeg",
      "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg",
      "https://images.pexels.com/photos/1143763/pexels-photo-1143763.jpeg"
    ],
    colors: []
  },

  {
    id: 11,
    brand: "AUIND",
    name: "Trendy Overshirt",
    price: 1299,
    oldPrice: 2299,
    rating: 4.3,
    reviews: 390,
    size: "XL",
    stock: 9,
    category: "Shirts",
    description: "Stylish overshirt for layering.",
    images: [
      "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg",
      "https://images.pexels.com/photos/6311644/pexels-photo-6311644.jpeg",
      "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg"
    ],
    colors: []
  },

  {
    id: 12,
    brand: "AUIND",
    name: "Premium Black Jeans",
    price: 1299,
    oldPrice: 1999,
    rating: 4.6,
    reviews: 520,
    size: "L",
    stock: 4,
    category: "Jeans",
    description: "High quality premium black jeans.",
    images: [
      "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg",
      "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg",
      "https://images.pexels.com/photos/1701193/pexels-photo-1701193.jpeg"
    ],
    colors: []
  }
];

/* ==========================================================
   NEW LOCALSTORAGE SYSTEM FOR Q&A
========================================================== */
function useQnA(id) {
  const key = `qna_${id}`;
  const [qna, setQna] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem(key);
    if (stored) setQna(JSON.parse(stored));
  }, [id]);

  const addQ = (text) => {
    const newEntry = {
      id: Date.now(),
      question: text,
      time: new Date().toLocaleString(),
    };

    const updated = [...qna, newEntry];
    setQna(updated);
    localStorage.setItem(key, JSON.stringify(updated));
  };

  return { qna, addQ };
}

/* ==========================================================
   MAIN COMPONENT
========================================================== */
export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id));

  const { cart, setCart } = useCart();
  const { wishlist, setWishlist } = useWishlist();

  const [mainImg, setMainImg] = useState(product?.images?.[0]);
  const [selectedSize, setSelectedSize] = useState(product?.size ?? "M");
  const [qty, setQty] = useState(1);
  const [loadingMain, setLoadingMain] = useState(true);

  const imgRef = useRef(null);
  const [zoomActive, setZoomActive] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });

  const pctOff = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);

  const isWishlist = wishlist.some((item) => item.id === product.id);
  const inCart = cart.some((c) => c.id === product.id);
  const isOut = product.stock <= 0;
  const isLow = product.stock > 0 && product.stock <= 5;

  /* NEW: QNA HOOK */
  const { qna, addQ } = useQnA(id);
  const [qInput, setQInput] = useState("");

  /* Image movement handlers */
  const handleZoomMove = (e) => {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setZoomPos({ x, y });
  };

  useEffect(() => {
    if (product) {
      setMainImg(product.images[0]);
      setSelectedSize(product.size ?? "M");
      setQty(1);
    }
  }, [product]);

  /* Wishlist toggle */
  const toggleWishlist = () => {
    if (isWishlist) {
      setWishlist(wishlist.filter((i) => i.id !== product.id));
      toast.error("Removed from wishlist");
    } else {
      setWishlist([...wishlist, product]);
      toast.success("Saved to wishlist");
    }
  };

  /* Add to cart */
  const addToCart = () => {
    if (isOut) return;

    const copy = [...cart];
    const found = copy.find((i) => i.id === product.id);

    if (found) {
      found.qty += qty;
    } else {
      copy.push({ ...product, qty });
    }

    setCart(copy);
    toast.success("Added to cart");
  };

  /* Related items */
  const related = useMemo(() => {
    return products.filter(
      (p) => p.category === product.category && p.id !== product.id
    ).slice(0, 4);
  }, [product]);

  /* Frequently bought */
  const fbt = useMemo(() => {
    return related.slice(0, 2).map((p) => ({ ...p, qty: 1 }));
  }, [related]);

  if (!product) {
    return (
      <div className="text-white mt-32 text-center text-3xl font-bold">
        Product not found
      </div>
    );
  }

  /* ==========================================================
     UI START
  ========================================================== */
  return (
    <div className="min-h-screen w-full bg-[#050607] text-white px-4 sm:px-6 lg:px-8 py-10">

      {/* BREADCRUMB */}
      <nav className="text-gray-500 text-sm mb-6">
        <Link to="/" className="hover:text-cyan-400">Home</Link> /
        <Link to="/mens" className="ml-2 hover:text-cyan-400">Mens</Link> /
        <span className="ml-2 text-cyan-400">{product.name}</span>
      </nav>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* -------------------------------- IMAGES -------------------------------- */}
        <div className="flex flex-col gap-4">

          {/* Main image */}
          <div
            className="relative rounded-xl overflow-hidden bg-[#0b1116]"
            style={{ minHeight: "430px" }}
            onMouseEnter={() => setZoomActive(true)}
            onMouseLeave={() => setZoomActive(false)}
            onMouseMove={handleZoomMove}
          >
            <img
              ref={imgRef}
              src={mainImg}
              alt=""
              draggable={false}
              onLoad={() => setLoadingMain(false)}
              className={`w-full h-[460px] object-cover transition-all duration-300 ${
                loadingMain ? "opacity-20" : "opacity-100"
              }`}
            />

            {/* ZOOM WINDOW */}
            {zoomActive && (
              <div
                className="hidden md:block absolute right-3 top-3 w-64 h-64 border border-cyan-400 rounded-xl overflow-hidden"
                style={{
                  backgroundImage: `url(${mainImg})`,
                  backgroundSize: "200% 200%",
                  backgroundPosition: `${zoomPos.x * 100}% ${zoomPos.y * 100}%`,
                }}
              />
            )}

            {/* STOCK BADGE */}
            <div
              className="absolute left-3 top-3 px-3 py-1 rounded-md text-xs font-semibold"
              style={{
                background: isOut
                  ? "#4b5563"
                  : isLow
                  ? "#b45309"
                  : "#059669",
              }}
            >
              {isOut ? "OUT OF STOCK" : isLow ? `Only ${product.stock} left` : "IN STOCK"}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 overflow-x-auto">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => {
                  setMainImg(img);
                  setLoadingMain(true);
                }}
                className={`rounded-xl overflow-hidden border transition-all duration-300 
                ${mainImg === img ? "border-cyan-400" : "border-gray-700"}`}
              >
                <img
                  src={img}
                  alt=""
                  draggable={false}
                  className="h-20 w-20 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* -------------------------------- DETAILS -------------------------------- */}
        <div className="space-y-5">

          <h1 className="text-3xl font-extrabold leading-tight">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-3">
            <span className="text-cyan-400 font-semibold italic">{product.brand}</span>
            <span className="px-2 py-1 bg-cyan-50 text-cyan-700 rounded-full border text-xs flex items-center gap-1">
              <FaStar className="text-[10px]" /> {product.rating}
            </span>
            <span className="text-gray-400 text-xs">
              {product.reviews}+ ratings
            </span>
          </div>

          {/* Price */}
          <div className="flex items-end gap-4">
            <div>
              <div className="text-3xl font-bold text-cyan-400">₹{product.price}</div>
              <div className="text-xs line-through text-gray-500">
                ₹{product.oldPrice}
              </div>
            </div>
            <div className="text-green-400 font-semibold text-lg">
              {pctOff}% OFF
            </div>
          </div>

          {/* Short description */}
          <p className="text-gray-300 text-sm leading-relaxed">
            Premium cotton comfort. Soft feel, breathable weave, versatile styling.
            Perfect for daily wear, college & casual evenings.
          </p>

          {/* USP tags */}
          <div className="flex gap-2 flex-wrap">
            <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-[11px] rounded">Free Delivery</span>
            <span className="px-2 py-1 bg-green-500/20 text-green-300 text-[11px] rounded">7-Day Return</span>
            <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-[11px] rounded">COD Available</span>
          </div>

          {/* Sizes */}
          <div>
            <h4 className="text-gray-300 text-sm mb-1 font-semibold">Select Size</h4>
            <div className="flex gap-2">
              {["S", "M", "L", "XL"].map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`px-3 py-1 rounded-md border text-sm transition 
                  ${selectedSize === s
                    ? "bg-cyan-400 text-black border-cyan-400"
                    : "border-gray-700 text-gray-300"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-[#0b1012] border border-gray-800 rounded">
              <button className="p-3" onClick={() => setQty((q) => Math.max(1, q - 1))}>
                <FaMinus />
              </button>
              <div className="px-4 font-semibold">{qty}</div>
              <button className="p-3" onClick={() => setQty((q) => q + 1)}>
                <FaPlus />
              </button>
            </div>

            <button
              disabled={isOut}
              onClick={addToCart}
              className={`px-6 py-3 font-bold rounded-md transition-all duration-200
                ${isOut
                  ? "bg-gray-600 text-gray-300"
                  : "bg-cyan-400 text-black hover:shadow-[0_0_25px_rgba(0,255,255,0.4)]"
                }`}
            >
              {isOut ? "OUT OF STOCK" : inCart ? "ADD MORE" : "ADD TO CART"}
            </button>

            <button
              onClick={toggleWishlist}
              className="p-3 bg-white rounded-full shadow border hover:scale-105 transition"
            >
              {isWishlist ? (
                <GiHeartWings className="text-red-500 text-xl" />
              ) : (
                <FaHeart className="text-gray-400 text-xl" />
              )}
            </button>
          </div>

          {/* Specifications */}
          <div className="p-4 rounded-xl bg-[#071014] border border-gray-800 space-y-1">
            <h4 className="font-semibold">Product Specifications</h4>
            <p className="text-xs text-gray-400">Material: 100 percent cotton</p>
            <p className="text-xs text-gray-400">Fit: Regular Fit</p>
            <p className="text-xs text-gray-400">Wash: Machine wash</p>
          </div>

          {/* Delivery + Return */}
          <div className="p-4 rounded-xl bg-[#071014] border border-gray-800 space-y-1">
            <h4 className="font-semibold">Delivery & Return</h4>
            <p className="text-xs text-gray-400">Delivery within 4 to 6 days</p>
            <p className="text-xs text-gray-400">Order above ₹499 = Free shipping</p>
            <p className="text-xs text-gray-400">7-Day size exchange available</p>
          </div>

          {/* Dynamic QnA */}
          <div className="p-4 rounded-xl bg-[#071014] border border-gray-800 space-y-4">
            <h4 className="font-semibold">Customer Questions</h4>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!qInput.trim()) return;
                addQ(qInput);
                setQInput("");
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                placeholder="Ask a question..."
                value={qInput}
                onChange={(e) => setQInput(e.target.value)}
                className="flex-1 px-3 py-2 rounded bg-black text-sm border border-gray-700"
              />

              <button
                type="submit"
                className="px-4 py-2 rounded bg-cyan-400 text-black font-semibold"
              >
                Ask
              </button>
            </form>

            <div className="space-y-3 max-h-40 overflow-y-auto">
              {qna.length === 0 && (
                <p className="text-xs text-gray-500">No questions yet.</p>
              )}

              {qna.map((q) => (
                <div
                  key={q.id}
                  className="p-2 border border-gray-800 rounded bg-[#0b1012]"
                >
                  <p className="text-sm">{q.question}</p>
                  <p className="text-[10px] text-gray-500">{q.time}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* RELATED PRODUCTS */}
      <div className="max-w-7xl mx-auto mt-12">
        <h2 className="text-xl font-bold mb-4">Related Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {related.map((p) => (
            <Link
              key={p.id}
              to={`/product/${p.id}`}
              className="bg-white text-black rounded-xl overflow-hidden shadow hover:scale-[1.03] transition"
            >
              <img src={p.images[0]} className="h-40 w-full object-cover" alt="" />
              <div className="p-3">
                <div className="text-sm text-cyan-600 font-semibold">
                  {p.brand}
                </div>
                <div className="text-xs text-gray-700 line-clamp-2">{p.name}</div>
                <div className="font-bold text-cyan-500 mt-1">₹{p.price}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
