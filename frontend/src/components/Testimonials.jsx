import React, { useState, useEffect } from "react";
import { FaStar, FaCheckCircle } from "react-icons/fa";

const data = [
  {
    name: "Arjun Mehta",
    rating: 5,
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress",
    review:
      "Fantastic fabric quality and very unique street looks. AUIND has become my go-to brand!",
  },
  {
    name: "Priya Sharma",
    rating: 4,
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress",
    review:
      "Loved the Indo-western fusion designs. Stylish, comfortable and well priced.",
  },
  {
    name: "Sachin Tendulkar",
    rating: 5,
    img: "https://images.pexels.com/photos/1559820/pexels-photo-1559820.jpeg?auto=compress",
    review:
      "Great fitting and premium finishing. Delivery was quick and professional.",
  },
  {
    name: "Victor D’Costa",
    rating: 4,
    img: "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress",
    review:
      "Amazing ethnic jackets! Fabric, stitching and colours feel very premium.",
  },
  {
    name: "Riya Sen",
    rating: 3,
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress",
    review:
      "Super comfortable kurti sets. Perfect for college outfits. AUIND rocks!",
  },
  {
    name: "Satya Nadella",
    rating: 5,
    img: "https://images.pexels.com/photos/723875/pexels-photo-723875.jpeg?auto=compress",
    review:
      "Premium quality + great UX. Proud to see such Indian brands rising high.",
  },
  {
    name: "Neha Kapoor",
    rating: 4,
    img: "https://images.pexels.com/photos/774558/pexels-photo-774558.jpeg?auto=compress",
    review:
      "Loved the denim collection! Exactly as shown, no false imagery.",
  },
  {
    name: "David Williams",
    rating: 4,
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress",
    review:
      "Interface is clean and product navigation is smooth. Loved it!",
  },
  {
    name: "Sneha Rao",
    rating: 5,
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress",
    review:
      "AUIND hoodies are insane! Warm, stylish & premium. Must try!",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const slides = [];
  for (let i = 0; i < data.length; i += 3)
    slides.push(data.slice(i, i + 3));

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div
      className="w-full py-20 px-4 bg-black border-b-2 border-cyan-400"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <p
          className="text-cyan-400 font-semibold uppercase tracking-widest text-sm"
          data-aos="fade-right"
        >
          What our customers say
        </p>

        <h2
          className="text-4xl sm:text-5xl font-extrabold text-white mt-2"
          data-aos="zoom-in"
        >
          Testimonial
        </h2>

        <p
          className="text-gray-400 text-sm sm:text-base mt-3 max-w-xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Real voices from our AUIND community sharing their experience.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative max-w-7xl mx-auto overflow-hidden h-[300px]">

        <div
          className="absolute inset-0 flex transition-transform duration-1500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((group, slideIndex) => (
            <div
              key={slideIndex}
              className="min-w-full grid py-10 grid-cols-1 md:grid-cols-3 gap-8 px-4"
            >
              {group.map((t, i) => (
                <div
                  key={i}
                  className="
                  bg-white/10 backdrop-blur-xl border border-cyan-400/20
                  rounded-3xl p-6 pt-12 text-gray-200 shadow-xl cursor-pointer
                  hover:shadow-cyan-400/20 transition
                "
                >
                  {/* Image */}
                  <img
                    src={t.img}
                    alt={t.name}
                    className="absolute left-1/2 -top-8 transform -translate-x-1/2
                      w-16 h-16 rounded-full object-cover border-4 border-black shadow-xl"
                  />

                  {/* Review */}
                  <p className="mt-4 text-center text-sm text-gray-300 leading-relaxed">
                    {t.review}
                  </p>

                  {/* Rating */}
                  <div className="flex justify-center gap-1 text-yellow-400 mt-3">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  {/* Name */}
                  <p className="mt-3 font-bold text-white text-base text-center">
                    {t.name}
                  </p>

                  {/* Verified */}
                  <p className="flex items-center justify-center gap-2 mt-1 text-cyan-400 text-xs">
                    <FaCheckCircle size={14} /> Verified Buyer
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-12">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${
              index === i ? "bg-cyan-400" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
