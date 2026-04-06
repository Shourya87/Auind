import React from "react";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const products = [
  {
    id: 1,
    title: "Casual Wear Shirt",
    price: "₹1299",
    img: "https://images.pexels.com/photos/35203716/pexels-photo-35203716.jpeg",
    desc: "Soft breathable cotton casual fit",
  },
  {
    id: 2,
    title: "Printed Half Sleeve Shirt",
    price: "₹1399",
    img: "https://images.pexels.com/photos/9491356/pexels-photo-9491356.jpeg",
    desc: "Premium wrinkle-free fabric",
  },
  {
    id: 3,
    title: "Womens Elegant Shirt",
    price: "₹1199",
    img: "https://images.pexels.com/photos/15566258/pexels-photo-15566258.jpeg",
    desc: "Soft rayon summer style",
  },
];

export default function TopRatedProduct() {
  return (
    <div
      className="w-full bg-black py-16 px-8 border-b-2 border-cyan-400"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <p className="text-sm uppercase tracking-widest text-cyan-400 font-semibold"
           data-aos="fade-right"
           data-aos-delay="200"
        >
          Trending Products
        </p>

        <h1
          className="text-4xl sm:text-5xl font-extrabold text-white mt-2 tracking-tight"
          data-aos="zoom-in"
        >
          Top Rated Products
        </h1>

        <p
          className="text-gray-400 text-sm sm:text-base mt-2 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Explore premium trend picks curated by AUIND designers. 
          From daily streetwear to Indo-western magic.
        </p>
      </div>

      {/* Cards */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {products.map((p, i) => (
          <div
            key={p.id}
            className="bg-white rounded-3xl shadow-xl pt-8 pb-10 px-6 hover:scale-[1.03] hover:shadow-cyan-300/40
                       transition-all cursor-pointer group"
            data-aos="zoom-in"
            data-aos-delay={i * 120}
          >

            {/* Product Image */}
            <img
              src={p.img}
              alt={p.title}
              className="h-[230px] w-full object-cover rounded-2xl drop-shadow-lg
                         group-hover:scale-105 transition"
            />

            {/* Rating */}
            <div className="flex justify-center gap-1 text-yellow-400 text-xl mt-4">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </div>

            {/* Title */}
            <h2 className="text-center mt-3 text-lg font-semibold text-black">
              {p.title}
            </h2>

            {/* Description */}
            <p className="text-center text-gray-500 text-sm mt-1 leading-tight">
              {p.desc}
            </p>

            {/* Price */}
            <p className="text-center text-black font-bold text-xl mt-2">
              {p.price}
            </p>

            {/* Button */}
            <button
              className="block mx-auto mt-5 bg-linear-to-r from-cyan-400 to-cyan-300
                        text-black font-bold px-6 py-2 rounded-full hover:from-cyan-300
                        hover:to-cyan-200 transition-all"
            >
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
