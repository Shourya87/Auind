import React from "react";
import {
  Best1,
  Best2,
  Best3,
  Best4,
  Best5,
  Best6,
  Best7,
  Best8,
  Best9,
  Best10,
} from "../images/best/ImagesBest";
import { FaHeart } from "react-icons/fa";

const items = [
  { id: 1, img: Best1, title: "Graphic Street Tee", price: "₹799", desc: "Soft cotton streetwear fit", rating: 4.5 },
  { id: 2, img: Best2, title: "Men’s Oversized Shirt", price: "₹1099", desc: "Casual relaxed premium fit", rating: 4.2 },
  { id: 3, img: Best3, title: "Plain Cotton Tee", price: "₹599", desc: "Everyday soft fabric tee", rating: 4.3 },
  { id: 4, img: Best4, title: "Indie Kurti", price: "₹1299", desc: "Indian handcrafted design", rating: 4.7 },
  { id: 5, img: Best5, title: "Street Hoodie", price: "₹1499", desc: "Winter cozy oversized hoodie", rating: 4.4 },
  { id: 6, img: Best6, title: "Fashion Jacket", price: "₹1999", desc: "Premium layered streetwear", rating: 4.6 },
  { id: 7, img: Best7, title: "Women's Stylish Top", price: "₹899", desc: "Trendy soft-touch fabric", rating: 4.1 },
  { id: 8, img: Best8, title: "Printed Kurti Set", price: "₹1399", desc: "Elegant ethnic fusion set", rating: 4.8 },
  { id: 9, img: Best9, title: "Denim Jacket", price: "₹1699", desc: "Heavy-duty all-season wear", rating: 4.3 },
  { id: 10, img: Best10, title: "Solid Tee", price: "₹499", desc: "Minimal premium daily wear", rating: 4.0 },
];

export default function BestSeller() {
  return (
    <div
      className="w-full px-6 p-10 text-center bg-black border-y-2 border-cyan-400"
      data-aos="fade-up"
      data-aos-duration="900"
    >
      <p className="text-sm uppercase tracking-widest text-cyan-400 font-semibold"
           data-aos="fade-right"
           data-aos-delay="200"
        >
          Best Sellers
        </p>

        <h1
          className="text-4xl sm:text-5xl font-extrabold text-white mt-2 tracking-tight"
          data-aos="zoom-in"
        >
          Week’s hottest sellers.
        </h1>

      <div
        className="grid grid-cols-2 md:grid-cols-5 mt-10 gap-6"
        data-aos="fade-up"
        data-aos-delay="150"
        data-aos-duration="1000"
      >
        {items.map((item, index) => (
          <div
            key={item.id}
            className="relative bg-white rounded-xl shadow-lg p-3 group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            data-aos-duration="900"
          >
            {/* Wishlist Icon */}
            <button className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition">
              <FaHeart size={20} />
            </button>

            {/* Image */}
            <div className="relative">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[230px] object-cover rounded-lg group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Title */}
            <h3 className="mt-3 font-semibold text-gray-900 text-[15px]">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-xs mt-1">
              {item.desc}
            </p>

            {/* Price */}
            <p className="text-gray-800 font-semibold mt-1">
              {item.price}
            </p>

            {/* Button */}
            <button className="w-full mt-3 bg-cyan-400 hover:bg-cyan-500 py-2 rounded-lg font-semibold text-black transition">
              Shop Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
