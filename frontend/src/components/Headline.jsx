// Headline.jsx
import React, { useState, useEffect } from "react";

export default function Headline() {
  const messages = [
    "🔥 Welcome to AUIND - Feel the Indian Aura!",
    "💥 Mega Sale Live — Up to 70% OFF!",
    "🛍️ New Arrivals Dropped — Shop the Latest Trends!",
    "🚚 Free Delivery on Orders Above ₹999",
    "⭐ Best Quality • Best Price • Made for India",
    "❤️ 10,000+ Happy Customers Across India",
  ];

  const [index, setIndex] = useState(0);

  // Change message when animation finishes
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 10000); // 9 seconds = animation duration

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-8 bg-[#00fff5]">
      <div className="max-w-8xl h-full flex items-center mx-auto overflow-hidden">
        {/* Sliding Text */}
        <div
          key={index}
          className="headline-text w-full text-black font-semibold text-[17px]"
        >
          {messages[index]}
        </div>
      </div>
    </div>
  );
}
