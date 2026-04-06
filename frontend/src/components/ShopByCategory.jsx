import React from "react";
import {
  Accessories,
  Activewear,
  Bags,
  Beauty,
  Ethnicwear,
  Footwear,
  Indowestern,
  Kidswear,
  Menswear,
  Womenswear,
} from "../images/shop/ImagesShop";

const categories = [
  { id: 1, image: Menswear, title: "Mens Wear", offer: "40–70% OFF" },
  { id: 2, image: Womenswear, title: "Womens Wear", offer: "50–80% OFF" },
  { id: 3, image: Kidswear, title: "Kids Wear", offer: "30–60% OFF" },
  { id: 4, image: Accessories, title: "Accessories", offer: "20–50% OFF" },
  { id: 5, image: Ethnicwear, title: "Ethnic Wear", offer: "40–80% OFF" },
  { id: 6, image: Indowestern, title: "Indo-Western", offer: "30–70% OFF" },
  { id: 7, image: Activewear, title: "Activewear", offer: "40–80% OFF" },
  { id: 8, image: Footwear, title: "Footwear", offer: "30–60% OFF" },
  { id: 9, image: Bags, title: "Bags", offer: "20–50% OFF" },
  { id: 10, image: Beauty, title: "Beauty & Grooming", offer: "15–40% OFF" },
];

export default function ShopByCategory() {
  return (
    <div
      className="w-full px-6 p-10 bg-black border-b-2 border-cyan-400"
      data-aos="fade-up"
      data-aos-duration="900"
    >
      <p className="text-xl text-center mb-10 uppercase tracking-normal text-cyan-400 font-semibold"
           data-aos="fade-right"
           data-aos-delay="200"
        >
          Shop by Category
        </p>

      <div
        className="grid grid-cols-2 md:grid-cols-5 gap-8"
        data-aos="fade-up"
        data-aos-delay="150"
        data-aos-duration="1000"
      >
        {categories.map((cat, index) => (
          <div
            key={cat.id}
            className="relative group cursor-pointer rounded-xl overflow-hidden border-4 border-white hover:border-0 hover:scale-102 transition-all duration-500"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            data-aos-duration="900"
          >
            {/* Image */}
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-700"
            />

            {/* Gradient Offer Banner */}
            <div className="absolute bottom-0 w-full bg-linear-to-t from-[#00fff5]/90 via-[#00fff5]/70 to-transparent py-4 px-3 text-white">
              <h3 className="text-lg md:text-xl font-bold drop-shadow-md">{cat.title}</h3>
              <p className="text-xs md:text-sm font-semibold mt-1 opacity-90">{cat.offer}</p>
              <button className="mt-2 text-xs md:text-sm font-bold underline decoration-2 underline-offset-4 hover:text-yellow-300">
                Shop Now
              </button>
            </div>

            {/* Hover Dark Layer */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
