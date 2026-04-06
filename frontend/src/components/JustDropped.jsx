import React, { useRef, useEffect } from "react";
import {
  OversizeTshirt,
  FusionEthnicJacket,
  KurtiDress,
  StreetwearHoodie,
  KurtaSet,
  PrintedShirt,
  DenimJacket,
  GraphicTshirt,
  IndoWesternDress,
  HandCraftedJacket,
} from "../images/just/ImageJust";

const products = [
  { id: 1, image: OversizeTshirt, title: "Indie Printed Oversized Tee", price: "₹1299" },
  { id: 2, image: FusionEthnicJacket, title: "Ethnic Fusion Jacket", price: "₹1899" },
  { id: 3, image: KurtiDress, title: "Handcrafted Kurti Dress", price: "₹1499" },
  { id: 4, image: StreetwearHoodie, title: "Streetwear Hoodie", price: "₹1999" },
  { id: 5, image: KurtaSet, title: "Traditional Kurta Set", price: "₹1699" },
  { id: 6, image: PrintedShirt, title: "Printed Cotton Shirt", price: "₹999" },
  { id: 7, image: DenimJacket, title: "Classic Denim Jacket", price: "₹2499" },
  { id: 8, image: GraphicTshirt, title: "Oversized Graphic Tee", price: "₹1199" },
  { id: 9, image: IndoWesternDress, title: "Elegant Indo-Western Dress", price: "₹2099" },
  { id: 10, image: HandCraftedJacket, title: "Handcrafted Jacket", price: "₹1799" },
];

export default function JustDropped() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const slider = scrollRef.current;
    let scrollAmount = 0;

    const scrollInterval = setInterval(() => {
      slider.scrollLeft += 2;
      scrollAmount += 2;

      if (scrollAmount >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
        scrollAmount = 0;
      }
    }, 20);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div
      className="w-full py-8 px-8 border-b-2 border-cyan-400 bg-black"
      data-aos="fade-up"
      data-aos-duration="900"
    >
      <div className="max-w-5xl mx-auto text-center mb-10">
        <p className="text-sm uppercase tracking-widest text-cyan-400 font-semibold"
           data-aos="fade-right"
           data-aos-delay="200"
        >
          Just Dropped
        </p>

        <h1
          className="text-3xl sm:text-5xl font-extrabold text-white mt-2 tracking-tight"
          data-aos="zoom-in"
        >
          New Designed
        </h1>

        <p
          className="text-gray-400 text-sm sm:text-base mt-2 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Brand-new drops made to elevate your everyday look.
        </p>
      </div>

      {/* SCROLL AREA */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth whitespace-nowrap"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          overflowY: "hidden",
        }}
        data-aos="fade-up"
        data-aos-delay="150"
        data-aos-duration="1000"
      >
        <style>
          {`
            div::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        {[...products, ...products].map((item, index) => (
          <div
            key={index}
            className="min-w-[250px] mt-4 bg-white rounded-2xl shadow-lg p-3 hover:scale-105 transition-transform duration-300 mb-4"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            data-aos-duration="900"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[300px] object-cover rounded-xl"
            />
            <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.price}</p>
            <button className="w-full mt-3 bg-cyan-400 text-black font-semibold py-2 rounded-xl hover:bg-cyan-300">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
